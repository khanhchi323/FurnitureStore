<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Users;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Resources\Users as UserResource;
use Illuminate\Support\Facades\Hash;


class UsersController extends Controller
{
    //list người dùng
    public function userList()
    {
        $userList = Users::all();
        $arr = [
            'status' => 200,
            'message' => 'Người dùng',
            'data' => UserResource::collection($userList)
        ];
        return response()->json($arr, 200);
    }
    //đăng nhập 
    public function loginUser(Request $request)
    {
        try {
            $validateUser = Validator::make(
                $request->all(),
                [
                    'email' => 'required|email|exists:users,email',
                    'password' => 'required'
                ]
            );

            if ($validateUser->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if (!Auth::attempt($request->only(['email', 'password']))) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Email & Password do not match with our records.',
                ], 401);
            }

            $user = Users::where('email', $request->email)->first();

            return response()->json([
                'status' => 200,
                'message' => 'Dang nhap thanh cong',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    //đăng kí 
    public function register(Request $request)
    {
        try {
            $input = $request->all();
            $validateUser = Validator::make(
                $input,
                [
                    'username' => 'required',
                    'password' => 'required|min:6',
                    'email' => 'required|string|email|max:255|unique:users',
                    //'first_name' => 'required',
                    //'last_name' => 'required',
                    //'telephone' => 'required'

                ]
            );
            if ($validateUser->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $user = Users::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'username' => $request->username,
                'password' => Hash::make($request->password),
                'phonenumber' => $request->phonenumber,
                'email' => $request->email,
                'role_id' => $request->input('role_id', 1)

            ]);

            return response()->json([
                'status' => 200,
                'message' => 'Tạo tai khoan thành công',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);
            
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => $th->getMessage()
            ], 500);
        }
    }
    //show thong tin 
    public function show(string $id){
        $user = Users::find($id);
        if(empty($user)){
            $arr = [
                'status'=>false,
                'message'=>'Không tìm thấy người dùng này',
                'data'=>null
            ];
            return response()->json($arr,404);
        }
        $arr=[
            'status'=>200,
            'message'=>'Thông tin người dùng',
            'data'=>$user
        ];
        return response()->json($arr,200);
    }
    //cập nhật thông tin người dùng

    public function update(Request $request, string $user)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $user = Users::find($user);

        if (!$user) {
            $arr = [
                'status' => false,
                'message' => 'Người dùng không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }
        $user->user_id = $input['user_id'] ?? null;
        $user->role_id = $input['role_id'] ?? null;
        $user->username = $input['username'] ?? null;
        $user->password = $input['password'] ?? null;
        $user->email = $input['email'] ?? null;
        $user->phonenumber = $input['phonenumber'] ?? null;
        //$user->avt_image = $input['avt_image'] ?? null;
        $user->first_name = $input['first_name'] ?? null;
        $user->last_name = $input['last_name'] ?? null;
        $user->save();

        $arr = [
            'status' => true,
            'message' => 'Cập nhật người dùng thành công',
            'data' => $user
        ];

        return response()->json($arr, 200);
    }
    //xoa nguoi dung
    public function delete(string $id)
    {
        try {
            // Find the user by ID and delete it
            $user = Users::findOrFail($id);
            $user->delete();

            $arr = [
                'status' => true,
                'message' => 'Xóa người dùng thành công',
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy người dùng',
                'error' => $e->getMessage(),
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Có lỗi xảy ra khi xóa người dùng',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
