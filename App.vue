<template>
  <div id="app" class="container-fluid">
    <nav class="navbar-expand fixed-top">
       
      <div class="collapse navbar-collapse row">
         <router-link class="navbar-brand col-md-12 col-lg-3" to="/">
            <img src="./assets/img/aua.jpg" class="m-2" alt="hoja" />
         </router-link>
         <div class="navegacion">
        <ul class="navbar-nav ml-auto mr-auto text-center col-md-12 col-lg-9">
          <li v-for="(item, index) of arregloRouter" :key="index" class="nav-item">
            <router-link v-bind:to="item.ruta">{{item.nombre}}</router-link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
    <transition name="fade">
      <router-view />
    </transition>
    <div>
      <footer id="foot">
        <foot></foot>
      </footer>
    </div>
  </div>
</template>

<script>
import Foot from "./components/Foot.vue";

export default {
  name: "App",
  components: {
    Foot
  },
  data() {
    return {
      arregloRouter: [
        { nombre: "HOME", ruta: "/" },
        { nombre: "NOSOTROS", ruta: "/nosotros" },
        { nombre: "TIENDA", ruta: "/tienda" },
        { nombre: "CONTACTO", ruta: "/contacto" }
      ],
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../public/css/estilos.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 0.3em;
  background-color: white;
  a {
    color: $off-black;

    &.router-link-exact-active {
      color: $grey;
      text-decoration: none;
      font-weight: 800;
    }
  }

  .nav-item a {
    padding: 0.6em 0.6em 0.2em 0.6em;
    margin: 1em 0.16em 0.16em 0.16em;
    font-size: 1.1em;
    letter-spacing: 0.2em;
  }
  .nav-item a:hover {
    text-decoration: none;
    border-top: 1px solid $grey;
    border-bottom: 1px solid $grey;
  }
}
.logo {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 10em;
  font-weight: 200
}
.logo-sub {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2em;
}

.navbar-brand img {
  width: 17em;
}
.navegacion {
  margin: 0.5em auto;
}

.fade-enter-active, .fade-leave-active {
   transition: opacity 1s;
   transition-timing-function: ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity :0;
}

/*-------------------------------------------------------------*/
@media (min-width: 768px) {
  .navbar-brand img {
    width: 19em;
  }

  nav {
    padding: 0.8em;
    letter-spacing: 0.3em;
    .nav-item a {
      font-size: 1.6em;
      letter-spacing: 0.3em;
      padding: 0.5em 1.4em 0.4em 1.4em;
    }
  }
  .navegacion {
    margin: 1em auto;
  }
}

/*------------------------------------------------------------------------------*/
@media (min-width: 1440px) {
  .navbar-brand img {
    width: 20em;
  }
}
</style>
