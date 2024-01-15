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
        Schema::create('product', function (Blueprint $table) {
            $table->bigIncrements('product_id');
            $table->string('name', 50);
            $table->text('description');
            $table->unsignedBigInteger('product_category_id');
            $table->decimal('price', 11, 2);
            $table->unsignedBigInteger('discount_id')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('product_category_id')->references('product_category_id')->on('product_category')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng product_categories
            $table->foreign('discount_id')->references('discount_id')->on('discount')->onDelete('cascade')->onUpdate('cascade'); // Thêm khóa ngoại đến bảng discounts

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
};
