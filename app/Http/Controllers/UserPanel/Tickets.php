<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ticket;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Log;
use Redirect;
use Hash;
use Validator;

class Tickets extends Controller
{
    public function GenerateTicket()
    {

    $user=Auth::user();
    $this->data['page'] = 'user.ticket.GenerateTickets';
    return $this->dashboard_layout();

    }


    public function ticket()
    {

    $user=Auth::user();
    $this->data['page'] = 'user.ticket.index';
    return $this->dashboard_layout();

    }




    public function SubmitTicket(Request $request)
    {


      try{
            $validation =  Validator::make($request->all(), [
                'category' => 'required',
                'message' => 'required',
            ]);

            if($validation->fails()) {
                Log::info($validation->getMessageBag()->first());

                return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
            }
            $user=Auth::user();
            $ticket_no=$request->ticket_no;
            $category=$request->category;
            $message=$request->message;

              if($ticket_no != ""){

               $check_tacket =Ticket::where('user_id',$user->id)->where('ticket_no',$ticket_no)->first();

               if(!empty($check_tacket)){
                   $ticket_no_final = $ticket_no;
               }
               else{

                   return Redirect::back()->withErrors(array('Ticket does not exist'));

                  die();
               }

                 }
                 else{
                    $ticket_no_final = rand(1000000000,9999999999);
                 }

               $data_to_insert = array(
                              'user_id_fk' => $user->username,
                              'user_id' => $user->id,
                              'category'   => $category,
                              'msg'        => $message,
                              'gen_date'   => date('Y-m-d'),
                              'closing_date' => NULL,
                              'ticket_no' => $ticket_no_final,
                              'status'       => false,
                              'reply_by'     => 'user'
                            );

                  $payment =  Ticket::create($data_to_insert);

                  $notify[] = ['success','Generate Ticket successfully'];
                  return redirect()->back()->withNotify($notify);


          }
           catch(\Exception $e){
            Log::info('error here');
            Log::info($e->getMessage());

            return  redirect()->route('user.GenerateTicket')->withErrors('error', $e->getMessage())->withInput();
        }

    }


  public function SupportMessage(Request $request)
  {

       $user=Auth::user();

        $limit = $request->limit ? $request->limit : paginationLimit();
          $status = $request->status ? $request->status : null;
          $search = $request->search ? $request->search : null;
          $notes = Ticket::where('user_id',$user->id);
         if($search <> null && $request->reset!="Reset"){
          $notes = $notes->where(function($q) use($search){
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

        $this->data['level_income'] = $notes;
        $this->data['search'] = $search;
        $this->data['page'] = 'user.ticket.SupportMessage';
        return $this->dashboard_layout();


   }


   public function ViewMessage(Request $request)
   {

        $user=Auth::user();
        $id= $request->ticket_no ; // or any params
        $profile = Ticket::where('ticket_no',$id)->get();

       $this->data['open_ticket_msg'] = $profile;
       $this->data['page'] = 'user.ticket.ViewMessage';
       return $this->dashboard_layout();

   }
}
