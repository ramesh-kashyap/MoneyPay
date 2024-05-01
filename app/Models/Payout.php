<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payout extends Model
{
    protected $fillable = [
        'growth_bonus', 'user_id_fk', 'user_id','reward_bonus','ttime','level_bonus','total','deduction','withdraw_amt','created_at','payout_date','updated_at',
    ];

      public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    } 
}
