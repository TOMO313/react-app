<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use App\Http\Requests\PostRequest;
use App\Models\Category;

class PostController extends Controller
{
    public function index(Post $post)
    {
        return Inertia::render("Posts/Index", ["posts" => $post::with('category')->get()]);
    }

    public function show(Post $post)
    {
        return Inertia::render("Posts/Show", ["post" => $post->load('category')]);
    }

    public function create(Category $category)
    {
        return Inertia::render("Posts/Create", ["categories" => $category->get()]);
    }

    public function store(PostRequest $request, Post $post)
    {
        $input = $request->all();
        $post->fill($input)->save();
        return redirect("/posts/" . $post->id);
    }

    public function edit(Post $post, Category $category)
    {
        return Inertia::render("Posts/Edit", ["post" => $post->load('category'), "categories" => $category->get()]);
    }

    public function update(PostRequest $request, Post $post)
    {
        $input = $request->all();
        $post->fill($input)->save();
        return redirect("/posts/" . $post->id);
    }

    public function delete(Post $post)
    {
        $post->delete();
        return redirect("/posts");
    }
}
