<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BuyFund;
use App\Models\Fundtransfer;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Hexters\CoinPayment\CoinPayment;
use App\Models\CoinpaymentTransaction;
use Log;
use Hash;
use Redirect;
class AddFund extends Controller
{

public function index(Request $request)
{

$user=Auth::user();
$this->data['page'] = 'user.fund.addFund';
return $this->dashboard_layout();

}


public function transfer_to_user(Request $request)
{

$user=Auth::user();
$this->data['page'] = 'user.fund.transfer-to-user';
return $this->dashboard_layout();

}

public function fundHistory(Request $request)
{

   
    $user=Auth::user();
    $limit = $request->limit ? $request->limit : paginationLimit();
    $status = $request->status ? $request->status : null;
    $search = $request->search ? $request->search : null;
    $notes = BuyFund::where('user_id',$user->id);
    if($search <> null && $request->reset!="Reset"){
    $notes = $notes->where(function($q) use($search){
        $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
        ->orWhere('txn_no', 'LIKE', '%' . $search . '%')
        ->orWhere('status', 'LIKE', '%' . $search . '%')
        ->orWhere('type', 'LIKE', '%' . $search . '%')
        ->orWhere('amount', 'LIKE', '%' . $search . '%');
    });

    }

    $notes = $notes->paginate($limit)
        ->appends([
            'limit' => $limit
        ]);

    $this->data['search'] =$search;
    $this->data['level_income'] =$notes;
    $this->data['page'] = 'user.fund.fundHistory';
    return $this->dashboard_layout();

}


public function transferReport(Request $request)
{

   
    $user=Auth::user();
    $limit = $request->limit ? $request->limit : paginationLimit();
    $status = $request->status ? $request->status : null;
    $search = $request->search ? $request->search : null;
    $notes = Fundtransfer::where('transfer_id',$user->id)->orWhere('transfered_id',$user->id);     
    if($search <> null && $request->reset!="Reset"){
    $notes = $notes->where(function($q) use($search){
        $q->Where('user_id_from', 'LIKE', '%' . $search . '%')          
                ->orWhere('user_id_to', 'LIKE', '%' . $search . '%')
                ->orWhere('charge', 'LIKE', '%' . $search . '%')
                ->orWhere('transfer_date', 'LIKE', '%' . $search . '%')
                ->orWhere('amount', 'LIKE', '%' . $search . '%');
    });

    }

    $notes = $notes->paginate($limit)
        ->appends([
            'limit' => $limit
        ]);

    $this->data['search'] =$search;
    $this->data['level_income'] =$notes;
    $this->data['page'] = 'user.fund.transferReport';
    return $this->dashboard_layout();

}



 public function SubmitTransferFund(Request $request)
    {

  try{
            $validation =  Validator::make($request->all(), [
                // 'user_id' => 'required',
                 'amount' => 'required|min:0',
                 'username' => 'required|exists:users,username',
                 'transaction_password' => 'required',
                 
               
              
            ]);

            if($validation->fails()) {
                Log::info($validation->getMessageBag()->first());

                return redirect()->route('user.transfer-fund')->withErrors($validation->getMessageBag()->first())->withInput();
            }
             
              $user=Auth::user();
               $available_balance=0;
                $user_detail=User::where('username',$request->username)->orderBy('id','desc')->limit(1)->first();
                $password= $request->transaction_password;
                $net=$request->amount;
                $charge=0;
                $available_balance=Auth::user()->available_balance();
            
               if (Hash::check($password, $user->tpassword))
               {
                   
             if ($available_balance>=$request->amount) 
             {
                 $data = [
                     
                        'transfer_id' =>$user->id,
                        'transfered_id' => $user_detail->id,
                        'user_id_from' => $user->username,
                        'user_id_to' => $user_detail->username,
                        'amount' => $request->amount,
                        'charge' => $request->amount*5/100,
                        'netAmt' => $request->amount-$request->amount*5/100,
                        'transfer_date' => Date("Y-m-d"),
                        
                    ];
                   $payment =  Fundtransfer::create($data);
              
                 $notify[] = ['success', $user_detail->username.' Fund Transfer Submited successfully'];
                return redirect()->route('user.transfer-fund')->withNotify($notify);

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
            return  redirect()->route('user.transfer-fund')->withErrors('error', $e->getMessage())->withInput();
        }

    }





public function SubmitBuyFund(Request $request)
{

  try{
        $validation =  Validator::make($request->all(), [
            'amount' => 'required|numeric|min:0',
            'transaction_hash' => 'required',
            // 'icon_image'=>'max:4096|mimes:jpeg,png,jpg,svg',
        ]);

        if($validation->fails()) {
            Log::info($validation->getMessageBag()->first());

            return redirect()->route('user.AddFund')->withErrors($validation->getMessageBag()->first())->withInput();
        }


        // $icon_image = $request->file('icon_image');
        // $imageName = time().'.'.$icon_image->extension();
        // $request->icon_image->move(public_path('slip/'),$imageName);

        $user=Auth::user();

               $data = [
                    'txn_no' =>$request->transaction_hash,
                    'user_id' => $user->id,
                    'user_id_fk' => $user->username,
                    'amount' => $request->amount,
                    // 'slip' => 'public/slip/'.$imageName,
                    'type' => 'USDT',
                    'bdate' => Date("Y-m-d"),

                ];
               $payment =  BuyFund::create($data);


      $notify[] = ['success', 'Fund Request Submited successfully'];
      return redirect()->back()->withNotify($notify);
      }
       catch(\Exception $e){
        Log::info('error here');
        Log::info($e->getMessage());
        print_r($e->getMessage());
        die("hi");
        return  redirect()->route('user.AddFund')->withErrors('error', $e->getMessage())->withInput();
    }

}



}
