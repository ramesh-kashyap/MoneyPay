<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Redirect;
use App\Models\User;
use App\Models\Bank;
use Validator;
use Hash;
use Auth;
use DB;
use Log;


class Dashboard extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index()
    {     
     
     $this->data['page'] = 'admin.dashboard';
     return $this->admin_dashboard();
     
    } 


    public function changePassword()
    {     
     
     $this->data['page'] = 'admin.setting.change-password';
     return $this->admin_dashboard();
     
    } 



    public function add_bank_detail()
    {     
     
     $this->data['page'] = 'admin.banks.add-bank-detail';
     return $this->admin_dashboard();
     
    } 

    public function edit_bank_kyc(Request $request)
    {

       $id= $request->id ; // or any params
      
   
     $bank = Bank::where('id',$id)->first();
      $profile = User::where('id',$bank->user_id)->first();
    // print_r($data);die(); ÷ 

     
    $this->data['profile'] =$profile;
    $this->data['bank'] =$bank;
    $this->data['page'] = 'admin.banks.edit-bank-details';
    return $this->admin_dashboard();

   }

       
   public function remove_bank_detail(Request $request)
   {

      $id= $request->id ; // or any params
     
     $user =  Bank::where('id',$id)->delete(); 

     $notify[] = ['success', 'Bank Detail Removed successfully'];
     return redirect()->back()->withNotify($notify);

  }
  

 




  public function view_bank_detail(Request $request)
  {     

         $limit = $request->limit ? $request->limit : 10;
          $status = $request->status ? $request->status : null;
          $search = $request->search ? $request->search : null;
              
          $notes = Bank::select('banks.*','users.name as name','users.username as username')->join('users', 'users.id', '=', 'banks.user_id');      
         if($search <> null && $request->reset!="Reset"){
          $notes = $notes->where(function($q) use($search){
            $q->Where('user_id', 'LIKE', '%' . $search . '%')          
            ->orWhere('account_no', 'LIKE', '%' . $search . '%')
            ->orWhere('username', 'LIKE', '%' . $search . '%')
            ->orWhere('account_holder', 'LIKE', '%' . $search . '%')         
            ->orWhere('branch_name', 'LIKE', '%' . $search . '%')         
            ->orWhere('ifsc_code', 'LIKE', '%' . $search . '%')         
            ->orWhere('bank_name', 'LIKE', '%' . $search . '%');
          });
      
    }
          
          $notes = $notes->paginate($limit)
              ->appends([
                  'limit' => $limit
              ]);

              
              $this->data['active_user'] =$notes;
              $this->data['search'] =$search;
              $this->data['page'] = 'admin.banks.view-kyc-detail';
              return $this->admin_dashboard();
  }  



    public function change_password_post(Request $request)
    {

        try {
            $data = $request->all();
            $rules = array('old_password' => 'required', 'password' => 'required|confirmed');
            $msg = [
                'old_password.required'     => 'Old Password is required',
                'password.required'         => 'Password is required' ,
                'password.confirmed'        => 'Password must match'    ,
            ];

            $validator = Validator::make($data, $rules, $msg);
            if ($validator->fails())
                return Redirect::back()->withErrors($validator->getMessageBag()->first());

            $user = Auth::guard('admin')->user();
            // print_r($user);die();

            if (!\Hash::check($data['old_password'], $user->password))
                return Redirect::back()->withErrors('Current Password is incorrect');

            DB::Table('admins')->where('id', $user->id)->update(array(
                'password' => \Hash::make($data['password']),
                'updated_at' => new \DateTime
            ));

            $notify[] = ['success', 'password updated successfully'];
            return redirect()->back()->withNotify($notify);

        } catch (\Exception $e) {
            return Redirect::back()->witherrors($e->getMessage())->withInput();
        }

    }



        
public function users_bank_kyc(Request $request)

{
    try{
        $validation =  Validator::make($request->all(), [
            'user_id' => 'required|exists:users,username',
            'account_holder' => 'required',
            'bank_name' => 'required',
            'branch_name' => 'required',
            'account_no' => 'required',
            'ifsc_code' => 'required',
            'pancard_no' => 'required',
          
          
        ]);

        if($validation->fails()) {
            Log::info($validation->getMessageBag()->first());

            return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
        }

       
        //check if email exist
        
       
      $post_array  = $request->all();
      
       $user= User::where('username',$post_array['user_id'])->first();
 
       $bank_array['account_holder']=$post_array['account_holder'];
       $bank_array['bank_name']=$post_array['bank_name'];
       $bank_array['branch_name']=$post_array['branch_name'];
       $bank_array['account_no']=$post_array['account_no'];
       $bank_array['user_id']=$user->id;
       $bank_array['ifsc_code']=$post_array['ifsc_code'];
       $bank_array['pancard_no']=$post_array['pancard_no'];
        Bank::updateOrCreate(['user_id'=>$user->id],$bank_array);


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



}
