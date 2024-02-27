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
        Schema::create('user', function(Blueprint $table){
            $table->bigIncrements('user_id');
            $table->string('role');
            $table->string('username',25);
            $table->string('password',100);
            $table->string('email',50);
            $table->string('phonenumber',11);
            $table->string('avt_image',50);
            $table->string('first_name',20);
            $table->string('last_name',20);
            $table->timestamps();
 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExits('user');
    }
};
