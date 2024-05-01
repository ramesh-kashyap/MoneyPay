<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontController extends Controller
{

    public function index()
    {
        return view('main.home');
    }


    public function about_us()
    {
        return view('main.about_us');
    }

    public function services()
    {
        return view('main.service');
    }
    public function faq()
    {
        return view('main.faq');
    }

    public function support()
    {
        return view('main.support');
    }
    public function games()
    {

    
        return view('main.games');
    }
    public function contact()
    {

    
        return view('main.contact');
    }
    public function pricing()
    {

    
        return view('main.pricing');
    }

}
