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
        Schema::create('order', function (Blueprint $table) {
            $table->bigIncrements('order_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('order_status_id');
            $table->unsignedBigInteger('shipping_method_id');
            $table->decimal('total', 11, 2);
            $table->timestamps();

            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng users
            $table->foreign('order_status_id')->references('order_status_id')->on('order_status')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng order_statuses
            $table->foreign('shipping_method_id')->references('shipping_method_id')->on('shipping_method')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng shipping_methods

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order');
    }
};
