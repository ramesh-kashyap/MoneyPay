<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Withdraw;
use App\Models\User;
use App\Models\Payout;
use Carbon\Carbon;

class WithdrawController extends Controller
{

    public function pendingWithdrawal(Request $request)
    {
        $limit = $request->limit ? $request->limit : 100000000000;
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Withdraw::where('status','Pending')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset")
        {
        $notes = $notes->where(function($q) use($search){
            $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')          
            ->orWhere('amount', 'LIKE', '%' . $search . '%')
            ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('txn_id', 'LIKE', '%' . $search . '%')         
            ->orWhere('wdate', 'LIKE', '%' . $search . '%');
          });
          }
        $notes = $notes->paginate($limit)
            ->appends([
                'limit' => $limit
            ]);

        $this->data['withdraw_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.withdraw.pending-withdraw';
        return $this->admin_dashboard();
    }


    

    public function rejectedWithdrawal(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Withdraw::where('status','Failed')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset")
        {
        $notes = $notes->where(function($q) use($search){
            $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')          
            ->orWhere('amount', 'LIKE', '%' . $search . '%')
            ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('txn_id', 'LIKE', '%' . $search . '%')         
            ->orWhere('wdate', 'LIKE', '%' . $search . '%');
          });
          }
        $notes = $notes->paginate($limit)
            ->appends([
                'limit' => $limit
            ]);

        $this->data['withdraw_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.withdraw.rejected-withdraw';
        return $this->admin_dashboard();
    }


    public function paymentledgers(Request $request)
    {
         
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;  
                
            $start_date = $request->start_date ? $request->start_date : null;
            $end_date = $request->end_date ? $request->end_date : null;
                if($start_date <> null && $end_date <> null)
            {
                $new_sdate = date('Y-m-d', strtotime($start_date));
                $new_edate = date('Y-m-d', strtotime($end_date));
            
            $notes = Payout::whereDate('created_at', '>=', $new_sdate)->whereDate('created_at', '<=',$new_edate)->paginate($limit)
                    ->appends([
                        'limit' => $limit
                    ]);
            
            }
            else
            {
            $notes = Payout::paginate($limit)
                    ->appends([
                        'limit' => $limit
                    ]);
                    
                    
                    
            }
            if($search <> null && $request->reset!="Reset"){
                $notes = Payout::where(function($q) use($search){
                $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')          
                ->orWhere('distributor_bonus', 'LIKE', '%' . $search . '%')
                ->orWhere('performance_bonus', 'LIKE', '%' . $search . '%')
                ->orWhere('ttime', 'LIKE', '%' . $search . '%')              
                ->orWhere('withdraw_amt', 'LIKE', '%' . $search . '%');
                })->paginate($limit)
                    ->appends([
                        'limit' => $limit
                    ]);
            
        }

        $this->data['withdraw_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.withdraw.payment-ledgers';
        return $this->admin_dashboard();
    }


    public function withdraw_request_done_multiple(Request $request)
    {
        $withdraw_id = $request->input('checkedid');
        
        // dd($withdraw_id);
        if(is_array($withdraw_id))
        {
          foreach ($withdraw_id as $key => $value) {
  
            
             $update_data['status']= 'Approved'; 
             $update_data['txn_id']=md5(uniqid(rand(), true)); 
               $update_data['paid_date']= Carbon::now(); 
               $user =  Withdraw::where('id',$value)->update($update_data); 
          }
       
       $notify[] = ['success', 'Withdraw request Approved successfully'];
       return redirect()->back()->withNotify($notify);
        }
        else
        {
            return back()->withErrors(array(' Record not found!'));  
        }
       
    }
    

    public function approvedWithdrawal(Request $request)
    {
        $limit = $request->limit ? $request->limit : paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        $notes = Withdraw::where('status','Approved')->orderBy('id', 'DESC');

        if($search <> null && $request->reset!="Reset")
        {
        $notes = $notes->where(function($q) use($search){
            $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')          
            ->orWhere('amount', 'LIKE', '%' . $search . '%')
            ->orWhere('user_id_fk', 'LIKE', '%' . $search . '%')
            ->orWhere('txn_id', 'LIKE', '%' . $search . '%')         
            ->orWhere('wdate', 'LIKE', '%' . $search . '%');
          });
          }
        $notes = $notes->paginate($limit)
            ->appends([
                'limit' => $limit
            ]);

        $this->data['withdraw_list'] =  $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'admin.withdraw.approved-withdraw';
        return $this->admin_dashboard();
    }

    

        public function withdraw_request_done(Request $request)
        {

        $id= $request->id ; // or any params
        $withdraw_status= $request->withdraw_status ; // or any params
            $withdraw_id = Withdraw::where('id',$id)->first();
            $user_id = User::where('id',$withdraw_id->user_id)->first();

        if ($withdraw_status=="success")
        {
        $update_data['status']= 'Approved'; 
        $update_data['paid_date']= Carbon::now(); 
        $user =  Withdraw::where('id',$id)->update($update_data);    
        $notify[] = ['success', 'Withdraw request Approved successfully'];
        return redirect()->back()->withNotify($notify);
        }
        else
        {
        $update_data['status']= 'Failed'; 
        $user =  Withdraw::where('id',$id)->update($update_data); 
        $notify[] = ['success', 'Withdraw request Rejected successfully'];
        return redirect()->back()->withNotify($notify);
        }
    
    }


}
