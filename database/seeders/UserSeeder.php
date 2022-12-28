<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'      => 'Aulia Akbar Khoiruddin',
            'email'     => 'auliaakbark@mail.com',
            'password'  => bcrypt('akbar123')
        ]);
    }
}
