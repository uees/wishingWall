<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wish extends Model
{
    protected $fillable = [
        'author',
        'content',
        'user_agent',
        'ip',
        'position',
    ];

    protected $casts = [
        'position' => 'array',
    ];
}
