<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\ProductCategory;
use App\Http\Resources\ProductCategory as ProductCategoryResources;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductCategoryController extends Controller
{
 public function ProductCategoryList(){
    $ProductCategoryList=ProductCategory::all();
    $arr=[
        'status'=>200,
        'message'=>'Danh sách sản phẩm của cửa hàng',
        'data'=>ProductCategoryResources::collection($ProductCategoryList)
    ];
    return response()->json($arr,200);
 }  
 

//Tạo mới
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'product_category_name' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $ProductCategory = ProductCategory::create($input);
        $arr = [
            'status' => true,
            'message' => "Sản phẩm đã lưu thành công",
            'data' => new ProductCategoryResources($ProductCategory)
        ];
        return response()->json($arr, 201);
    }

//Xóa
    public function destroy(string $id)
    {
        try {
            $ProductCategory = ProductCategory::findOrFail($id);
            $ProductCategory->delete();

            $arr = [
                'status' => true,
                'message' => 'Sản phẩm đã được xóa thành công',
                'data' => null
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => 'Sản phẩm không tồn tại',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }

//Cập nhật 
    public function update(Request $request, string $ProductCategory)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'product_category_name' => 'required',
           

        ]);

        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $ProductCategory = ProductCategory::find($ProductCategory);

        if (!$ProductCategory) {
            $arr = [
                'status' => false,
                'message' => 'Sản phẩm không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }
        $ProductCategory->product_category_id = $input['product_category_id'] ?? null;
        $ProductCategory->product_category_name = $input['product_category_name'] ?? null;
        $ProductCategory->description = $input['description'] ?? null;
        $ProductCategory->icon = $input['icon'] ?? null;
        $ProductCategory->save();

        $arr = [
            'status' => true,
            'message' => 'cập nhật thành công',
            'data' => $ProductCategory
        ];

        return response()->json($arr, 200);
    }
}



