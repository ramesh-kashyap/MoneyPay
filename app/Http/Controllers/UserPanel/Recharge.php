<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;

class Recharge extends Controller
{
    public function processRecharge(Request $request)
    {
        try {
            $validation = Validator::make($request->all(), [
                'number' => 'required|digits:10',
                'amount' => 'required|numeric',
                'operatorcode' => 'required',
                'walletType' => 'required|in:1,2',
            ]);

            if ($validation->fails()) {
                Log::info($validation->getMessageBag()->first());
                return Redirect::back()->withErrors($validation->getMessageBag())->withInput();
            }

            $balance = 0;
            if ($request->walletType == '1') {
                $balance = round(Auth::user()->FundBalance(), 2);
            } elseif ($request->walletType == '2') {
                $balance = round(Auth::user()->available_balance(), 2);
            }

            if ($balance < $request->amount) {
                return back()->withErrors(['error' => 'Insufficient balance to complete this transaction.']);
            }
    $orderid = uniqid(rand(100000, 999999), true);
            $data = [
                'amount' => $request->amount,
                'user_id' => Auth::user()->id,
                'operatorcode' => $request->input('operatorcode'),
                'number' => $request->input('number'),
                'walletType'=> $request->input('walletType'),
                'status'=>'Pending',
                'transaction_id' =>$orderid,                
            ];
             $insertedId = DB::table('mobile_recharge')->insertGetId($data);
             //api work start

        //   api process
        
           $client = new \GuzzleHttp\Client();

           
            $response = $client->request('POST', 'https://business.a1topup.com/recharge/api?username=502939
            &pwd=884257&circlecode=20&operatorcode='.$data['operatorcode'].'&number='.$data['number'].'&amount='.$data['amount'].'&orderid='.$orderid.'', [
                'query' => [
                    'username' => 502939,  // Using environment variable
                    'pwd' => 884257,  // Using environment variable
                    'circlecode' => $data['circlecode'] ?? 'default',
                    'operatorcode' => $data['operatorcode'],
                    'number' => $data['number'],
                    'amount' => $data['amount'],
                    'orderid' => $orderid,
                    'format' => 'json'
                ]
            ]);

            $responseBody = json_decode($response->getBody()->getContents(), true);

            // dd($responseBody);
            if (isset($responseBody['status']) && $responseBody['status'] == 'Success') {
             
             
             \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Success']);
               
            $notify[] = ['success','Recharged successfully'];
    
            return redirect()->back()->withNotify($notify);
           
                
            } else {
             
                 
             \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Failed']);
             
                  return Redirect::back()->withErrors(array('Recharge Failed'));
            }
            
           
        } catch (\Exception $e) {
            Log::error('Error processing recharge: ' . $e->getMessage());
            return redirect()->route('user.invest')->withErrors('An unexpected error occurred. Please try again.');
        }
    }

    


    //fatch data from database
    public function showTransactions()
{
    // Assuming there's a 'transactions' table with a 'user_id' column
    $transactions = DB::table('mobile_recharge')
                        ->where('user_id', Auth::user()->id)
                        ->orderBy('created_at', 'desc')
                        ->get();

    // Pass the transactions to the view
    return view('user.recharge.mobile', ['transactions' => $transactions]);
}
//




//electricity recharge
public function electricitycharge(Request $request)
    {
        try {
            $validation = Validator::make($request->all(), [
                'number' => 'required',
                'amount' => 'required|numeric',
                'operatorcode' => 'required',
                'walletType' => 'required|in:1,2',
            ]);

            if ($validation->fails()) {
                Log::info($validation->getMessageBag()->first());
                return Redirect::back()->withErrors($validation->getMessageBag())->withInput();
            }

            $balance = 0;
            if ($request->walletType == '1') {
                $balance = round(Auth::user()->FundBalance(), 2);
            } elseif ($request->walletType == '2') {
                $balance = round(Auth::user()->available_balance(), 2);
            }

            if ($balance < $request->amount) {
                return back()->withErrors(['error' => 'Insufficient balance to complete this transaction.']);
            }

            $orderid = uniqid(rand(100000, 999999), true);
            $data = [
                'amount' => $request->amount,
                'user_id' => Auth::user()->id,
                'operatorcode' => $request->input('operatorcode'),
                'number' => $request->input('number'),
                'walletType'=> $request->input('walletType'),
                'status'=>'Pending',
                'transaction_id' =>$orderid,                
            ];
             $insertedId = DB::table('mobile_recharge')->insertGetId($data);
             //api work start

        //   api process
        
           $client = new \GuzzleHttp\Client();

           
            $response = $client->request('POST', 'https://business.a1topup.com/recharge/api?username=502939
            &pwd=884257&circlecode=20&operatorcode='.$data['operatorcode'].'&number='.$data['number'].'&amount='.$data['amount'].'&orderid='.$orderid.'', [
                'query' => [
                    'username' => 502939,  // Using environment variable
                    'pwd' => 884257,  // Using environment variable
                    'circlecode' => $data['circlecode'] ?? 'default',
                    'operatorcode' => $data['operatorcode'],
                    'number' => $data['number'],
                    'amount' => $data['amount'],
                    'orderid' => $orderid,
                    'format' => 'json'
                ]
            ]);

            $responseBody = json_decode($response->getBody()->getContents(), true);

            // dd($responseBody);
            if (isset($responseBody['status']) && $responseBody['status'] == 'Success') {
             
             
             \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Success']);
               
            $notify[] = ['success','Recharged successfully'];
    
            return redirect()->back()->withNotify($notify);
           
                
            } else {
             
                 
             \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Failed']);
             
                  return Redirect::back()->withErrors(array('Recharge Failed'));
            }
            
           
        } catch (\Exception $e) {
            Log::error('Error processing recharge: ' . $e->getMessage());
            return redirect()->route('user.invest')->withErrors('An unexpected error occurred. Please try again.');
        }
    }


    //fatch data from database
    public function ele_Transactions()
    {
    // Assuming there's a 'transactions' table with a 'user_id' column
    $transactions = DB::table('mobile_recharge')
                        ->where('user_id', Auth::user()->id)
                        ->orderBy('created_at', 'desc')
                        ->get();
    
    // Pass the transactions to the view
    return view('user.recharge.electricity', ['transactions' => $transactions]);
    }



//Dish recarge
public function DthRecharge(Request $request)
{
    try {
        $validation = Validator::make($request->all(), [
            'number' => 'required',
            'amount' => 'required|numeric',
            'operatorcode' => 'required',
            'walletType' => 'required|in:1,2',
        ]);

        if ($validation->fails()) {
            Log::info($validation->getMessageBag()->first());
            return Redirect::back()->withErrors($validation->getMessageBag())->withInput();
        }

        $balance = 0;
        if ($request->walletType == '1') {
            $balance = round(Auth::user()->FundBalance(), 2);
        } elseif ($request->walletType == '2') {
            $balance = round(Auth::user()->available_balance(), 2);
        }

        if ($balance < $request->amount) {
            return back()->withErrors(['error' => 'Insufficient balance to complete this transaction.']);
        }

        $orderid = uniqid(rand(100000, 999999), true);
        $data = [
            'amount' => $request->amount,
            'user_id' => Auth::user()->id,
            'operatorcode' => $request->input('operatorcode'),
            'number' => $request->input('number'),
            'walletType'=> $request->input('walletType'),
            'status'=>'Pending',
            'transaction_id' =>$orderid,                
        ];
         $insertedId = DB::table('mobile_recharge')->insertGetId($data);
         //api work start

    //   api process
    
       $client = new \GuzzleHttp\Client();

       
        $response = $client->request('POST', 'https://business.a1topup.com/recharge/api?username=502939
        &pwd=884257&circlecode=20&operatorcode='.$data['operatorcode'].'&number='.$data['number'].'&amount='.$data['amount'].'&orderid='.$orderid.'', [
            'query' => [
                'username' => 502939,  // Using environment variable
                'pwd' => 884257,  // Using environment variable
                'circlecode' => $data['circlecode'] ?? 'default',
                'operatorcode' => $data['operatorcode'],
                'number' => $data['number'],
                'amount' => $data['amount'],
                'orderid' => $orderid,
                'format' => 'json'
            ]
        ]);

        $responseBody = json_decode($response->getBody()->getContents(), true);

        // dd($responseBody);
        if (isset($responseBody['status']) && $responseBody['status'] == 'Success') {
         
         
         \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Success']);
           
        $notify[] = ['success','Recharged successfully'];

        return redirect()->back()->withNotify($notify);
       
            
        } else {
         
             
         \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Failed']);
         
              return Redirect::back()->withErrors(array('Recharge Failed'));
        }
        
       
    } catch (\Exception $e) {
        Log::error('Error processing recharge: ' . $e->getMessage());
        return redirect()->route('user.invest')->withErrors('An unexpected error occurred. Please try again.');
    }
}

public function dth_Transactions()
    {
    // Assuming there's a 'transactions' table with a 'user_id' column
    $transactions = DB::table('mobile_recharge')
                        ->where('user_id', Auth::user()->id)
                        ->orderBy('created_at', 'desc')
                        ->get();
    
    // Pass the transactions to the view
    return view('user.recharge.dth', ['transactions' => $transactions]);
    }

// post paid recharge

public function post_recharge(Request $request)
{
    try {
        $validation = Validator::make($request->all(), [
            'number' => 'required',
            'amount' => 'required|numeric',
            'operatorcode' => 'required',
            'walletType' => 'required|in:1,2',
        ]);

        if ($validation->fails()) {
            Log::info($validation->getMessageBag()->first());
            return Redirect::back()->withErrors($validation->getMessageBag())->withInput();
        }

        $balance = 0;
        if ($request->walletType == '1') {
            $balance = round(Auth::user()->FundBalance(), 2);
        } elseif ($request->walletType == '2') {
            $balance = round(Auth::user()->available_balance(), 2);
        }

        if ($balance < $request->amount) {
            return back()->withErrors(['error' => 'Insufficient balance to complete this transaction.']);
        }

        $orderid = uniqid(rand(100000, 999999), true);
        $data = [
            'amount' => $request->amount,
            'user_id' => Auth::user()->id,
            'operatorcode' => $request->input('operatorcode'),
            'number' => $request->input('number'),
            'walletType'=> $request->input('walletType'),
            'status'=>'Pending',
            'transaction_id' =>$orderid,                
        ];
         $insertedId = DB::table('mobile_recharge')->insertGetId($data);
         //api work start

    //   api process
    
       $client = new \GuzzleHttp\Client();

       
        $response = $client->request('POST', 'https://business.a1topup.com/recharge/api?username=502939
        &pwd=884257&circlecode=20&operatorcode='.$data['operatorcode'].'&number='.$data['number'].'&amount='.$data['amount'].'&orderid='.$orderid.'', [
            'query' => [
                'username' => 502939,  // Using environment variable
                'pwd' => 884257,  // Using environment variable
                'circlecode' => $data['circlecode'] ?? 'default',
                'operatorcode' => $data['operatorcode'],
                'number' => $data['number'],
                'amount' => $data['amount'],
                'orderid' => $orderid,
                'format' => 'json'
            ]
        ]);

        $responseBody = json_decode($response->getBody()->getContents(), true);

        // dd($responseBody);
        if (isset($responseBody['status']) && $responseBody['status'] == 'Success') {
         
         
         \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Success']);
           
        $notify[] = ['success','Recharged successfully'];

        return redirect()->back()->withNotify($notify);
       
            
        } else {
         
             
         \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Failed']);
         
              return Redirect::back()->withErrors(array('Recharge Failed'));
        }
        
       
    } catch (\Exception $e) {
        Log::error('Error processing recharge: ' . $e->getMessage());
        return redirect()->route('user.invest')->withErrors('An unexpected error occurred. Please try again.');
    }
}


public function post_Transactions()
    {
    // Assuming there's a 'transactions' table with a 'user_id' column
    $transactions = DB::table('mobile_recharge')
                        ->where('user_id', Auth::user()->id)
                        ->orderBy('created_at', 'desc')
                        ->get();
    
    // Pass the transactions to the view
    return view('user.recharge.postpaid', ['transactions' => $transactions]);
    }
// gas recharge

public function gas_post_recharge(Request $request)
{
    try {
        $validation = Validator::make($request->all(), [
            'number' => 'required|digits:10',
            'amount' => 'required|numeric',
            'operatorcode' => 'required',
            'walletType' => 'required|in:1,2',
        ]);

        if ($validation->fails()) {
            Log::info($validation->getMessageBag()->first());
            return Redirect::back()->withErrors($validation->getMessageBag())->withInput();
        }

        $balance = 0;
        if ($request->walletType == '1') {
            $balance = round(Auth::user()->FundBalance(), 2);
        } elseif ($request->walletType == '2') {
            $balance = round(Auth::user()->available_balance(), 2);
        }

        if ($balance < $request->amount) {
            return back()->withErrors(['error' => 'Insufficient balance to complete this transaction.']);
        }

        $orderid = uniqid(rand(100000, 999999), true);
        $data = [
            'amount' => $request->amount,
            'user_id' => Auth::user()->id,
            'operatorcode' => $request->input('operatorcode'),
            'number' => $request->input('number'),
            'walletType'=> $request->input('walletType'),
            'status'=>'Pending',
            'transaction_id' =>$orderid,                
        ];
         $insertedId = DB::table('mobile_recharge')->insertGetId($data);
         //api work start

    //   api process
    
       $client = new \GuzzleHttp\Client();

       
        $response = $client->request('POST', 'https://business.a1topup.com/recharge/api?username=502939
        &pwd=884257&circlecode=20&operatorcode='.$data['operatorcode'].'&number='.$data['number'].'&amount='.$data['amount'].'&orderid='.$orderid.'', [
            'query' => [
                'username' => 502939,  // Using environment variable
                'pwd' => 884257,  // Using environment variable
                'circlecode' => $data['circlecode'] ?? 'default',
                'operatorcode' => $data['operatorcode'],
                'number' => $data['number'],
                'amount' => $data['amount'],
                'orderid' => $orderid,
                'format' => 'json'
            ]
        ]);

        $responseBody = json_decode($response->getBody()->getContents(), true);

        // dd($responseBody);
        if (isset($responseBody['status']) && $responseBody['status'] == 'Success') {
         
         
         \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Success']);
           
        $notify[] = ['success','Recharged successfully'];

        return redirect()->back()->withNotify($notify);
       
            
        } else {
         
             
         \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Failed']);
         
              return Redirect::back()->withErrors(array('Recharge Failed'));
        }
        
       
    } catch (\Exception $e) {
        Log::error('Error processing recharge: ' . $e->getMessage());
        return redirect()->route('user.invest')->withErrors('An unexpected error occurred. Please try again.');
    }
}

public function gas_Transactions()
    {
    // Assuming there's a 'transactions' table with a 'user_id' column
    $transactions = DB::table('mobile_recharge')
                        ->where('user_id', Auth::user()->id)
                        ->orderBy('created_at', 'desc')
                        ->get();
    
    // Pass the transactions to the view
    return view('user.recharge.gas', ['transactions' => $transactions]);
    }
    
    
    //pancard section
        public function newPanc_recharge(Request $request)
{
    try {
        $validation = Validator::make($request->all(), [
            'number' => 'required|digits:10',
            // 'amount' => 'required|numeric',
            'operatorcode' => 'required',
            'walletType' => 'required|in:1,2',
        ]);

        if ($validation->fails()) {
            Log::info($validation->getMessageBag()->first());
            return Redirect::back()->withErrors($validation->getMessageBag())->withInput();
        }

        $balance = 0;
        if ($request->walletType == '1') {
            $balance = round(Auth::user()->FundBalance(), 2);
        } elseif ($request->walletType == '2') {
            $balance = round(Auth::user()->available_balance(), 2);
        }

        if ($balance < $request->amount) {
            return back()->withErrors(['error' => 'Insufficient balance to complete this transaction.']);
        }

        $orderid = uniqid(rand(100000, 999999), true);
        $data = [
            'amount' => $request->amount,
            'user_id' => Auth::user()->id,
            'operatorcode' => $request->input('operatorcode'),
            // 'number' => $request->input('number'),
            'walletType'=> $request->input('walletType'),
            'status'=>'Pending',
            'transaction_id' =>$orderid,                
        ];
         $insertedId = DB::table('mobile_recharge')->insertGetId($data);
         //api work start

    //   api process
    
       $client = new \GuzzleHttp\Client();

       
        $response = $client->request('POST', 'https://business.a1topup.com/recharge/api?username=502939
        &pwd=884257&circlecode=20&operatorcode='.$data['operatorcode'].'&number='.$data['number'].'&amount='.$data['amount'].'&orderid='.$orderid.'', [
            'query' => [
                'username' => 502939,  // Using environment variable
                'pwd' => 884257,  // Using environment variable
                'circlecode' => $data['circlecode'] ?? 'default',
                'operatorcode' => $data['operatorcode'],
                'number' => $data['number'],
                'amount' => $data['amount'],
                'orderid' => $orderid,
                'format' => 'json'
            ]
        ]);

        $responseBody = json_decode($response->getBody()->getContents(), true);

        dd($responseBody);
        if (isset($responseBody['status']) && $responseBody['status'] == 'Success') {
         
         
         \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Success']);
           
        $notify[] = ['success','Recharged successfully'];

        return redirect()->back()->withNotify($notify);
       
            
        } else {
         
             
         \DB::table('mobile_recharge')->where('id',$insertedId)->update(['status'=>'Failed']);
         
              return Redirect::back()->withErrors(array('Recharge Failed'));
        }
        
       
    } catch (\Exception $e) {
        Log::error('Error processing recharge: ' . $e->getMessage());
        return redirect()->route('user.invest')->withErrors('An unexpected error occurred. Please try again.');
    }
}

public function newpan_Transactions()
    {
    // Assuming there's a 'transactions' table with a 'user_id' column
    $transactions = DB::table('mobile_recharge')
                        ->where('user_id', Auth::user()->id)
                        ->orderBy('created_at', 'desc')
                        ->get();
    return view('user.recharge.newpan', ['transactions' => $transactions]);
    }
    
    


}
