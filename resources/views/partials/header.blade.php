<!-- Header -->
<header class="relative border-b-1">
  <!-- Branding -->
  <div class="branding md:absolute md:h-full flex flex-row items-center justify-between h-12">
    <a href="{{ home_url('/') }}" class="block h-6 pl-6">
      <img src="@asset('images/logo-liggend.png')" alt="{{ get_bloginfo('name', 'display') }}" class="h-full hidden md:block">
      <img src="@asset('images/logo-liggend-wit.png')" alt="{{ get_bloginfo('name', 'display') }}" class="h-full block md:hidden">
    </a>
    <button class="md:hidden block h-full px-4 py-3 collapse-button" data-collapse="nav.navbar"><img src="@asset('images/open-menu.png')" alt="Show menu" class="h-full"></button>
  </div>
  <!-- Navigation bar -->
  <nav class="navbar container">
    <!-- Left component -->
    <div class="md:flex flex-row">
      <a href="#" class="nav-link active">Home</a>
      <a href="#" class="nav-link">News</a>
      <div class="has-submenu">
        <a href="#" class="nav-link">Projects</a>
        <div class="submenu">
          <a href="#" class="nav-link">MFM V4</a>
          <a href="#" class="nav-link">EC-Sensor</a>
          <a href="#" class="nav-link">Discrete Level</a>
        </div>
      </div>
      <div class="has-submenu">
        <a href="#" class="nav-link">Contact</a>
        <div class="submenu">
          <a href="#" class="nav-link">Information</a>
          <a href="#" class="nav-link">Innovationcentrum</a>
          <a href="#" class="nav-link">Privacy</a>
        </div>
      </div>
    </div>
    <!-- Right component -->
    <div class="md:flex flex-row items-right">
      <div class="has-submenu">
        <a href="#" class="nav-link">Developers</a>
        <div class="submenu">
          <a href="#" class="nav-link">Documentation</a>
          <a href="#" class="nav-link">EC-Sensor</a>
          <a href="#" class="nav-link">Discrete Level</a>
        </div>
      </div>
    </div>
  </nav>
</header>