<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referral extends Model
{
    protected $fillable = [
        'amount', 'level', 'remarks', 'user_id_fk', 'user_id','status','tdate',
    ];

      public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    } 
}
