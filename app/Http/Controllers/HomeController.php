<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{

    public function index()
    {

        $posts = Post::query()->latest()->paginate(10);
        $posts->withPath('/');

        return Inertia::render('Home',[
            'posts'=>PostResource::collection($posts),
            'currentPageNr'=>$posts->currentPage(),
            'lastPageNr'=>$posts->lastPage(),
            'sessionMessage'=>session('success'),
        ]);
    }



}
