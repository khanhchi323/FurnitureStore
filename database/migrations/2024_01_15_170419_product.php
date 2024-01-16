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
            $table->unsignedBigInteger('discount_id');
            $table->unsignedBigInteger('product_category_id');
            $table->unsignedBigInteger('product_status_id');
            $table->string('product_name',50);
            $table->string('decription',500);
            $table->decimal('price',11,2);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('discount_id')->references('discount_id')->on('discount')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('product_category_id')->references('product_category_id')->on('product_category')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('product_status_id')->references('product_status_id')->on('product_status')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');

    }
};