<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create admin user
        $admin = new User;
        $admin->fill([
            'name' => 'admin',
            'email' => 'admin@localhost',
            'password' => bcrypt('pwd1234'),
        ]);
        $admin->save();
    }
}
