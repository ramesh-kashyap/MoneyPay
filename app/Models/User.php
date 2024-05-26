<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name', 'email', 'password', 'tpassword', 'phone','username','sponsor','ParentId','position','active_status','jdate','level','adate','nominee_name','nominee_relation','adhar','pan','PSR','TPSR','country'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'sponsor');
    } 


    public function sponsor_detail()
    {
        return $this->belongsTo('App\Models\User', 'sponsor');
    } 


    public function FundBalance()
    {
    $balance = (Auth::user()->buy_fundAmt->sum('amount')+Auth::user()->fundTransferCredit->sum('netAmt'))-(Auth::user()->buy_packageAmt()+Auth::user()->rechargeDebit(1));
    return $balance;
    } 

    public function buy_fundAmt(){
        return $this->hasMany('App\Models\BuyFund','user_id','id')->where('status','Approved');
    }

    public function buy_packageAmt(){
        $amt= Investment::where('active_from',Auth::user()->username)->where('walletType',1)->sum('amount');
        return $amt;
    }

    public function roi_bonus()
    {
        return $this->hasMany('App\Models\Income','user_id','id')->where('remarks','Roi Bonus');
    } 

    public function binary_bonus()
    {
        return $this->hasMany('App\Models\Income','user_id','id')->where('remarks','Passive Income');
    } 

    
    public function sponsor_bonus()
    {
        return $this->hasMany('App\Models\Income','user_id','id')->where('remarks','Referral Income');
    } 
        
    public function level_bonus()
    {
        return $this->hasMany('App\Models\Income','user_id','id')->where('remarks','Level Income');
    } 
    public function direct_bonus()
    {

        return $this->hasMany('App\Models\Income','user_id','id')->where('remarks','Direct Income');

    } 

    public function payout()
    {
       return $this->hasMany('App\Models\Payout','user_id','id');
   } 
          
    public function reward_bonus()
    {
        return $this->hasMany('App\Models\Income','user_id','id')->where('remarks','Rank Income');
    } 

    public function gap_margin_bonus()
    {
        return $this->hasMany('App\Models\Income','user_id','id')->where('remarks','Gap Margin Bonus');
    } 
    
          public function fundTransferCredit()
    {
        return $this->hasMany('App\Models\Fundtransfer','transfered_id','id');
    }
    
    
        public function fundTransfer()
    {
        return $this->hasMany('App\Models\Fundtransfer','transfer_id','id');
    }
    
    public function available_balance()
    {
    $balance = Auth::user()->users_incomes->sum('comm')- (Auth::user()->withdraw()+Auth::user()->fundTransfer->sum('amount')+Auth::user()->rechargeDebit(2));
    return $balance;
    } 

    public function users_incomes()
    {
        return $this->hasMany('App\Models\Income','user_id','id');
    } 
    

    public function withdraw()
    {
        return  Withdraw::where('user_id',Auth::user()->id)->where('status','!=','Failed')->sum('amount');
    } 

    public function rechargeDebit($walletType){
        $data = \DB::table('mobile_recharge')->where('user_id',Auth::user()->id)->where('walletType',$walletType)->where('status','!=','Failed')->sum('debit_amt');
        return $data;
    }


    public function investment(){
        return $this->hasMany('App\Models\Investment','user_id','id')->where('status','Active');
    }

    
}
