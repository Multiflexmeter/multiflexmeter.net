@extends('layouts.minimal')

@section('content')
@php the_post() @endphp

<img src="@asset('images/peilschaal.png')" alt="">

{!! get_the_posts_navigation() !!}
@endsection