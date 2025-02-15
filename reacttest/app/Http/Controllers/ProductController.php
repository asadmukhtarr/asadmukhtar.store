<?php 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;

class productController extends Controller
{
    public function index()
    {
        $products = product::latest()->get();
        return view('welcome', compact('products'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric'
        ]);

        product::create([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
        ]);

        return redirect()->back()->with('success', 'product added successfully!');
    }

    public function destroy($id)
    {
        product::findOrFail($id)->delete();
        return redirect()->back()->with('success', 'product deleted successfully!');
    }
}
