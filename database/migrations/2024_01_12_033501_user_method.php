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
        Schema::create('user_payment', function (Blueprint $table) {
            $table->bigIncrements('payment_id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('payment_type_id');
            $table->string('card_name_hash', 130);
            $table->string('card_number_hash', 130);
            $table->date('expiration_date');
            $table->string('cvv_hash', 130);

            $table->timestamps();


            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng users
            $table->foreign('payment_type_id')->references('payment_type_id')->on('payment_type')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng payment_types
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_payment');
    }
};
