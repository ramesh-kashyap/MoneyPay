<?php


namespace App\Http\Controllers\UserPanel;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Models\User;
use App\Models\Investment;
use Validator;
use Hash;
use Carbon\Carbon;
use Log;
use Redirect;
use DB;
use Auth;

class BinaryReport extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


     public function userReport(Request $request)
    {  
    $userName = $request->username;  
   
    $user_deatils=User::where('username',$userName)->first(); 
    $left =   $this->leftReport($user_deatils->id);
    $right =   $this->rightReport($user_deatils->id);
    return response()->json(['right' =>$right, 'left' => $left]);
   
    
    }




    public function rightReport($user_id){
          
            $right_team =  $this->team_by_position($user_id,'Right');
          
            $check_ex=Investment::where('user_id',$user_id)->where('status','Active')->sum('amount');
              if (!empty($right_team))
                   {
                     $right_business=$this->get_total_invest_by_team($right_team);
                  }
                  else
                  {
                    $right_business=0;
                  }
            $data['right_total_user']=(!empty($right_team))?count($right_team):0;;
            $data['right_total_business']=$right_business;
            $data['right_todays_business']=($check_ex)?$check_ex:0;
        
            
            return $data;
        }

    public function leftReport($user_id){
            //$user_id=$this->session->userdata("user_id_session");
          
             $user_deatils=User::where('id',$user_id)->first();
             $left_team =  $this->team_by_position($user_id,'Left');
            //   print_r($user_id);die();
              if (!empty($left_team))
                   {
                     $left_business=$this->get_total_invest_by_team($left_team);
                  }
                  else
                  {
                    $left_business=0;
                  }
                $data['left_total_user']=(!empty($left_team))?count($left_team):0;
                $data['left_total_business']=$left_business;
                $data['left_todays_business']=($user_deatils->jdate)? $user_deatils->jdate:"N/A";
                


                return $data;
        }



     public function get_total_invest_by_team($user_ids)
    {
      
     $business= Investment::whereIn('user_id',$user_ids)->where('status','Active')->sum('amount');
     return $business;
        
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


}
