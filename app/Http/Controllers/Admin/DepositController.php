<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Investment;
use App\Models\User;

class DepositController extends Controller
{
    public function deposit_request(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Investment::where('status','Pending')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('amount', 'LIKE', '%' . $search . '%')
              ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
              ->orWhere('sdate', 'LIKE', '%' . $search . '%')
              ->orWhere('status', 'LIKE', '%' . $search . '%')
              ->orWhere('transaction_id', 'LIKE', '%' . $search . '%');
            });

          }
    $notes = $notes->paginate($limit)
        ->appends([
            'limit' => $limit
        ]);

        $this->data['deposit_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.deposit.deposit-request';
        return $this->admin_dashboard();
    }


    public function rejected_deposit(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Investment::where('status','Pending')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('amount', 'LIKE', '%' . $search . '%')
              ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
              ->orWhere('sdate', 'LIKE', '%' . $search . '%')
              ->orWhere('status', 'LIKE', '%' . $search . '%')
              ->orWhere('transaction_id', 'LIKE', '%' . $search . '%');
            });

          }
    $notes = $notes->paginate($limit)
        ->appends([
            'limit' => $limit
        ]);

        $this->data['deposit_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.deposit.rejected-deposit';
        return $this->admin_dashboard();
    }



    public function deposit_list(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Investment::where('status','Active')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset"){
            $notes = $notes->where(function($q) use($search){
              $q->Where('amount', 'LIKE', '%' . $search . '%')
              ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
              ->orWhere('sdate', 'LIKE', '%' . $search . '%')
              ->orWhere('status', 'LIKE', '%' . $search . '%')
              ->orWhere('transaction_id', 'LIKE', '%' . $search . '%');
            });

          }
    $notes = $notes->paginate($limit)
        ->appends([
            'limit' => $limit
        ]);

        $this->data['deposit_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.deposit.deposit-list';
        return $this->admin_dashboard();
    }



    public function deposit_request_done(Request $request)
    {

       $id= $request->id ; // or any params
       $user_id= $request->user_Id ; // or any params
       $deposit_status= $request->deposit_status ; // or any params
        $user = Investment::where('id',$id)->first();

     if ($deposit_status=="success")
      {
         $users = User::where('id',$user_id)->first();
          $update_data['status']= 'Active'; 
          
           Investment::where('id',$id)->update($update_data); 
           
         if ($users->active_status=="Pending")
          {   
           $user_update=array('active_status'=>'Active','adate'=>Date("Y-m-d H:i:s"),'package'=>$user->amount);
          User::where('id',$user->user_id)->update($user_update);
         }
         else
         {
            $user_update=array('package'=>$user->amount,'active_status'=>'Active',);
          User::where('id',$user->user_id)->update($user_update); 
         }
         add_level_income($user->user_id,$user->amount);
        $notify[] = ['success', 'Deposit request Approved successfully'];
        return redirect()->back()->withNotify($notify);
        }
        else
        {
            $update_data['status']= 'Decline'; 
    //   $user =  Investment::where('id',$id)->delete(); 
        Investment::where('id',$id)->update($update_data); 
        
        $notify[] = ['success', 'Deposit request Rejected successfully'];
        return redirect()->back()->withNotify($notify);
        }
   
   
     

   }
    

}
