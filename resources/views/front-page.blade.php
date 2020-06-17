@extends('layouts.app')

@section('content')
  @php the_post() @endphp

  <strong>hello world!</strong>

  {!! get_the_posts_navigation() !!}
@endsection
