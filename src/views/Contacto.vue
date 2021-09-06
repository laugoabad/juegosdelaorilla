<template>
  <div>
    <section class="padd-top w-75">
      <h1 class="titulo-seccion">CONTACTO</h1>

      <form
        @submit.prevent="agregarContacto()"
        name="contacto"
        method="post"
        netlify
        netlify-honeypot="bot-field"
        class=" ml-auto mr-auto"
      >
        <input type="hidden" name="form-name" value="contacto" />
        <div class="form-row">
          <div class="form-group col-lg-6">
            <label for="nombre" class="texto-chico">Nombre y Apellido</label>
            <input type="text" v-model="form.nombre" class="form-control texto-chico" id="nombre" name="nombre" />
          </div>
          <div class="form-group col-lg-6">
            <label for="email" class="texto-chico">Email</label>
            <input type="email" v-model="form.email" class="form-control texto-chico" id="email" name="email" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-lg-6">
            <label for="telefono" class="texto-chico">Teléfono</label>
            <input type="text" v-model="form.tel" class="form-control texto-chico" id="telefono" name="telefono" />
          </div>
        </div>

        <!--<div class="form-group col-md-6">
            <label for="direccion" class="texto-chico">Dirección</label>
            <input type="text" v-model="form.dire" class="form-control" id="direccion" name="direccion" />
          </div> 
        </div>

         <div class="form-row">
          <div class="form-group col-md-6">
            <label for="ciudad" class="texto-chico">Ciudad</label>
            <input
              type="text"
              @input="updateForm('ciudad', $event.target.value)"
              :value="form.ciudad"
              class="form-control"
              id="ciudad"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="provincia" class="texto-chico">Provincia</label>
            <select
              id="provincia"
              @change="updateForm('provincia', $event.target.value)"
              class="form-control"
            >
              <option selected>Elije...</option>
              <option value="caba" :selected="form.provincia === 'caba'">Ciudad de Buenos Aires</option>
              <option value="buenosAires" :selected="form.provincia === 'buenosAires'">Buenos Aires</option>
              <option value="catamarca" :selected="form.provincia === 'catamarca'">Catamarca</option>
              <option value="chaco" :selected="form.provincia === 'chaco'">Chaco</option>
              <option value="chubut" :selected="form.provincia === 'chubut'">Chubut</option>
              <option value="cordoba" :selected="form.provincia === 'cordoba'">Cordoba</option>
              <option value="corrientes" :selected="form.provincia === 'corrientes'">Corrientes</option>
              <option value="entreRios" :selected="form.provincia === 'entreRios'">Entre Rios</option>
              <option value="formosa" :selected="form.provincia === 'formosa'">Formosa</option>
              <option value="jujuy" :selected="form.provincia === 'jujuy'">Jujuy</option>
              <option value="laPampa" :selected="form.provincia === 'laPampa'">La Pampa</option>
              <option value="laRioja" :selected="form.provincia === 'laRioja'">La Rioja</option>
              <option value="mendoza" :selected="form.provincia === 'mendoza'">Mendoza</option>
              <option value="misiones" :selected="form.provincia === 'misiones'">Misiones</option>
              <option value="neuquen" :selected="form.provincia === 'neuquen'">Neuquen</option>
              <option value="rioNegro" :selected="form.provincia === 'rioNegro'">Rio Negro</option>
              <option value="salta" :selected="form.provincia === 'salta'">Salta</option>
              <option value="sanJuan" :selected="form.provincia === 'sanJuan'">San Juan</option>
              <option value="sanLuis" :selected="form.provincia === 'sanLuis'">San Luis</option>
              <option value="santaCruz" :selected="form.provincia === 'santaCruz'">Santa Cruz</option>
              <option value="santaFe" :selected="form.provincia === 'santafe'">Santa Fe</option>
              <option value="santiago" :selected="form.provincia === 'santiago'">Santiago</option>
              <option
                value="tierraFuego"
                :selected="form.provincia === 'tierraFuego'"
              >Tierra del Fuego</option>
              <option value="tucuman" :selected="form.provincia === 'tucuman'">Tucuman</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="codigo" class="texto-chico">Codigo Postal</label>
            <input
              type="text"
              @input="updateForm('codigo', $event.target.value)"
              :value="form.codigo"
              class="form-control"
              id="codigo"
            />
          </div>
        </div>--> 
         <div class="form-group">
          <label for="mensaje" class="texto-chico">Comentario:</label>
          <textarea v-model="form.mensaje" class="form-control texto-chico" rows="5" id="mensaje" name="mensaje"></textarea>
        </div>

        <button type="submit" class="btn btn-primary texto-normal">Enviar</button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "contacto",
  data() {
    return {
      form: {
        nombre: "",
        email: "",
        tel: "",
      },

      nuevaEntrada: {}
    };
  },

  methods: {
    // updateForm(input, value) {
    //   this.nuevaEntrada[input] = value;
    // },

    encode(data) {
      console.log("data", data);
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

    agregarContacto() {
      this.form.push(this.nuevaEntrada);
      localStorage.setItem("local-form", JSON.stringify(this.form));

      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      let datos = this.encode({ "form-name": "contacto", ...this.form });

      axios.post("/contacto", datos, axiosConfig)
      .then(() => {
        this.$router.push('thanks')
      })
      .catch(() => {
        this.$router.push('404')
      })

      this.form.nombre = "";
      this.form.email = "";
      this.form.tel = "";
    }
  },

  created: function() {
    let datosDB = JSON.parse(localStorage.getItem("local-form"));
    if (datosDB === null) {
      this.form = [];
    } else {
      this.form = datosDB;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../public/css/estilos.scss";
.btn {
  padding: 0.5em 1.6em;
  margin-top: 2em;
}
.form-group {
  padding: 1em;
}
option,
select {
  font-size: 1.2em;
}
</style>