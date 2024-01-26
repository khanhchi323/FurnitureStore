<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Discount;
use App\Http\Resources\Discount as DiscountResources;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class DiscountController extends Controller
{
    public function DiscountList(){
        $DiscountList=Discount::all();
        $arr=[
            'status'=>200,
            'message'=>'Danh sách mã giảm giá',
            'data'=>DiscountResources::collection($DiscountList)
        ];
        return response()->json($arr,200);
     }  

//Tạo mã giảm giá
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $Discount = Discount::create($input);
        $arr = [
            'status' => true,
            'message' => "Lưu thành công",
            'data' => new DiscountResources($Discount)
        ];
        return response()->json($arr, 201);
    }

//Show thông tin giảm giá
    public function show(string $id)
    {
        $Discount = Discount::find($id);

        if (empty($Discount)) {
            $arr = [
                'status' => false,
                'message' => 'Vui lòng thử lại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $arr = [
            'status' => true,
            'message' => "Thông tin chi tiết",
            'data' => $Discount,
        ];
        return response()->json($arr, 200);
    }

//Xóa 
public function destroy(string $id)
{
    try {
        $Discount = Discount::findOrFail($id);
        $Discount->delete();

        $arr = [
            'status' => true,
            'message' => 'Đã xóa thành công',
            'data' => null
        ];

        return response()->json($arr, 200);
    } catch (ModelNotFoundException $e) {
        $arr = [
            'success' => false,
            'message' => 'Không tồn tại',
            'data' => null
        ];

        return response()->json($arr, 404);
    }
}

//Cập nhật mã
public function update(Request $request, string $Discount)
{
    $input = $request->all();

    $validator = Validator::make($input, [
        'name' => 'required',


    ]);

    if ($validator->fails()) {
        $arr = [
            'status' => false,
            'message' => 'Lỗi kiểm tra dữ liệu',
            'data' => $validator->errors()
        ];
        return response()->json($arr, 200);
    }

    $Discount = Discount::find($Discount);

    if (!$Discount) {
        $arr = [
            'status' => false,
            'message' => 'Không tồn tại',
            'data' => null
        ];
        return response()->json($arr, 404);
    }
    $Discount->discount_id = $input['discount_id'] ?? null;
    $Discount->name = $input['name'] ?? null;
    $Discount->description = $input['description'] ?? null;
    $Discount->discount_percent = $input['discount_percent'] ?? null;
    $Discount->save();

    $arr = [
        'status' => true,
        'message' => 'Cập nhật thành công',
        'data' => $Discount
    ];

    return response()->json($arr, 200);
}


}
