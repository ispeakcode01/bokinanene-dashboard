<template>
  <div id="app" class="container">
    <div class="nav">
      <router-link class="p-80 bg-gray-500" to="/">Home</router-link
      >|<router-link to="/about">About</router-link>
    </div>
    <router-view />
    <footer class="absolute bottom-0 flex justify-center bg-gray-400 w-screen">
      <div>Footer</div>
    </footer>
  </div>
</template>
