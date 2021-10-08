<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="http://localhost:8080" target="_blank">
           Groupmania
        </a>
        <ul class="nav n./components/index.vueght">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/Home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/Login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/Signup">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>