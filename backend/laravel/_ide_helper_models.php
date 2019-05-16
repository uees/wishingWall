<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App{
/**
 * App\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

namespace App{
/**
 * App\Wish
 *
 * @property int $id
 * @property string $author
 * @property string $content
 * @property string|null $user_agent
 * @property string|null $ip
 * @property array $position
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish whereAuthor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish whereContent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish whereIp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish wherePosition($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Wish whereUserAgent($value)
 */
	class Wish extends \Eloquent {}
}

