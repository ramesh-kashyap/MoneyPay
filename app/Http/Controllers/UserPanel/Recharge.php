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

            $data = [
                'amount' => $request->amount,
                'user_id' => Auth::user()->id,
                'operatorcode' => $request->input('operatorcode'),
                'number' => $request->input('number'),
                'walletType'=> $request->input('walletType'),
                'status'=>'Success',
                'transaction_id' => Auth::user()->username,                
            ];

            //submitting data into database 
            $inserted = DB::table('mobile_recharge')->insert($data);
            // dd($inserted);

            if ($inserted) {
                // Flash a success message to the session and redirect to a specific route
                return redirect()->route('user.mobile')->with('success', 'Transaction inserted successfully!');
            } else {
                // Flash an error message to the session and redirect back
                return redirect()->back()->with('error', 'Failed to insert transaction');
            }
            
            
            //api work start

            $apiResult = $this->saveRecharge($data);
            if ($apiResult['success']) {
                return back()->with('success', 'Recharge successful!');
            } else {
                return back()->withErrors(['error' => $apiResult['message']]);
            }
        } catch (\Exception $e) {
            Log::error('Error processing recharge: ' . $e->getMessage());
            return redirect()->route('user.invest')->withErrors('An unexpected error occurred. Please try again.');
        }
    }

    private function saveRecharge($data)
    {
        $client = new \GuzzleHttp\Client();

        try {
            $orderid = uniqid(rand(100000, 999999), true);
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
            if (isset($responseBody['status']) && $responseBody['status'] === 'Success') {
                return [
                    'success' => true,
                    'transaction_id' => $responseBody['txid'],
                    'message' => 'Recharge successful'
                ];
            } else {
                return [
                    'success' => false,
                    'message' => $responseBody['message'] ?? 'Failed to complete recharge'
                ];
            }
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => "API call failed: " . $e->getMessage()
            ];
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



<<<<<<< HEAD
//electricity recharge
public function electricitycharge(Request $request)
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

            $data = [
                'amount' => $request->amount,
                'user_id' => Auth::user()->id,
                'operatorcode' => $request->input('operatorcode'),
                'number' => $request->input('number'),
                'walletType'=> $request->input('walletType'),
                'status'=>'Success',
                'transaction_id' => Auth::user()->username,                
            ];
            //submitting data into database 
            // $inserted = DB::table('mobile_recharge')->insert($data);
            // dd($inserted);
            // if ($inserted) {
            //     return redirect()->route('user.mobile')->with('success', 'Transaction inserted successfully!');
            // } else {
            //     return redirect()->back()->with('error', 'Failed to insert transaction');
            // }
            //api work start
            $apiResult = $this->eleRecharge($data);
            if ($apiResult['success']) {
                return back()->with('success', 'Recharge successful!');
            } else {
                return back()->withErrors(['error' => $apiResult['message']]);
            }
        } catch (\Exception $e) {
            Log::error('Error processing recharge: ' . $e->getMessage());
            return redirect()->route('user.elecrticity')->withErrors('An unexpected error occurred. Please try again.');
        }
    }

    private function eleRecharge($data)
    {
        $client = new \GuzzleHttp\Client();

        try {
            $orderid = uniqid(rand(100000, 999999), true);
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
            if (isset($responseBody['status']) && $responseBody['status'] === 'Success') {
                return [
                    'success' => true,
                    'transaction_id' => $responseBody['txid'],
                    'message' => 'Recharge successful'
                ];
            } else {
                return [
                    'success' => false,
                    'message' => $responseBody['message'] ?? 'Failed to complete recharge'
                ];
            }
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => "API call failed: " . $e->getMessage()
            ];
        }
    }


    //fatch data from database



=======







public function DthRecharge(Request $request)
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

        $data = [
            'amount' => $request->amount,
            'user_id' => Auth::user()->id,
            'operatorcode' => $request->input('operatorcode'),
            'number' => $request->input('number'),
            'walletType'=> $request->input('walletType'),
            'status'=>'Success',
            'transaction_id' => Auth::user()->username,                
        ];

        //submitting data into database 
        $inserted = DB::table('dth_recharge')->insert($data);
        // dd($inserted);

        if ($inserted) {
            // Flash a success message to the session and redirect to a specific route
            return redirect()->route('user.dth')->with('success', 'Transaction inserted successfully!');
        } else {
            // Flash an error message to the session and redirect back
            return redirect()->back()->with('error', 'Failed to insert transaction');
        }
        
        
        //api work start

        $apiResult = $this->D_Recharge($data);
        if ($apiResult['success']) {
            return back()->with('success', 'Recharge successful!');
        } else {
            return back()->withErrors(['error' => $apiResult['message']]);
        }
    } catch (\Exception $e) {
        Log::error('Error processing recharge: ' . $e->getMessage());
        return redirect()->route('user.dth')->withErrors('An unexpected error occurred. Please try again.');
    }
}

private function D_Recharge($data)
{
    $client = new \GuzzleHttp\Client();

    try {
        $orderid = uniqid(rand(100000, 999999), true);
        $response = $client->request('POST', 'https://business.a1topup.com/recharge/api?username=502939
        &pwd=884257&circlecode=20&operatorcode='.$data['operatorcode'].'&number='.$data['number'].'&amount='.$data['amount'].'&orderid='.$orderid.'', [
            'query' => [
                'username' => 502939,  // Using environment variable
                'pwd' => 884257,  
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
        if (isset($responseBody['status']) && $responseBody['status'] === 'Success') {
            return [
                'success' => true,
                'transaction_id' => $responseBody['txid'],
                'message' => 'Recharge successful'
            ];
        } else {
            return [
                'success' => false,
                'message' => $responseBody['message'] ?? 'Failed to complete recharge'
            ];
        }
    } catch (\Exception $e) {
        return [
            'success' => false,
            'message' => "API call failed: " . $e->getMessage()
        ];
    }
}


//fatch data from database
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
>>>>>>> 1159272cd5f0a95f9d98af46044d0e43e5a59d48
}
