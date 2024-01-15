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
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('user_id');
            $table->unsignedBigInteger('role_id');
            $table->string('username', 50);
            $table->string('password', 130);
            $table->string('email')->unique();
            $table->string('avt_image', 50);
            $table->string('first_name', 20);
            $table->string('last_name', 20);
            $table->string('phonenumber', 11);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('role_id')->references('role_id')->on('role')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
