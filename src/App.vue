<template>
   <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/todolist">todo</router-link>
      <router-link to="/upload">upload</router-link>
      <router-link to="/user">user</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
