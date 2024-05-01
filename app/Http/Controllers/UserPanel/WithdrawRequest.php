<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Investment;
use App\Models\Bank;
use App\Models\Withdraw;
use App\Models\Payout;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Log;
use Redirect;
use Hash;

class WithdrawRequest extends Controller
{
    public function index(Request $request)
    {
      $user=Auth::user();


          $limit = $request->limit ? $request->limit : 10;
            $status = $request->status ? $request->status : null;
            $search = $request->search ? $request->search : null;
            $notes = Payout::where('user_id',$user->id);
            
           if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){         
              $q->Where('ttime', 'LIKE', '%' . $search . '%')
              ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
              ->orWhere('performance_bonus', 'LIKE', '%' . $search . '%')
              ->orWhere('level_bonus', 'LIKE', '%' . $search . '%');
            });
        
      }

            $notes = $notes->paginate($limit)
                ->appends([
                    'limit' => $limit
                ]);
        $this->data['withdraw_report'] =$notes;
        $this->data['page'] = 'user.withdraw.WithdrawRequest';
        return $this->dashboard_layout();
    }

    public function WithdrawRequest(Request $request)
    {

        try{

             $validation =  Validator::make($request->all(), [
            'amount' => 'required|numeric|min:10',
            //  'usdt_address' => 'required',    
            'transaction_password' => 'required',


        ]);

        if($validation->fails()) {
            Log::info($validation->getMessageBag()->first());

            return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
        }

        $user=Auth::user();
        $password= $request->transaction_password;
        $balance=Auth::user()->available_balance();


        if ($balance>=$request->amount)
        {
         $user_detail=Withdraw::where('user_id',$user->id)->where('status','Pending')->first();

         if(!empty($user_detail))
         {
           return Redirect::back()->withErrors(array('Withdraw Request Already Exist !'));
         }
         else
         {

            if(empty($user->trx_addres))
            {
              return Redirect::back()->withErrors(array('Update Your wallet Address')); 

            }

              if (Hash::check($password, $user->tpassword))
               {
           
                   $data = [
                        'txn_id' =>md5(uniqid(rand(), true)),     
                        'user_id' => $user->id,
                        'user_id_fk' => $user->username,
                        'amount' => $request->amount,
                        'account' => $user->trx_addres,
                        'payment_mode' => 'USDT',
                        'status' => 'Pending',
                        'walletType' =>1,
                        'wdate' => Date("Y-m-d"),
                    
                        
                    ];
                   $payment =  Withdraw::Create($data);
                 
           
            $notify[] = ['success','Withdraw Request Submited successfully'];
    
            return redirect()->back()->withNotify($notify);
           
               
              }
                else
                {
                return Redirect::back()->withErrors(array('Invalid Transaction Password'));
                }     
                
           


         }

        }
        else
        {
     return Redirect::back()->withErrors(array('Insufficient balance in Your account'));
        }

    }
    catch(\Exception $e){
     Log::info('error here');
     Log::info($e->getMessage());
     print_r($e->getMessage());
     die("hi");
     return  redirect()->route('user.WithdrawRequest')->withErrors('error', $e->getMessage())->withInput();
       }




    }

    public function WithdrawHistory(Request $request){

        $user=Auth::user();
        $limit = $request->limit ? $request->limit : paginationLimit();
         $status = $request->status ? $request->status : null;
         $search = $request->search ? $request->search : null;
         $notes = Withdraw::where('user_id',$user->id);
        if($search <> null && $request->reset!="Reset"){
         $notes = $notes->where(function($q) use($search){
            $q->Where('wdate', 'LIKE', '%' . $search . '%')
              ->orWhere('amount', 'LIKE', '%' . $search . '%')
              ->orWhere('status', 'LIKE', '%' . $search . '%')
              ->orWhere('txn_id', 'LIKE', '%' . $search . '%');
         });

        }

         $notes = $notes->paginate($limit)->appends(['limit' => $limit ]);

       $this->data['search'] =$search;
       $this->data['withdraw_report'] =$notes;
       $this->data['page'] = 'user.withdraw.WithdrawHistory';
       return $this->dashboard_layout();
    }
}
