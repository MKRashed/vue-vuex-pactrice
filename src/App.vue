<template>
  <div id="nav" class="shadow-md mb-4">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/posts">Post</router-link> |
    <router-link to="/schedules">Schedule</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  computed:{
    colorCode:
    {
      get(){ 
        return this.$store.state.colorCode
      },
      set(newValue)
      {
         this.$store.dispatch('colorCode', newValue)
      }
    },
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
