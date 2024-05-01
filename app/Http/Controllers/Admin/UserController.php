<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;
use App\Models\Income;
use App\Models\Investment;
use App\Models\Bank;
use App\Models\Withdraw;
use App\Models\BuyFund;
use Auth;
use DB;
use Log;
use Validator;
use Redirect;
use Helper;
use Storage;
use Carbon\Carbon;

class UserController extends Controller
{

    public function alluserlist(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = User::orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('name', 'LIKE', '%' . $search . '%')
              ->orWhere('username', 'LIKE', '%' . $search . '%')
              ->orWhere('email', 'LIKE', '%' . $search . '%')
              ->orWhere('phone', 'LIKE', '%' . $search . '%')
              ->orWhere('jdate', 'LIKE', '%' . $search . '%')
              ->orWhere('active_status', 'LIKE', '%' . $search . '%');
            });

          }
                $notes = $notes->orderBy('id', 'DESC')->paginate($limit)
                    ->appends([
                        'limit' => $limit
                    ]);

                    $this->data['alluserlist'] =  $notes;
                    $this->data['search'] = $search;
                    $this->data['page'] = 'admin.users.alluserlist';
                    return $this->admin_dashboard();


    }


    public function active_users(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = User::where('active_status','Active')->orderBy('id', 'DESC');

       if($search <> null && $request->reset!="Reset"){
        $notes = $notes->where(function($q) use($search){
          $q->Where('name', 'LIKE', '%' . $search . '%')
          ->orWhere('username', 'LIKE', '%' . $search . '%')
          ->orWhere('email', 'LIKE', '%' . $search . '%')
          ->orWhere('phone', 'LIKE', '%' . $search . '%')
          ->orWhere('jdate', 'LIKE', '%' . $search . '%')
          ->orWhere('active_status', 'LIKE', '%' . $search . '%');
        });

      }
            $notes = $notes->paginate($limit)
                ->appends([
                    'limit' => $limit
                ]);

     $this->data['active_user'] =  $notes;
     $this->data['search'] = $search;
     $this->data['page'] = 'admin.users.active-user';
     return $this->admin_dashboard();

    }



    public function user_activation()
    {
     
     $this->data['page'] = 'admin.users.user_activate';
     return $this->admin_dashboard();

    }



    public function activate_admin_post(Request $request)
    {


      try{
            $validation =  Validator::make($request->all(), [
                'memberID' => 'required|exists:users,username',
                'amount' => 'required|min:0',
               
              
            ]);

            if($validation->fails()) {
                Log::info($validation->getMessageBag()->first());

                return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
            }
            
              

                $user=User::where('username',$request->memberID)->orderBy('id','desc')->first();
               
                  $invoice = substr(str_shuffle("0123456789"), 0, 7);

                  $invest_check=Investment::where('user_id',$user->id)->where('status','!=','Decline')->orderBy('id','desc')->limit(1)->first();
                  $invoice = substr(str_shuffle("0123456789"), 0, 7);


                //   if(!empty($invest_check))
                //      {
                //       $check_ex=($invest_check->amount)?$invest_check->amount:0;
                //      }
                //      else
                //      {
                //          $check_ex=0;
                //      }

                //      // print($check_ex);die();
                //      if ($request->amount>=$check_ex) 
                //      {
                     $candition=true;
                    //  }
                    //  else
                    //  {
                    //  $candition=false;
                    //  }

              if ($candition)
               {
                   
                   $roiCandition= 0;
                  
                    $capping =0;
                      $amt =0;
                      if ($request->amount==800) 
                      {
                        $capping =3000;
                        $amt =1;
                      }
        
                      if ($request->amount==2400) 
                      {
                        $capping =5000;
                        $amt =3;
                      }
        
                      if ($request->amount==4800) 
                      {
                        $capping =7500;
                        $amt =6;
                      }
        
                      if ($request->amount==8000) 
                      {
                        $capping =10000;
                        $amt =10;
                      }
                      
              
              	   $data = [
                        'plan' => $invoice,
                        'transaction_id' => md5(uniqid(rand(), true)),
                        'user_id' => $user->id,
                        'user_id_fk' => $user->username,
                        'amount' => $request->amount,
                        'amt' => $amt,
                        'capping' => $capping,
                        'payment_mode' => 'INR',
                        'status' => 'Active',
                        'sdate' => Date("Y-m-d"),
                        'active_from' => 'Admin',
                        'roiCandition' => $roiCandition,
                        
                    ];
                  
                     $users = User::where('id',$user->id)->first();
                  if ($users->active_status=="Pending")
                   {
                    $user_update=array('active_status'=>'Active','adate'=>Date("Y-m-d H:i:s"),'package'=>$request->amount);
                    User::where('id',$user->id)->update($user_update);
                  }
                   else
                 {
                  $total = $users->package+$request->amount;
                    $user_update=array('package'=>$total,'active_status'=>'Active',);
                  User::where('id',$user->id)->update($user_update); 
                 }
                      
                   $payment =  Investment::insert($data);
                
          
                $notify[] = ['success', 'User Activation successfully'];
               return redirect()->back()->withNotify($notify);
              }
              else
              {
                   return Redirect::back()->withErrors(array('User ALready Active '));
              }
                 

          }
           catch(\Exception $e){
            Log::info('error here');
            Log::info($e->getMessage());
            print_r($e->getMessage());
            die("hi");
            return  redirect()->route('user-activation')->withErrors('error', $e->getMessage())->withInput();
              }
        

    }
    



        public function pending_users(Request $request)
        {
            $limit = $request->limit ? $request->limit : paginationLimit();
            $status = $request->status ? $request->status : null;
            $search = $request->search ? $request->search : null;
            $notes = User::where('active_status','Pending')->orderBy('id', 'DESC');

          if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('name', 'LIKE', '%' . $search . '%')
              ->orWhere('username', 'LIKE', '%' . $search . '%')
              ->orWhere('email', 'LIKE', '%' . $search . '%')
              ->orWhere('phone', 'LIKE', '%' . $search . '%')
              ->orWhere('jdate', 'LIKE', '%' . $search . '%')
              ->orWhere('active_status', 'LIKE', '%' . $search . '%');
            });

          }
                $notes = $notes->paginate($limit)
                    ->appends([
                        'limit' => $limit
                    ]);

        $this->data['active_user'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.users.pending-user';
        return $this->admin_dashboard();

        }

    public function edit_users(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = User::orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('name', 'LIKE', '%' . $search . '%')
              ->orWhere('username', 'LIKE', '%' . $search . '%')
              ->orWhere('email', 'LIKE', '%' . $search . '%')
              ->orWhere('phone', 'LIKE', '%' . $search . '%')
              ->orWhere('jdate', 'LIKE', '%' . $search . '%')
              ->orWhere('active_status', 'LIKE', '%' . $search . '%');
            });

          }
    $notes = $notes->paginate($limit)
        ->appends([
            'limit' => $limit
        ]);

        $this->data['edit_users'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.users.edit-users';
        return $this->admin_dashboard();


    }

    public function edit_users_view($id)
    {

    try {
        $id = Crypt::decrypt($id);
        } catch (\Illuminate\Contracts\Encryption\DecryptException $e) {
        return back()->withErrors(array('Invalid User!'));
    }

    $profile = User::where('id',$id)->first();
     $bank = Bank::where('user_id',$id)->first();
    $this->data['bank'] =  $bank;
    $this->data['profile'] =  $profile;
    $this->data['page'] = 'admin.users.users_profile_view';
    return $this->admin_dashboard();

   }

   public function users_profile_update(Request $request)

   {
       try{
           $validation =  Validator::make($request->all(), [
               'email' => 'required',
               'name' => 'required',
               'phone' => 'required|numeric'

           ]);

           if($validation->fails()) {
               Log::info($validation->getMessageBag()->first());

               return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
           }


           //check if email exist
         $post_array  = $request->all();
           $id=$post_array['id'];
         $update_data['name']=$post_array['name'];
         $update_data['phone']=$post_array['phone'];
         if(!empty($post_array['password']))
         {
           $update_data['password']= \Hash::make($post_array['password']);
         }
       //   $update_data['trx_addres']=$post_array['trx_addres'];
         $update_data['email']=$post_array['email'];
        //   $bank_array['account_holder']=$post_array['account_holder'];
        //   $bank_array['bank_name']=$post_array['bank_name'];
        //   $bank_array['branch_name']=$post_array['branch_name'];
        //   $bank_array['account_no']=$post_array['account_no'];
        //   $bank_array['user_id']=$id;
        //   $bank_array['ifsc_code']=$post_array['ifsc_code'];

         $user =  user::where('id',$id)->update($update_data);
        //  if(!empty($bank_array['account_holder']) && !empty($bank_array['account_no']))
        //  {
        //       Bank::updateOrCreate(['user_id'=>$id],$bank_array);
        //  }
       $notify[] = ['success', 'Updated successfully'];
       return redirect()->back()->withNotify($notify);

         }
          catch(\Exception $e){
           Log::info('error here');
           Log::info($e->getMessage());
           print_r($e->getMessage());
           die("hi");
           return back()->withErrors('error', $e->getMessage())->withInput();
           //return response(array('success'=>0,'statuscode'=>500,'msg'=>$e->getMessage()),500);
       }
   }



   public function block_users(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = User::wherein('active_status',array('Active','Block','Inactive'))->orderBy('id', 'DESC');;

        if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('name', 'LIKE', '%' . $search . '%')
              ->orWhere('username', 'LIKE', '%' . $search . '%')
              ->orWhere('email', 'LIKE', '%' . $search . '%')
              ->orWhere('phone', 'LIKE', '%' . $search . '%')
              ->orWhere('jdate', 'LIKE', '%' . $search . '%')
              ->orWhere('active_status', 'LIKE', '%' . $search . '%');
            });

          }
                $notes = $notes->paginate($limit)
                    ->appends([
                        'limit' => $limit
                    ]);

                    $this->data['active_user'] =  $notes;
                    $this->data['search'] = $search;
                    $this->data['page'] = 'admin.users.block-users';
                    return $this->admin_dashboard();


        }
        public function block_submit(Request $request)
        {

          $id= $request->id; // or any params
          $update_data['active_status']= $request->status;
          $user =  user::where('id',$id)->update($update_data);

        $notify[] = ['success', 'User '.$request->status.' successfully'];
        return redirect()->back()->withNotify($notify);
      }




}
