<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WishRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'author' => 'required|max:64',
            'content' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'author.required' => '姓名字段必填',
            'content.required' => '内容字段必填',
        ];
    }
}
