<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'product';
    protected $fillable = ['product_id', 'discount_id','product_category_id','product_status_id','product_name','color','description','image','quantity','price','created_at','updated_at','deleted_at'];
    protected $primaryKey = 'product_id';
}
