<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Recharge extends Controller
{
    
public function dthrecharge(Request $request)
{

  try{
        $validation =  Validator::make($request->all(), [
            'amount' => 'required|numeric',
            'number' => 'required',
            'operator' => 'required',
          
      
        ]);

        if($validation->fails()) {
            Log::info($validation->getMessageBag()->first());

            return redirect()->route('user.dth')->withErrors($validation->getMessageBag()->first())->withInput();
        }

        $operator =substr(rand(),-2).substr(time(),-3).substr(mt_rand(),-2);
     

        $user=Auth::user();

               $data = [
                 
                    'user_id' => $user->id,
                    'operator' => $request->operator,
                    'number' => $request->number,
                    'status' => 'succes',
                    'operator_id' => $operator,
                    'amount' => $request->amount,
                    'date' => date('Y-m-d'),

                ];
               $payment =  BuyFund::create($data);
























































































































































































































































               .


      $notify[] = ['success', 'recharge  successfully'];
      return redirect()->back()->withNotify($notify);
      }
       catch(\Exception $e){
        Log::info('error here');
        Log::info($e->getMessage());
        print_r($e->getMessage());
        die("hi");
        return  redirect()->route('user.dth')->withErrors('error', $e->getMessage())->withInput();
    }

}

}
