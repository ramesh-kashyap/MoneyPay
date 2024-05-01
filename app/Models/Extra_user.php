<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Extra_user extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'withdraw_date', 'cycle','days',
    ];
    
    
        public function user()
        {
            return $this->belongsTo('App\Models\User', 'user_id');
        } 
    
}
