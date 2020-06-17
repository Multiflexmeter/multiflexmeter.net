<!-- Header -->
<header class="relative border-b-1">
  <!-- Branding -->
  <div class="absolute h-full flex flex-row items-center px-4 py-3">
    <a href="{{ home_url('/') }}" class="h-full"><img src="@asset('images/logo-liggend.png')" alt="{{ get_bloginfo('name', 'display') }}" class="h-full"></a>
  </div>
  <!-- Navigation bar -->
  <div class="container mx-auto flex flex-row">
    <a href="#" class="nav-link">Sample page</a>
    <a href="#" class="nav-link">Sample page</a>
    <!-- Nested nav item -->
    <div class="has-submenu">
      <a href="#" class="nav-link">Sample page</a>
      <!-- Submenu -->
      <div class="submenu">
        <a href="#" class="nav-link">Sample page</a>
        <a href="#" class="nav-link">Sample page</a>
        <div class="has-submenu">
          <a href="#" class="nav-link">Sample page</a>
          <!-- Submenu -->
          <div class="submenu">
            <a href="#" class="nav-link">Sample page</a>
            <a href="#" class="nav-link">Sample page</a>
            <a href="#" class="nav-link">Sample page</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>