<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Bank;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Redirect;
use Carbon\Carbon;
use Log;
use Hash;
class Register extends Controller
{

    private $downline="";

    public function getUserNameAjax(Request $request)
    {

      $user =User::where('username',$request->user_id)->first();
            if($user)
            {
                return $user->name;
            } 
            else{
                return 1;
            }       
    }

    public function index()
    {
        return view('auth.verify');
    }

    public function user_kyc(Request $request)
    {

        $user_data = $request->session()->get('user_data');
       
        return view('auth.user-kyc')->with('user',$user_data);
    }

    
    public function register(Request $request)
    {
        try{
            $validation =  Validator::make($request->all(), [
                'email' => 'required|unique:users,email',
                'name' => 'required',
                'password' => 'required|confirmed|min:5',
                'sponsor' => 'required|exists:users,username',
                // 'telegram' => 'required'
              
            ]);

            
            if($validation->fails()) {

                Log::info($validation->getMessageBag()->first());
     
                return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
            }
            //check if email exist
          
          
            if (isset($request->captcha)) {
                if (!captchaVerify($request->captcha, $request->captcha_secret)) {
                    $notify[] = ['error', "Invalid Captcha"];
                    return back()->withNotify($notify)->withInput();
                }
            }

            
            $user = User::where('username',$request->sponsor)->first();
            if(!$user)
            {
                return Redirect::back()->withErrors(array('Introducer ID Not Active'));
            }
            $totalID = User::count();
            $totalID++;
            $username =substr(time(),4).$totalID;
             $username =substr(rand(),-2).substr(time(),-3).substr(mt_rand(),-2);
            
           $tpassword =substr(time(),-2).substr(rand(),-2).substr(mt_rand(),-1);
            $post_array  = $request->all();
                //  
          
            $data['name'] = $post_array['name'];
            $data['phone'] = $post_array['phone'];
            $data['username'] = $username;
            $data['email'] = $post_array['email'];
            $data['password'] =   Hash::make($post_array['password']);
            $data['tpassword'] =   Hash::make($tpassword);
            $data['PSR'] =  $post_array['password'];
            // $data['telegram'] =  $post_array['telegram'];
           
            $data['TPSR'] =  $tpassword;
            $data['sponsor'] = $user->id;
            $data['package'] = 0;
            $data['jdate'] = date('Y-m-d');
            $data['created_at'] = Carbon::now();
            $data['remember_token'] = substr(rand(),-7).substr(time(),-5).substr(mt_rand(),-4);
            $sponsor_user =  User::orderBy('id','desc')->limit(1)->first();
           $data['level'] = $user->level+1;

         
            $data['ParentId'] =  $sponsor_user->id;
            $user_data =  User::create($data);
            $registered_user_id = $user_data['id'];
            $user = User::find($registered_user_id);
            Auth::loginUsingId($registered_user_id);
          
            //  sendEmail($user->email, 'Welcome to '.siteName(), [
            //     'name' => $user->name,
            //     'username' => $user->username,
            //     'password' => $user->PSR,
            //     'tpassword' => $user->TPSR,
            //     'viewpage' => 'register_sucess',
            //      'link'=>route('login'),
            // ]);
            
            

            return redirect()->route('user.dashboard');
            //  return redirect()->route('register_sucess')->with('messages', $user);

        }
        catch(\Exception $e){
            Log::info('error here');
            Log::info($e->getMessage());
            print_r($e->getMessage());
            die("hi");
            return back()->withErrors('error', $e->getMessage())->withInput();
           
        }

          
    }
   
    public function find_position($snode,$pos)
    {
        $q=User::select('id')->where('Parentid',$snode)->where('position',$pos)->first();
        if (empty($q))
         {
           $this->downline = $snode; 
         }
         else
         {
          $user = $q->id;
            // print_r($user);die();
          $this->find_position($user,$pos);   
         }
    }


    public function kyc_with_register(Request $request)
    {
        try{
            $validation =  Validator::make($request->all(), [
                'bank_name' => 'required',
                'branch_name' => 'required',
                'account_holder' => 'required',
                'account_no' => 'required|numeric',
                'pancard_no' => 'required|unique:banks,pancard_no,'.$request->pancard_no,
                'ifsc_code' => 'required'
              
            ]);

            if($validation->fails()) {
                Log::info($validation->getMessageBag()->first());

                return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
            }
            //check if email exist
          
            $user_data1 = $request->session()->get('user_data');
            $user_data =  User::create($user_data1);
            $registered_user_id = $user_data['id'];
            $user = User::find($registered_user_id);

            $post_array  = $request->all();
                //  
          
            $data['bank_name'] = $post_array['bank_name'];
            $data['branch_name'] = $post_array['branch_name'];
            $data['account_holder'] = $user->name;
            $data['account_no'] = $post_array['account_no'];
            $data['pancard_no'] =  $post_array['pancard_no'];
            $data['ifsc_code'] =  $post_array['ifsc_code'];
    
            $data['user_id'] = $user->id;
            Bank::create($data);
       
            // Auth::loginUsingId($registered_user_id);
            $mail_data=array('name'=>$user->name,'username'=>$user->username,'password'=>$user->PSR,'subject'=>'Welcome To Gfx Trade','viewpage'=>'register_sucess');
            //  sendEmail($user->email, 'Welcome to '.siteName(), [
            //     'name' => $user->name,
            //     'username' => $user->username,
            //     'password' => $user->PSR,
            //     'tpassword' => $user->TPSR,
            //     'viewpage' => 'register_sucess',
            //      'link'=>route('login'),
            // ]);
            
            

            // return redirect()->route('home');
               $request->session()->forget('user_data');
             return redirect()->route('register_sucess')->with('messages', $user);

        }
        catch(\Exception $e){
            Log::info('error here');
            Log::info($e->getMessage());
            print_r($e->getMessage());
            die("hi");
            return back()->withErrors('error', $e->getMessage())->withInput();
           
        }

          
    } 


}
