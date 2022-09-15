<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Notifications\Action;
use Illuminate\Support\Facades\DB;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('store_categorie')->insert([
            'categoryName' => "Zaika Biryani",
            'categoryImage' => "https://content.jdmagicbox.com/comp/siliguri/u4/9999px353.x353.121223143117.g6u4/catalogue/zaika-biryani-house-siliguri-ho-siliguri-home-delivery-restaurants-1uurw2u.jpg?clr=402626",
            'Action' => 1,
        ]);
    }
}
