<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\StoreCategoryController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\ProductsController;


Route::post('login', [AuthController::class, 'signin']);
Route::post('register', [AuthController::class, 'signup']);
Route::get('Category', [StoreCategoryController::class, 'index']);
Route::get('Store', [StoreController::class, 'index']);
Route::get('CategoryId/{id}', [StoreController::class, 'Stores']);
Route::get('Products/{id}', [ProductsController::class, 'index']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
