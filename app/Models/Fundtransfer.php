<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fundtransfer extends Model
{
    protected $fillable = [
        'transfer_id', 'transfered_id', 'user_id_from','amount','user_id_to','from_wallet','transfer_date','charge','netAmt',
    ];

      public function user()
    {
        return $this->belongsTo('App\Models\User', 'transfer_id');
    } 
      public function user_to()
    {
        return $this->belongsTo('App\Models\User', 'transfered_id');
    } 
}
