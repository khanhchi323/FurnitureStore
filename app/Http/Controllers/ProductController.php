<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Product;
use App\Http\Resources\Product as ProductResources;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductController extends Controller
{
    public function productList()
    {
        $productList = Product::paginate(9);
        $arr = [
            'status' => 200,
            'message' => 'Danh sách sản phẩm của cửa hàng',
            'data' => $productList
        ];
        return response()->json($arr, 200);
    }


    //Tạo mới sản phẩm
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'product_name' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $Product = Product::create($input);
        $arr = [
            'status' => true,
            'message' => "Sản phẩm đã lưu thành công",
            'data' => new ProductResources($Product)
        ];
        return response()->json($arr, 201);
    }

    //Show thông tin sản phẩm
    public function show(string $id)
    {
        $product = Product::find($id);

        if (empty($product)) {
            $arr = [
                'status' => false,
                'message' => 'Không có sản phẩm này',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $arr = [
            'status' => true,
            'message' => "Thông tin sản phẩm",
            'data' => $product,
        ];
        return response()->json($arr, 200);
    }

    //Xóa sản phẩm
    public function destroy(string $id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();

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

    //Cập nhật sản phẩm
    public function update(Request $request, string $product)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'product_name' => 'required',
            'price' => 'required',

        ]);

        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $product = Product::find($product);

        if (!$product) {
            $arr = [
                'status' => false,
                'message' => 'Sản phẩm không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }
        $product->product_id = $input['product_id'] ?? null;
        $product->product_name = $input['product_name'] ?? null;
        $product->price = $input['price'] ?? null;
        $product->description = $input['description'] ?? null;
        $product->product_category_id = $input['product_category_id'] ?? null;
        $product->product_status_id = $input['product_status_id'] ?? null;
        $product->discount_id = $input['discount_id'] ?? null;
        $product->quantity = $input['quantity'] ?? null;
        $product->color = $input['color'] ?? null;
        $product->image = $input['image'] ?? null;
        $product->save();

        $arr = [
            'status' => true,
            'message' => 'Sản phẩm cập nhật thành công',
            'data' => $product
        ];

        return response()->json($arr, 200);
    }
}
