<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class WishResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => (int)$this->id,
            'author' => $this->author,
            'content' => $this->content,
            'user_agent' => $this->user_agent,
            'ip' => $this->ip,
            'position' => $this->position,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
