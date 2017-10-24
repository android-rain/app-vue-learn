<template>
  <div id="main">
    <!-- The navigation menu will get the value of the "active" variable as a class. -->
    <!-- To stops the page from jumping when a link is clicked 
        we use the "prevent" modifier (short for preventDefault). -->
    <nav v-bind:class="active" v-on:click.prevent>
      <!-- When a link in the menu is clicked, we call the makeActive method, 
        defined in the JavaScript Vue instance. It will change the value of "active". -->
      <router-link to="/" class="home" v-on:click.native="makeActive('home')">Home</router-link>
      <router-link to="/home/editor" class="editor" v-on:click.native="makeActive('editor')">Editor</router-link>
      <router-link to="/home/order" class="order" v-on:click.native="makeActive('order')">OrderForm</router-link>
      <router-link to="/home/search" class="search" v-on:click.native="makeActive('search')">Instant Search</router-link>
      <router-link to="/home/switchable" class="switchable" v-on:click.native="makeActive('switchable')">Switchable Grid</router-link>
    </nav>
    <!-- The mustache expression will be replaced with the value of "active".
         It will automatically update to reflect any changes. -->
    <p>You chose <b>{{active}}</b></p>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    makeActive: function(item) {
      this.active = item
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  margin: 0 auto;
}
/*-------------------------
    The menu
--------------------------*/

nav {
  display: inline-block;
  margin: 20px auto 45px;
  background-color: #5597b4;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
}

nav a {
  display: inline-block;
  padding: 18px 30px;
  color: #fff !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

nav a:first-child {
  border-radius: 2px 0 0 2px;
}

nav a:last-child {
  border-radius: 0 2px 2px 0;
}

nav.home .home,
nav.editor .editor,
nav.order .order,
nav.search .search,
nav.switchable .switchable {
  background-color: #e35885;
}

p {
  font-size: 22px;
  font-weight: bold;
  color: #7d9098;
}

p b {
  color: #ffffff;
  display: inline-block;
  padding: 5px 10px;
  background-color: #c4d7e0;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 18px;
}

#main {
  text-align: center;
}

</style>
