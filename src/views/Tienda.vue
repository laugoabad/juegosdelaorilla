<template>
  <div>
    <section v-if="!leerMas" class="padd-top">
      <h1 class="titulo-seccion">TIENDA</h1>
      <ul class="row d-flex justify-content-center">
        <li
          v-for="(item, index) of arreglo"
          :key="index"
          class="card col-12 col-lg-3"
          @click="checkLeerMas(index)"
        >
          <img :src="getImgUrl(item.imagenes[0])" alt="foto" class="card-img-top card-imagen" />
          <div class="card-body">
            <div class="row">
              <p class="font-italic texto-chico text-left col-8 p-2">{{item.descrCorta}}</p>
              <p class="font-weight-bold texto-normal text-right col-4 p-1">$ {{precioConPunto(index)}}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <template v-else >
      <div class="container padd-top">
        <article>
          <div class="row">
            <div class="col-12 col-md-4 pr-2">
              <div class="row">
                <img :src="getImgUrl(imagen)" class="col-12 imagen-principal" id="imagenDinamica" />
              </div>
              <ul class="row tira-fotos">
                <li v-for="(item3, indexfotos) of (arreglo[i].imagenes)" :key="indexfotos" class="col-3" @click="cambiarImagen(item3)">
                  <img :src="getImgUrl(item3)" alt="foto" class="imagen-secundaria" />
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-8 px-4">
              <div class="row">
                <div class="descr col-12 col-lg-7 mb-4 pr-4">
                  <div class="texto-normal font-italic p-1 text-left">{{arreglo[i].descrCorta}}</div>
                  <div class="texto-chico texto-gris text-left p-1"  style="white-space:pre-line;">{{arreglo[i].descrLarga}}</div>
                  <button class="btn btn-default mt-4 px-4 py-2 texto-chico d-flex" @click="leerMas = !leerMas; pagar = !pagar; cantidad = 0;" >
                    Volver
                  </button>
                </div>

                <div class="pago col-12 col-lg-5 pl-3">
                  <div class="texto-grande font-weight-bold text-left mb-3">$ {{precioConPunto(this.i)}}</div>
                  <div class="text-left texto-chico">Cantidad</div>
                  <select id="cantidad" v-model="cantidad" class="select d-flex mb-3">
                    <option disabled>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <div  class="total text-left texto-normal font-weight-bold mb-4">
                    Total = ${{subTotal}}
                  </div>
                    <button type="button" class="btn btn-primary texto-chico font-weight-bold px-4 py-2 d-flex" @click="checkPagar(subTotal)" data-toggle="modal"
                      data-target="#modalPagar" >
                      Pagar
                    </button>

                  <!-- Modal -->
                  <div class="modal fade" id="modalPagar" tabindex="-1" role="dialog" aria-labelledby="modalPagarLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content p-4">
                        <div class="modal-header">
                          <h5 class="modal-title" id="modalPagarLabel"><span class="texto-normal">Estás por Pagar :</span><br><span class="font-italic texto-normal">{{arreglo[i].descrCorta}}</span><span class="texto-normal"> por un importe de : </span><span class="font-italic font-weight-bold texto-normal">${{subTotal}}</span>
                          </h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body texto-chico mt-4">
                          Por favor, escribime a  
                          <a href="mailto:aua.natura@gmail.com" class="mail">
                             aua.natura@gmail.com
                           </a>
                           y te mando el código QR para hacer el pago y arreglar la entrega.
                        </div>
                        <!-- <img :src="getImgUrl(mp)" alt="mp" class="imagen-mp mt-4 mb-4" /> -->
                       
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary texto-chico px-3 py-1 mr-2 mt-3" data-dismiss="modal">Close</button>
                          <!-- <button type="button" class="btn btn-primary texto-chico px-3 py-1">Save changes</button> -->
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- -----modal end---- -->
               </div>
              </div>
            </div>

          </div>
        </article>
      </div>
    </template>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "tienda",
  data() {
    return {
      leerMas: false,
      pagar: false,
      imagen: "",
      cantidad: 0,
      ventas: [],
      mp: "Cobrar_MercadoPago-rr.png",
    };
  },

  beforeUpdate() {
    this.imagen = this.arreglo[this.i].imagenes[0];
  },

  computed: {
    ...mapState(['arreglo']),

    subTotal() {
      let precioFinal = 0;
      let precio = this.arreglo[this.i].precio;
      precioFinal = precio * this.cantidad;
      return this.thousands_separators(precioFinal);
    },
  
  },

  methods: {
    checkLeerMas(index) {
      this.leerMas = !this.leerMas;
      this.i = index;
    },
      precioConPunto(index) {
      let precio = this.arreglo[index].precio;
      return this.thousands_separators(precio);
    },

    checkPagar(valor) {
      this.pagar = !this.pagar;
      this.ventas.push(valor);
      console.log(this.ventas);
    },

    getImgUrl(pic) {
      return require("./../assets/img/" + pic);
    },

    cambiarImagen(foto) {
      document.getElementById(
        "imagenDinamica"
      ).src = require("./../assets/img/" + foto);
    },

  thousands_separators(num)  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return num_parts.join(".");
     },

  scrollToTop() {
     window.scrollTo(0,0);
    }   
  }
};
</script>

<style lang="scss" scoped>
@import "../../public/css/estilos.scss";
.container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.card {
  margin: 1em;
}

.card-text {
  font-size: 2em;
  padding: 1em;
}

.imagen-principal {
  width: 100%;
  height: 100%;
  margin: 2em auto;
}

.imagen-secundaria {
  width: 90%;
  height: auto;
  margin: 0.2em;
}

li:nth-child(1) .imagen-secundaria {
  margin-left: 0em;
}
li:nth-child(4) .imagen-secundaria {
  margin-right: 0em;
}
.select {
  width: 3.6em;
  height: 2.8em;
  font-size: 1.5em;
  background-color: $verde-claro;
  option {
    font-size: 1.2em;
  }
}
.imagen-mp {
  width: 30%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.modal-dialog {
  top: 20%;
  left: 10%;
  width: 80%;
}
.modal-content {
 border-radius: 2em;
}
.btn-default {
  border: 1px solid $grey;
}
.btn-primary {
  background-color: $verde-claro;
  color: $verde-oscuro;
  box-shadow: 5px 10px 8px $verde-oscuro 
}

.mail {
  color: blue;
  font-size: 1.4em;
  padding: 0.2em;
}

/*---------------------------------------------------------------------------*/
@media (min-width: 768px) {
  .select {
    width: 3.4em;
    height: 2.4em;
    font-size: 1.8em;
    option {
      font-size: 1em;
    }
  }
  .mail{
    font-size: 1em;
    }
}

/*---------------------------------------------------------------------------*/
@media (min-width: 1024px) {
  .modal-dialog {
    left: 20%;
  }
}
</style>