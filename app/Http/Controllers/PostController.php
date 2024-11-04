<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {

        $data = $request->validated();

        Post::create($data);

        return redirect(RouteServiceProvider::HOME);

        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }






}
