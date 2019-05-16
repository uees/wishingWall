<?php

namespace App\Policies;

use App\User;
use App\Wish;
use Illuminate\Auth\Access\HandlesAuthorization;

class WishPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function update(User $user, Wish $wish)
    {
        return $user->name == 'admin';
    }

    public function delete(User $user, Wish $wish)
    {
        return $user->name == 'admin';
    }
}
