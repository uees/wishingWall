<?php

namespace App\Http\Controllers;

use App\Wish;
use App\Http\Resources\WishResource;
use Illuminate\Http\Request;
use Jenssegers\Agent\Facades\Agent;


class WishController extends Controller
{
    // sort_by, order, q, page, per_page, fields, where
    public function index()
    {
        $query = Wish::query();

        $this->parseFields($query);
        $this->parseWhere($query, ['author', 'created_at']);

        if ($search = \request('q')) {
            $query->where(function ($query) use ($search) {
                $condition1 = queryCondition('author', $search);
                $condition2 = queryCondition('content', $search);

                $query->where($condition1)
                    ->orWhere($condition2);
            });
        }

        $pagination = $query->orderBy($this->sortBy(), $this->order())
            ->paginate($this->perPage())
            ->appends(request()->except('page'));

        return WishResource::collection($pagination);
    }


    public function store(Request $request)
    {
        $wish = new Wish();

        $wish->fill($request->only(['author', 'content']));

        // position
        $wish->position = [
            'left' => rand_float(),
            'top' => rand_float(),
        ];

        // user agent ip
        $wish->user_agent = Agent::getUserAgent();
        $wish->ip = $request->getClientIp();

        $wish->save();

        return WishResource::make($wish);
    }


    public function show($id)
    {
        $wish = Wish::findOrFail($id);

        return WishResource::make($wish);
    }


    public function update(Request $request, $id)
    {
        $wish = Wish::findOrFail($id);

        $this->authorize('update', $wish);

        $wish->fill($request->only(['author', 'content']));

        $wish->save();

        return WishResource::make($wish);
    }


    public function destroy($id)
    {
        $wish = Wish::findOrFail($id);

        $this->authorize('delete', $wish);

        if ($wish->delete()) {
            return $this->noContent();
        }

        return $this->failed('操作失败');
    }
}
