<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Investment;
use App\Models\Income;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Log;
use Redirect;
use Hash;

class Invest extends Controller
{

  private $downline = "";

    public function index()
    {
        $user=Auth::user();
        $invest_check=Investment::where('user_id',$user->id)->where('status','!=','Decline')->orderBy('id','desc')->limit(1)->first();

        $this->data['last_package'] = ($invest_check)?$invest_check->amount:0;
        $this->data['page'] = 'user.invest.Deposit';
        return $this->dashboard_layout();
    }

    public function mobile()
{
    return view('user.recharge.mobile');
}
public function dth()
{
    return view('user.recharge.dth');
}
public function elecrticity()
{
    return view('user.recharge.electricity');
}
public function newpan()
{
    return view('user.recharge.newpan');
}
public function pancard()
{
    return view('user.recharge.pancard');
}
public function gas()
{
    return view('user.recharge.gas');
}
public function pantable()
{
    return view('user.recharge.pan-card');
}

public function postpaid()
{
    return view('user.recharge.postpaid');
}
    public function fundActivation(Request $request)
    {

try{
 
    $validation =  Validator::make($request->all(), [
        // 'user_id' => 'required',
        // 'amount' => 'required|numeric|min:1000',
        // 'walletType' => 'required|',
        'user_id' => 'required|exists:users,username',
        'transaction_password' => 'required',
    ]);

    if($validation->fails()) {
    

        Log::info($validation->getMessageBag()->first());

        return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
    }
       $user=Auth::user();

       $password= $request->transaction_password;

       if (Hash::check($password, $user->tpassword))
       {

      

      $user_detail=User::where('username',$request->user_id)->orderBy('id','desc')->limit(1)->first();

      // dd($user_detail);
        //   $icon_image = $request->file('icon_image');
         //  print_r($user_detail);     die;
         date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)
        $invest_check=Investment::where('user_id',$user_detail->id)->where('status','!=','Decline')->orderBy('id','desc')->limit(1)->first();


            $invoice = substr(str_shuffle("0123456789"), 0, 7);
            $last_package=($invest_check)?$invest_check->amount:0;

         // print_r($last_package);die;
         $balance=0;
     
         $balance=round(Auth::user()->FundBalance(),2);
       

          // if ($last_package>$request->amount)
          // {
          //   return Redirect::back()->withErrors(array('Please choose amount above last package '.currency().' '.$request->amount));
          // }


            
            if ($balance>=$request->amount)
             {
          
           $data = [
                'plan' => 1,
                'transaction_id' =>md5(uniqid(rand(), true)),
                'user_id' => $user_detail->id,
                'user_id_fk' => $user_detail->username,
                'amount' => $request->amount,
                'payment_mode' => 'USDT',
                'status' => 'Active',
                'sdate' => Date("Y-m-d"),
                'active_from' => $user->username,
                'walletType' =>1,
                'created_at' =>Date('Y-m-d H:i:s'),

            ];
            $payment =  Investment::insert($data);
            add_direct_income($user_detail->id,$request->amount);
            add_level_income($user_detail->id,$request->amount);
            if ($user_detail->active_status=="Pending")
            {
             $user_update=array('active_status'=>'Active','adate'=>Date("Y-m-d H:i:s"),'package'=>$request->amount);
              User::where('id',$user_detail->id)->update($user_update);
            }
            else
            {
              
              $user_update=array('active_status'=>'Active','package'=>$request->amount);
              User::where('id',$user_detail->id)->update($user_update);
            }
     
         



      $notify[] = ['success', $user_detail->username.' User Activation  Submited successfully'];
      return redirect()->back()->withNotify($notify);
 
      }
      else
      {
         return Redirect::back()->withErrors(array('Insufficient Balance in Wallet'));
      }
    }
    else
    {
      return Redirect::back()->withErrors(array('Invalid Transaction Password'));
    }


  }
   catch(\Exception $e){
    Log::info('error here');
    Log::info($e->getMessage());
    print_r($e->getMessage());
    die("hi");
    return  redirect()->route('user.invest')->withErrors('error', $e->getMessage())->withInput();
      }



        }




  public function ditributor_gap_margin($userid,$gapMarginBonus,$amt,$userPercent,$user_detail,$level=20){
        $arrin=$userid;
        $userPercent=$userPercent;
        // dd($userPercent);
        $gapMarginBonus=$gapMarginBonus;
        $ret=array();
        $i=1;
        while(!empty($arrin) && $gapMarginBonus>0){
            $alldown=User::where('id',$arrin)->get()->first();
            if($alldown){
                $arrin = $alldown->sponsor;
                $i++;
                
            
            $Sposnor_cnt = User::where('sponsor',$alldown->id)->where('active_status','Active')->count("id");  
            $percent=0;
            if($Sposnor_cnt>=4)
            {
              $percent = 20; 
              
             if($Sposnor_cnt>=6)
              {
                $percent = 30; 
              }
              if($Sposnor_cnt>=8)
              {
                $percent = 40; 
              }
              if($Sposnor_cnt>=10)
              {
                $percent = 50; 
              }  
            
             $sponsor_profit= $percent-$userPercent; 
             
           
             
             $preSponsor= $userPercent;
             if($sponsor_profit>$gapMarginBonus)
             {
                $sponsor_profit= $gapMarginBonus;
             }
           
              $gapMarginBonus=$gapMarginBonus-$sponsor_profit;
              
         
         
        //   echo "ID :".$alldown->id."<br>";
        //   echo "Per :".$percent."<br>";
        //   echo "User :".$userPercent."<br>";
        //   echo "SP :".$sponsor_profit."<br>";
              
              if($sponsor_profit>0 && $percent>$userPercent)
              {
                $sp_pp =  $amt* $sponsor_profit;
                
                  $data = [
              'user_id' => $alldown->id,
              'user_id_fk' =>$alldown->username,
              'amt' => $amt,
              'comm' => $sp_pp,
              'remarks' => 'Gap Margin Bonus',
              'level' => $i,
              'rname' => $user_detail->username,
              'fullname' => $user_detail->name,
              'ttime' => Date("Y-m-d"),
              ];
             Income::create($data);   
              }
              
              
            $userPercent= $percent;   
            }
            else
            {
             $userPercent=$userPercent;
              $gapMarginBonus=$gapMarginBonus;
            }
         
            if($i>$level || $alldown->id==1)
            {
                break;
            }
     

            }else{
                $arrin ='';
            }
        }
        
        // dd("hi");

       


        return true;

    }
    
      public  function find_9directSponsor($snode)
      {
          $q=User::where('id',$snode)->first();
          $sponsor=User::where('sponsor',$snode)->where('active_status','Active')->count();
          if ($sponsor>=10 || $q->id==1)
          {
            $this->downline = $snode; 
          }
          else
          {
            $user = $q->id;
            $this->find_9directSponsor($user);   
          }
      }

        public function invest_list(Request $request){

    $user=Auth::user();
      $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Investment::where('user_id',$user->id);
      if($search <> null && $request->reset!="Reset"){
        $notes = $notes->where(function($q) use($search){
          $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
          ->orWhere('txn_no', 'LIKE', '%' . $search . '%')
          ->orWhere('status', 'LIKE', '%' . $search . '%')
          ->orWhere('type', 'LIKE', '%' . $search . '%')
          ->orWhere('amount', 'LIKE', '%' . $search . '%');
        });

      }

        $notes = $notes->paginate($limit)->appends(['limit' => $limit ]);

      $this->data['search'] =$search;
      $this->data['deposit_list'] =$notes;
      $this->data['page'] = 'user.invest.DepositHistory';
      return $this->dashboard_layout();


        }



       
}
