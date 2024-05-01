<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ticket;
use Auth;
use DB;
use Log;
use Validator;
use Redirect;
use Helper;
use Carbon\Carbon;
class SupportController extends Controller
{
    
    public function index(Request $request)
    {


        $limit = $request->limit ? $request->limit :  paginationLimit();
        $status = $request->status ? $request->status : null;
        $search = $request->search ? $request->search : null;
        \DB::statement("SET SQL_MODE=''");
        $notes = Ticket::where('status',0)->groupBy('ticket_no')->orderBy('id', 'DESC');
        if($search <> null && $request->reset!="Reset")
        {
            $notes = Ticket::where(function($q) use($search){
             $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')          
                ->orWhere('category', 'LIKE', '%' . $search . '%')
                ->orWhere('status', 'LIKE', '%' . $search . '%')
                ->orWhere('gen_date', 'LIKE', '%' . $search . '%')
                ->orWhere('ticket_no', 'LIKE', '%' . $search . '%')
                ->orWhere('reply_by', 'LIKE', '%' . $search . '%')
                ->orWhere('closing_date', 'LIKE', '%' . $search . '%');
            });

        }

            $notes = $notes->paginate($limit)
            ->appends([
                'limit' => $limit
            ]);

                $this->data['support_query'] =  $notes;
                $this->data['search'] = $search;
                $this->data['page'] = 'admin.support.support-query';
                return $this->admin_dashboard();
    }


    public function get_support_msg(Request $request)
    {

    

         $id= $request->ticket_no ; // or any params
       
        $profile = Ticket::where('ticket_no',$id)->get();

        $this->data['open_ticket_msg'] = $profile;
        $this->data['page'] = 'admin.support.get_support_msg';
        return $this->admin_dashboard();
    }

    public function close_ticket_(Request $request)
    {

    

                $id= $request->ticket_no ; // or any params
        
        $profile = Ticket::where('ticket_no',$id)->update(array('status'=>1,'closing_date'=>date("Y-m-d H:i:s")));
  
    $notify[] = ['success', 'Close Ticket successfully'];
    return redirect()->back()->withNotify($notify);
    }


        public function reply_support_msg(Request $request)
            {   
            $id= $request->ticket_no ; // or any params
            $this->data['open_ticket_msg'] = $id;
            $this->data['page'] = 'admin.support.reply-support';
            return $this->admin_dashboard();
            }




        public function admin_ticket_submit(Request $request)
        {
    
    
          try{
                $validation =  Validator::make($request->all(), [
                    // 'user_id' => 'required',
                    'ticket_no' => 'required',
                    'message' => 'required',
                   
                   
                  
                ]);
    
                if($validation->fails()) {
                    Log::info($validation->getMessageBag()->first());
    
                    return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
                }
              
                $ticket_no=$request->ticket_no;
                $message=$request->message;
    
                 $check_tacket =Ticket::where('ticket_no',$ticket_no)->first();
           
                 if(!empty($check_tacket))  
                 {
                  
                   $data_to_insert = array(
                                  'user_id_fk' => $check_tacket->user_id_fk, 
                                  'user_id' => $check_tacket->user_id, 
                                  'category'   => $check_tacket->category, 
                                  'msg'        => $message, 
                                  'gen_date'   => date('Y-m-d'), 
                                  'closing_date' => NULL, 
                                  'ticket_no' => $ticket_no, 
                                 
                                  'status'       => false,
                                  'reply_by'     => 'admin'
                                );
                 
                      $payment =  Ticket::create($data_to_insert);
                      
                      
                  
          
            $notify[] = ['success', 'Generate Ticket successfully'];
            return redirect()->route('admin.support-query')->withNotify($notify);
    
                 }
                 else
                 {
                      return redirect()->route('admin.support-query')->withErrors(array('Ticket does not exist'));
                 }
    
              }
               catch(\Exception $e){
                Log::info('error here');
                Log::info($e->getMessage());
                print_r($e->getMessage());
                die("hi");
                return  redirect()->route('admin.support-query')->withErrors('error', $e->getMessage())->withInput();
            }
    
        }
        


}
