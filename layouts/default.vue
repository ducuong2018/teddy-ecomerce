<template>
  <header class="h-16 px-1.5">
    <div class="h-full flex items-center justify-between">
      <div class="flex items-center">
        <button aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" class="icon"
            style="color: #f27082" width="30px" height="30px" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <a href="/" class="navbar-logo" aria-label="Nuxt Content" data-v-6245a7ea="">
          <img src="@assets/images/logo.svg" alt="logo" />
        </a>
      </div>
      <div>
        <form>
          <input class="search-form" type="search" placeholder="Search" />
        </form>
      </div>
    </div>
  </header>
  <slot />
  <footer></footer>
</template>
<style lang="scss" scoped>
header {
  background: #FFF;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}

.navbar-logo {
  height: 30px;
  width: 60px;
}

.search-form {
  width: 245px;
  height: 20px;
  background: #fffdfd;
  border: 0.5px solid #f27082;
  border-radius: 5px;
  text-indent: 5px;

}
</style>
