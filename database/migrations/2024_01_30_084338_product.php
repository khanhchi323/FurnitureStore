<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product',function(Blueprint $table){
            $table->bigIncrements('product_id');
            $table->unsignedBigInteger('product_category_id');
            $table->string('product_name',50);
            $table->string('description',500);
            $table->string('image');
            $table->string('quantity',6);
            $table->decimal('price',11,2);
            $table->timestamps();
            $table->softDeletes();

            //khoa ngoai
            $table->foreign('product_category_id')->references('product_category_id')->on('product_category')->onDelete('cascade')->onUpdate('cascade');
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
