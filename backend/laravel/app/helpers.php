<?php

if (!function_exists('timerStop')) {
    /**
     * Returns the time it took LARAVEL_START
     *
     * @param int $precision
     * @return string
     */
    function timerStop($precision = 3)
    {
        defined('LARAVEL_START') or abort(500);
        $time_end = microtime(true);
        $time_total = $time_end - LARAVEL_START;
        return number_format($time_total, $precision);
    }
}

if (!function_exists('queryCondition')) {
    /**
     * @param string $filed
     * @param string $query_string
     * @return array
     */
    function queryCondition($filed, $query_string)
    {
        $keys = explode(' ', $query_string);

        $condition = [];
        foreach ($keys as $key) {
            if (!empty($key)) {
                array_push($condition, [$filed, 'like', "%{$key}%"]);
            }
        }

        return $condition;
    }
}

if (!function_exists('rand_float')) {
    function rand_float($min = 0, $max = 1)
    {
        return $min + abs($max - $min) * mt_rand(0, mt_getrandmax()) / mt_getrandmax();
    }
}
