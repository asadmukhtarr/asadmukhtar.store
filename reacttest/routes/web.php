<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\apiController;

Route::get('/', [ProductController::class, 'index'])->name('home');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');
Route::delete('/products/{id}', [ProductController::class, 'destroy'])->name('products.destroy');

Route::prefix('api')->group(function(){
    Route::get('/products',[apiController::class,'products']);
    Route::post('/save',[apiController::class,'insertapi'])->middleware('auth:sanctum');
});
