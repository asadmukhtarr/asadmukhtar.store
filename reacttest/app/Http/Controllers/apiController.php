<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;

class apiController extends Controller
{
    //
    public function products(){
        $products = product::latest()->get();
        return response()->json($products);
    }
    public function insertapi(Request $request){
        return "work";
        ///return $request;
    }
}
