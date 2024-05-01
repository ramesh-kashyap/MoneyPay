<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use Log;
class AdminLogin extends Controller
{
    
    public function index()
    {  
    return view('admin.admin-login');
    }



    public function admin_sign_out()
    {
         Auth::guard('admin')->logout();
         $notify[] = ['success', 'Admin Logout successfully'];
        return redirect()->route('admin.admin-login')->withNotify($notify);

    }


       public function admin_login(Request $request)
    {
        try
        {
            $validation =  Validator::make($request->all(), [
                'username' => ['required'],
                'password' => ['required'],

            ]);
        
            $request['dynamic_column'] = 'username';
            $request['dynamic_value'] = $request['username'];
            $admin = Admin::return_by_dynamic($request);
            // dd($admin); die;
            if(!empty($admin) && isset($admin))
            {
                if (\Hash::Check($request['password'], $admin->password)){
                    
                    Auth::guard('admin')->login($admin);
                    $user = Auth::guard('admin')->user();
                    // dd("hhhhh");die();
                    return redirect()->route('admin.dashboard');                 
                }
                else
                {
                    return redirect()->route('admin.admin-login')->withErrors(array('Credentials are wrong !'));
                    // echo "credentials are invalid"; die;
                    // return back()
                 }
            }
            else
            {
                return redirect()->route('admin.admin-login')->withErrors(array('Credentials are wrong !'));
                // echo "credentials are invalid"; die;
               // return back()->with('error', 'Credentials are wrong');
            }
        
        }catch(\Exception $e){
            Log::info('error here');
            Log::info($e->getMessage());
            print_r($e->getMessage());
            die("hi");
            return redirect()->route('admin.admin-login')->withErrors(array('Credentials are wrong !'));
        }
        
    }

}
