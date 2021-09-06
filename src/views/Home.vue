<template>
  <div>

    <div class="fondo">
      <div class="overlay"></div>
      <video playsinline autoplay muted loop allowfullscreen preload>
        <source :src="getImgUrl(estacion[1].imagen)" type="video/mp4" />
      </video>
      <!-- <div class="container-fluid h-100">
        <div class="d-flex justify-content-center align-items-center">
            <div class="titulo-home">AUA</div>
        </div>
      </div> -->
    </div>
     <figcaption>Thanks to PIXABAY for the video</figcaption>
    <tienda class="tienda"></tienda>
  </div>
</template>

<script>
import Tienda from "./Tienda.vue";

export default {
  name: "home",
  components: {
    Tienda
  },

  data() {
    return {
      estacion: [
        { imagen: "otono.mp4"},
        { imagen: "invierno.mp4"},
        { imagen: "primavera.mp4"},
        { imagen: "verano.mp4"}
      ],
      
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("./../assets/video/" + pic);
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../../public/css/estilos.scss";

.fondo {
  position: relative;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1em;
}

.fondo video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.fondo .container-fluid {
  position: relative;
  z-index: 2;
}

.titulo-home {
  font-family: 'Roboto', sans-serif;
  color: $rojo;
  font-size: 5.6em;
  font-weight: 800;
}

figcaption {
  font-size: 0.7em;
  padding-bottom: 0.8em;
}
.tienda {
  margin-top: -14em;
}


/*---------------------------------------------------------------------------*/
@media (min-width: 768px) {

  .fondo {
    height: 100vh;
}
  .titulo-home {
    font-size: 7em;
    letter-spacing: 0.3em;
  }

  figcaption {
    font-size: 1em;
  }
  .tienda {
      margin-top: -20em;
    }
}

/*---------------------------------------------------------------------------*/
@media (min-width: 1024px) {
  .titulo-home {
    font-size: 15em;
    margin-top: 2.4em;
  }
  figcaption {
    padding-bottom: 1.6em;
  }
  .tienda {
      margin-top: -22em;
    }
}

@media (min-width: 1440px) {
  .titulo-home {
    font-size: 20em;
   }
  figcaption {
    padding-bottom: 1.6em;
  }
  .tienda {
      margin-top: -22em;
    }
}

</style>