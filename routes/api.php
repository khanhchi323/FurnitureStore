<?php

use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

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
