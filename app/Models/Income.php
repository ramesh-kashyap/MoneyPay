<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory;


 protected $fillable = 
 [
    'user_id', 'user_id_fk', 'amt','comm','remarks','ttime','level','tleft','tright','rname','fullname','invest_id','updated_at','created_at','credit_type',
 ];


 public function user()
 {
     return $this->belongsTo('App\Models\User', 'user_id');
 } 

 
}
