<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;
    protected $table = 'product_category';
    protected $fillable = ['product_category_id','product_category_name','image','created_at','updated_at','deleted_at'];
    protected $primaryKey = 'product_category_id';
}
