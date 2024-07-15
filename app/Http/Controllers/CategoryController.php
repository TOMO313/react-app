<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index(Category $category)
    {
        return Inertia::render("Categories/Index", ["posts" => $category->posts()->with('category')->get()]);
    }
}
