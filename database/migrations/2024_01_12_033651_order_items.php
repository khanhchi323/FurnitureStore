<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->bigIncrements('order_items_id');
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('product_id');
            $table->integer('quantity');
            $table->timestamps();

            $table->foreign('order_id')->references('order_id')->on('order')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng orders
            $table->foreign('product_id')->references('product_id')->on('product')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng products
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_items');
    }
};
