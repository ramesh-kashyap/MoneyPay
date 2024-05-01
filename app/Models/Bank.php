<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_holder', 'bank_name', 'user_id','branch_name','account_no','ifsc_code','pancard_no'
    ];
    
}
