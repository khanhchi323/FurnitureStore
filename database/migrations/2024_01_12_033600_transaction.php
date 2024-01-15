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
        Schema::create('transaction', function (Blueprint $table) {
            $table->bigIncrements('transaction_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('payment_id');
            $table->decimal('total_amount', 11, 2);
            $table->timestamps();

            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng users
            $table->foreign('order_id')->references('order_id')->on('order')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng orders
            $table->foreign('payment_id')->references('payment_id')->on('user_payment')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng user_payment

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transaction');
    }
};
