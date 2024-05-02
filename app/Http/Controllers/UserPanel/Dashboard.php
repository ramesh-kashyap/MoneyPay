<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Investment;
use App\Models\Income;
use Carbon\Carbon;
use Redirect;
use Log;
use Hash;

class Dashboard extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {

      $user=Auth::user();
      $user_direct=User::where('sponsor',$user->id)->where('active_status','Active')->count();
      $personal_deposit=Investment::where('user_id',$user->id)->where('status','Active')->sum('amount');
      $left_team=$this->team_by_position($user->id,'Left');               
      $right_team=$this->team_by_position($user->id,'Right');   

      $totalBusiness=$this->my_direct_business_count($user->id);
   //   print_r($tolteam);die;
    //   $total_team=(!empty($tolteam)?count($tolteam):0);
    //    dd($left_team);
      $deposit_report = Investment::where('user_id',$user->id)->orderBy('id','desc')->get();


      $weekly_profit = Income::where('user_id',$user->id)
      ->whereBetween('ttime', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->sum('comm');

        $transaction_data = Income::where('user_id',$user->id)->orderBy('id', 'desc')->take(10)->get();
        // $this->data['left_business'] =Investment::whereIn('user_id',$left_team)->where('status','Active')->sum('amount');
        // $this->data['right_business'] =Investment::whereIn('user_id',$right_team)->where('status','Active')->sum('amount');
        $this->data['weekly_profit'] =$weekly_profit;
        $this->data['transaction_data'] =$transaction_data;
        $this->data['deposit_report'] =$deposit_report;
        $this->data['user_direct'] =$user_direct;
        $this->data['personal_deposit'] =$personal_deposit;
      $this->data['left_direct_team'] =User::where('sponsor',$user->id)->where('active_status','Active')->where('position','Left')->count();
      $this->data['right_direct_team'] =User::where('sponsor',$user->id)->where('active_status','Active')->where('position','Right')->count();
      $this->data['left_team'] =User::whereIn('id',$left_team)->where('active_status','Active')->count();
      $this->data['right_team'] = User::whereIn('id',$right_team)->where('active_status','Active')->count();
      $this->data['directBusiness'] =$totalBusiness;


      $this->data['page'] = 'user.dashboard';
      return $this->dashboard_layout();


    }

   public function new_register()
    {

      $user=Auth::user();
      $this->data['page'] = 'user.team.new-register';
      return $this->dashboard_layout();


    }  
    
    public function courses()
    {

      $user=Auth::user();
      $this->data['page'] = 'user.courses';
      return $this->dashboard_layout();


    }
    
      public function register_sucess()
    {

      $user=Auth::user();
      $this->data['page'] = 'user.team.register_sucess';
      return $this->dashboard_layout();


    }
    
    
      public function register(Request $request)
    {
        try{
            $validation =  Validator::make($request->all(), [
                'email' => 'required',
                'name' => 'required',
                'country' => 'required',
                'password' => 'required|min:5',
                'sponsor' => 'required|exists:users,username',
                'phone' => 'required|numeric|min:10'
              
            ]);

            if($validation->fails()) {
                Log::info($validation->getMessageBag()->first());

                return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
            }
            //check if email exist
          
            $user = User::where('username',$request->sponsor)->first();
            if(!$user)
            {
                return Redirect::back()->withErrors(array('Introducer ID Not Active'));
            }
            // $totalID = User::count();
            // $totalID++;
            // $username =substr(time(),4).$totalID;
            $username ="MP".substr(rand(),-2).substr(time(),-2).substr(mt_rand(),-2);
           $tpassword =substr(time(),-2).substr(rand(),-2).substr(mt_rand(),-1);
            $post_array  = $request->all();


            $data['name'] = $post_array['name'];
            $data['phone'] = $post_array['phone'];
            $data['username'] = $username;
            $data['email'] = $post_array['email'];
            $data['password'] =   Hash::make($post_array['password']);
            $data['tpassword'] =   Hash::make($tpassword);
            $data['PSR'] =  $post_array['password'];
            $data['TPSR'] =  $tpassword;
            $data['country'] = $post_array['country'];
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
            return redirect()->route('user.register_sucess')->with('messages', $user);

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


    public  function my_binary($userid){
        $arrin=array($userid);
        $ret=array();
        // print_r($arrin);die();
        while(!empty($arrin)){
         $alldown= User::select('id')->whereIn('Parentid',$arrin)->get()->toArray();
         if(!empty($alldown)){
                $arrin = array_column($alldown,'id');
                $ret[]=$arrin;
              
              
            }else{
                $arrin = array();
            } 
        }
        // continue;    
        $final = array();         
        if(!empty($ret)){
            array_walk_recursive($ret, function($item, $key) use (&$final){
                $final[] = $item;
            });
        }

        return $final;
        
    }  


     public  function team_by_position($userid,$position){
        $ret=array();
        $get_position_user=User::where('Parentid',$userid)->where('position',$position)->first();
        if($get_position_user){
        
            $ret=$this->my_binary($get_position_user->id);
            $ret[]=$get_position_user->id;
        }
       
        return $ret;
    }


    public function my_level_team_count($userid,$level=10){
        $arrin=array($userid);
        $ret=array();

        $i=1;
        while(!empty($arrin)){
            $alldown=User::select('id')->whereIn('sponsor',$arrin)->get()->toArray();
            if(!empty($alldown)){
                $arrin = array_column($alldown,'id');
                $ret[$i]=$arrin;
                $i++;

            }else{
                $arrin = array();
            }
        }

        $final = array();
        if(!empty($ret)){
            array_walk_recursive($ret, function($item, $key) use (&$final){
                $final[] = $item;
            });
        }


        return $final;

    }

    public function my_direct_business_count($userid){

        $totalBusiness=0;
        $alldown=User::select('id')->where('sponsor',$userid)->get()->toArray();
        if(!empty($alldown)){
            $arrin = array_column($alldown,'id');

         $totalBusiness=Investment::whereIn('user_id',$arrin)->where('status','Active')->sum("amount");
        }
    return $totalBusiness;

    }


}
