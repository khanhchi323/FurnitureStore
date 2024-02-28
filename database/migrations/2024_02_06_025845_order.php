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
        Schema::create('order',function(Blueprint $table){
            $table->bigIncrements('order_id');
            $table->unsignedBigInteger('user_id');
            $table->string('order_status');
            $table->string('shipping_method');
            $table->decimal('total',11,2);
            $table->timestamps();


            //khoa ngoai
            $table->foreign('user_id')->references('user_id')->on('user')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExits('order');
    }
};
