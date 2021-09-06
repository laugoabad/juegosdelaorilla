<template>
  <div>
    <section class="padd-top">
      <h1 class="titulo-seccion">NOSOTROS</h1>
      <div class="fondo">
        <p class="texto-grande questrial text-left"  style="white-space:pre-line;">{{texto}}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "nosotros",
  data() {
    return {
      texto:
        "AUA es un emprendimiento comprometido con el medio ambiente y la revalorización de los objetos hechos a mano.\n\nUsamos materiales naturales, reciclables y sustentables como la lana, el algodón y otras fibras naturales.\n\nNuestra revalorización de lo hecho a mano se traduce en el tiempo dedicado a cada objeto que lo transforma en un objeto con sentido, con alma."
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../public/css/estilos.scss";
.fondo {
  background-image: url("./../assets/img/hojas-r.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
p {
  margin: 0em auto;
  padding: 1em;
  background: rgba(255, 255, 255, 0.5);
}


/*---------------------------------------------------------------------------*/
@media (min-width: 768px) {
   p {
     padding: 3em;
   }
}
</style>
 