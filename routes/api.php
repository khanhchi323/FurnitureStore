<?php

use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\ProductCategoryController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Route::prefix('auth')->group(function () {
   // Route::get('user-list', [UsersController::class, 'userList']);
    //đăng nhập 
    //Route::post('user-login', [UsersController::class, 'loginUser']);
    //đăng kí
   // Route::post('user-register', [UsersController::class, 'register']);
    //show người dùng
    //Route::post('user-search/{user_id}',[UsersController::class,'show']); 
    //Cập nhật người dùng
    //Route::post('user-update/{user_id}', [UsersController::class,'update']);
    //Xóa người dùng
  // Route::post('user-delete/{user_id}',[UsersController::class,'delete']);

//});
//Product
Route::prefix('product')->group(function () {
  Route::get('product-list',[ProductController::class,'productList']);
  Route::post('product-create',[ProductController::class,'store']);
  Route::get('product-show/{product_id}',[ProductController::class,'show']);
  Route::post('product-delete/{product_id}',[ProductController::class,'destroy']);
  Route::post('product-update/{product_id}',[ProductController::class,'update']);
});

//Discount
Route::prefix('discount')->group(function () {
  Route::get('discount-list',[DiscountController::class,'DiscountList']);
  Route::post('discount-create',[DiscountController::class,'store']);
  Route::get('discount-show/{discount_id}',[DiscountController::class,'show']);
  Route::post('discount-delete/{discount_id}',[DiscountController::class,'destroy']);
  Route::post('discount-update/{discount_id}',[DiscountController::class,'update']);
 

});

//ProductCategory
Route::prefix('product_category')->group(function () {
  Route::get('productcategory-list',[ProductCategoryController::class,'ProductCategoryList']);
  Route::post('productcategory-create',[ProductCategoryController::class,'store']);
  Route::post('productcategory-delete/{product_category_id}',[ProductCategoryController::class,'destroy']);
  Route::post('productcategory-update/{product_category_id}',[ProductCategoryController::class,'update']);
});