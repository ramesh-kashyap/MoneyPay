<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Investment;
use App\Models\Income;
use App\Models\Referral;
use App\Models\User;
class Cron extends Controller
{


public function generate_roi()
{  
date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)
$allResult=Investment::where('status','Active')->where('roiCandition',0)->get();
$todays=Date("Y-m-d");
$day=Date("l");

if ($allResult) 
{
     if($day!="Sunday" && $day!="Saturday")   
 {
 foreach ($allResult as $key => $value) 
 {
  
  $userID=$value->user_id;
   $joining_amt = $value->amount;
 
  $userDetails=User::where('id',$userID)->where('active_status','Active')->first();
  $today=date("Y-m-d");
   $previous_date =date('Y-m-d',(strtotime ( '-1 day' , strtotime ( $today) ) ));

  if ($userDetails) 
  {
     $total_profit_b = Income::where('user_id', $userID)->where('invest_id', $value->id)->where('remarks','Roi Bonus')->sum("comm");
      $total_profit=($total_profit_b)?$total_profit_b:0;
        $sponsor_cnt=User::where('sponsor',$userID)->where('active_status','Active')->count();
       $total_get=$joining_amt*300/100;
        
        $percent= 1;
      
       $roi = $joining_amt*$percent/100; 
         $max_income=$total_get;
        $n_m_t = $max_income - $total_profit;
        // dd($total_received);
          if($roi >= $n_m_t)
          {
              $roi = $n_m_t;
          }
          
          
         $total_profit_b = Income::where('user_id', $userID)->sum("comm");
         $joiningAMt = Investment::where('user_id',$userID)->where('status','Active')->sum("amount");
         $total_profit=($total_profit_b)?$total_profit_b:0;
        $max_income=$joiningAMt*5;
        $n_m_t = $max_income - $total_profit;
        // dd($total_received);
          if($roi >= $n_m_t)
          {
              $roi = $n_m_t;
             User::where('id',$userDetails->id)->update(['active_status' => "Inactive"]);      
             Investment::where('user_id',$userDetails->id)->update(['roiCandition' => 1]);   
          }
          
          
          
      if ($total_profit<$total_get && $roi>0) 
      {

        echo "ID:".$userDetails->username." Package:".$joining_amt." Roi:".$roi."<br>";
         $data['remarks'] = 'Roi Bonus';
        $data['comm'] = $roi;
        $data['amt'] = $joining_amt;
        $data['level']=0;
        $data['invest_id']=$value->id;
        $data['ttime'] = date("Y-m-d");
        $data['user_id_fk'] = $userDetails->username;
        $data['user_id']=$userDetails->id; 
      $income = Income::firstOrCreate(['remarks' => 'Roi Bonus','ttime'=>date("Y-m-d"),'user_id'=>$userID,'invest_id'=>$value->id],$data);
       
      }
      else
      {
      Investment::where('id',$value->id)->update(['roiCandition' => 1]);   
      }



  }
  




 }
 }
} 




}



public function reward_bonus()
    {  

date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)
    $allResult=User::where('active_status','Active')->get();
// print_r($allResult);die;
    if ($allResult) 
    {
     foreach ($allResult as $key => $value) 
     {
      
      $user_id=$value->id;
      
      $username=$value->username;
      $days=100;
     $mtching=Income::where('user_id',$user_id)->where('remarks','Binary Income')->orderBy('id', 'DESC')->limit(1)->first();
    $matchAmt=($mtching)?$mtching->amt:0; 
     
     if($matchAmt>=25)
     {
    
      if($matchAmt>=25 && $matchAmt<50)
      {
          $amount = 750;
          $rank = 1;
      }
        
      if($matchAmt>=50 && $matchAmt<150)
      {
          $amount = 1500;
          $rank = 2;
      }
          if($matchAmt>=150 && $matchAmt<400)
      {
          $amount = 2500;
          $rank = 3;
      }
          if($matchAmt>=400 && $matchAmt<900)
      {
          $amount = 5000;
          $rank = 4;
      }
          if($matchAmt>=900 && $matchAmt<2150)
      {
          $amount = 7500;
          $rank = 5;
      }
          if($matchAmt>=2150 && $matchAmt<4650)
      {
          $amount = 10000;
          $rank = 6;
      }
          if($matchAmt>=4650 && $matchAmt<9650)
      {
          $amount = 20000;
          $rank = 7;
      }
          if($matchAmt>=9650 && $matchAmt<24650)
      {
          $amount = 30000;
          $rank = 8;
      }
          if($matchAmt>=24650 && $matchAmt<54650)
      {
          $amount = 50000;
          $rank = 9;
      }
          if($matchAmt>=54650 && $matchAmt<104650)
      {
          $amount = 75000;
          $rank = 10;
      }
          if($matchAmt>=104650 && $matchAmt<204650)
      {
          $amount = 100000;
          $rank = 11;
      }
          if($matchAmt>=204650 && $matchAmt<454650)
      {
          $amount = 150000;
          $rank = 12;
      }
           if($matchAmt>=454650)
      {
          $amount = 200000;
          $rank = 13;
      }
         
        
         
     $check_level=Income::where('remarks','Rank Income')->where('amt',$amount)->count("id");
     
     if($amount>0 && $check_level<20)
     {
         
              echo "<br>";
          echo "ID : ".$username."<br>";
        //   echo "Level : ".$Level;
            $award['remarks'] = 'Rank Income';
            $award['amt'] = $amount;
            $award['comm'] = $amount;
            $award['level']=0;
            $award['ttime'] = date("Y-m-d");
            $award['user_id_fk'] =$username;
            $award['user_id']=$user_id; 
          $income = Income::firstOrCreate(['remarks' => 'Rank Income','ttime'=>date("Y-m-d"),'user_id'=>$user_id],$award);    
            User::where('id',$user_id)->update(['rank' => $rank]);   
     }
     
     
     }
   
     
       }
    
     
      
     
     }
    } 






public function referral_bonus()
    {  

    $allResult=User::where('active_status',"Active")->get();
// print_r($allResult);die;
    if ($allResult) 
    {
     foreach ($allResult as $key => $value) 
     {
      
      $userID=$value->id;
      
      $username=$value->username;
     
     
         
         $joiningamt = Investment::where('user_id', $userID)->where('status','Active')->sum("amount");
         $total_profit_b = Income::where('user_id', $userID)->sum("comm");
         $total_profit=($total_profit_b)?$total_profit_b:0;
        $max_income=$joiningamt*5;
        $n_m_t = $max_income - $total_profit;
        // dd($n_m_t);
          if($n_m_t<=0)
          {
             User::where('id',$value->id)->update(['active_status' => "Inactive"]);      
          }
          
   
     
       }
    
     
      
     
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


  public function get_total_invest_by_team($user_ids)
    {
      
     $business= Investment::whereIn('user_id',$user_ids)->where('status','Active')->sum('amount');
     return $business;
        
    }
    
    

 public function matching_bonus()

    {  
        

date_default_timezone_set("Asia/Kolkata");
//   User::where('id',20)->update(['name' =>'Rameshk']);
    $allResult=User::where('active_status','Active')->get();

    if ($allResult) 
    {
     foreach ($allResult as $key => $value) 
     {
      
       $userID=$value->id;
        $userName=$value->username;
        $Package=$value->package;

          $capping=$Package;
        
       
       $rightTeam=$this->team_by_position($userID,'Right');
       $leftTeam=$this->team_by_position($userID,'Left');

          $left_direct=User::where('sponsor',$userID)->where('active_status','Active')->where('position','Left')->count('id'); 
         $right_direct=User::where('sponsor',$userID)->where('position','Right')->where('active_status','Active')->count('id');

      if (!empty($left_direct) && !empty($right_direct))
        {
        
         $total_right=(!empty($rightTeam))?count($rightTeam):0;
         $total_left=(!empty($leftTeam))?count($leftTeam):0;
        
         if(($total_right>1) && ($total_left>0) || ($total_left>1) && ($total_right>0))
       {


          $left_business=$this->get_total_invest_by_team($leftTeam);
          $right_business=$this->get_total_invest_by_team($rightTeam);


         $tleftpackage=($left_business)? $left_business:0;
         $trightpackage=($right_business)? $right_business:0;

          if($tleftpackage<$trightpackage)
           {
           $amount = $tleftpackage;   
           $curry = $trightpackage-$tleftpackage;     
           }
          if($tleftpackage>$trightpackage)
          {
           $amount = $trightpackage;   
           $curry = $tleftpackage-$trightpackage;      
          }
          if($tleftpackage==$trightpackage)
          {
            $amount = ($trightpackage);

            $curry = $tleftpackage-$trightpackage;

          }
        
        
          $mtching=Income::where('user_id',$userID)->where('remarks','Matching Bonus')->orderBy('id', 'DESC')->limit(1)->first();
          
           $amount=$amount;
           $tamount = $amount;
          $amount = $amount - (!empty($mtching)?$mtching->amt:0);
                  
          $amount = ($amount/100)*10;  
          
            $idate = date("Y-m-d");
              $total_today= Income::where('user_id',$userID)->sum('comm');
                      //print_r($user_id_fk);die;
              $joiningAMt = Investment::where('user_id',$userID)->where('status','Active')->sum("amount");
             $max_income=$joiningAMt*5;
               $n_m_t = $max_income - $total_today;
              if($amount >= $n_m_t)
              {
                  $amount = $n_m_t;
                  
              User::where('id',$userID)->update(['active_status' => "Inactive"]);      
              Investment::where('user_id',$userID)->update(['roiCandition' => 1]);   
              }
                          
                          
        //   print_r($amount);die();
        
            echo "ID:".$userName." amounts:".$amount."<br>";
             $data['remarks'] = 'Matching Bonus';
            $data['comm'] = $amount;
            $data['amt'] = $tamount;
            $data['ttime'] = date("Y-m-d");
            $data['user_id_fk'] = $userName;
            $data['level']=1;
            $data['tleft']=$tleftpackage;
            $data['tright']=$trightpackage;
            $data['user_id']=$userID; 
            $data['curry']=$curry;
     $income = Income::firstOrCreate(['remarks' => 'Matching Bonus','ttime'=>date("Y-m-d"),'user_id'=>$userID],$data);


          


      }
       

     }

      }
   }
}




}
