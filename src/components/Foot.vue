<template>
  <div>
    <footer class="foot">
      <div class="row">
        <div class="col-12 col-md-6">
          <div>
              <a href="mailto:aua.natura@gmail.com" class="datos">
                <img src="./../assets/img/email.png" alt="email" />
               {{mail}}
               </a>
          </div>
          <div class="datos">
            <img src="./../assets/img/smartphone.png" class="text-left" alt="cel" />
             {{tel}}
          </div>
          <div class="datos">
            <img src="./../assets/img/location.png" alt="location" />
          {{direccion}}
          </div>
        </div>
        <div class="col-12 col-md-6">
          <p >
            <a :href="instagram" target="blank" class="datos"><img src="./../assets/img/instagram.png" alt="instagram" />Instagram</a>
            <!-- <img src="./../assets/img/facebook.png" alt="face" /> -->
          
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "foot",
  data() {
    return {
      mail: "aua.natura@gmail.com",
      tel: "+54 9 11 5122 6486",
      direccion: "Vicente López | Buenos Aires | Argentina",
      instagram: "https://www.instagram.com/aua.natura/",
      facebook: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../public/css/estilos.scss";

footer {
  padding: 1.6em;
  border-top: 0.16em solid $grey;
  margin-bottom: 1em;
}

.datos, .datos a {
  color: black;
  font-size: 1.4em;
  float: left;
  clear: both;
  padding: 0.2em;
}
 img{
    width: 2.6em;
    padding-right: 1em;
  }

/*---------------------------------------------------------------------------*/
@media (min-width: 768px) {
  footer {
    padding: 1.8em;
  }

  .datos, .datos a{
    font-size: 1.8em;
    }
  
  img {
    width: 3.2em;
    padding-right: 1.2em;
   }
  }

</style>