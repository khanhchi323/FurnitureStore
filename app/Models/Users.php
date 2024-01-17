<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Users extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'users';
    protected $fillable = ['user_id', 'role_id', 'username', 'password', 'email', 'phonenumber', 'avt_image', 'first_name', 'last_name', 'updated_at', 'created_at', 'deleted_at'];
    protected $primaryKey = 'user_id';
    protected $casts = [
        'password' => 'hashed',
    ];
}
