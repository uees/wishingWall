<?php

use Illuminate\Http\Request;


Route::prefix('v1')->group(function () {
    Route::apiResource('wishes', 'WishController');
});
