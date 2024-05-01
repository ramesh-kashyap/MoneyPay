<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'category', 'user_id_fk', 'user_id','status','msg','gen_date','closing_date','ticket_no','reply_by',
    ];

      public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}
