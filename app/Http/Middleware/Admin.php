<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    // public function handle($request, Closure $next)
    // {
    //     if (Auth::user() &&  Auth::user()->is_admin == 1) {
    //          return $next($request);
    //     }

    //     return redirect('home')->with('error','You have not admin access');
    // }

      public function handle($request, Closure $next, $guard = null)
    {
        if (!Auth::guard('admin')->check()) {
            return redirect()->route('admin.admin-login');
        }

        return $next($request);
    }
}