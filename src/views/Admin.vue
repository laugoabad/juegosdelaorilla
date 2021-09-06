<template>
    <div>
      <section  class="padd-top">
        <label for="pwd" class="texto-chico">Password : </label>
        <input type="password" id="pwd" name="pwd" v-model="pwd" class="texto-chico">
        <div v-if="contador === 0">
             <button type="button" @click="contador =+1" class="btn btn-primary texto-normal">Enviar</button> 
        </div>
        <template v-else>
            <div v-if = "pwd == 'luca$1909&clara$0505'">
                <button type="button" @click="mostrar = !mostrar" class="btn btn-primary texto-normal">Ver contactos</button>
                <section v-if = "mostrar">
                    <ul class="row d-flex justify-content-center">
                        <li v-for="(item, index) of form" :key="index" class="col-12 texto-chico" >
                            {{item.nombre}} - {{item.tel}} - {{item.email}} - {{item.mensaje}}
                        </li>
                    </ul>
                </section>   
                <button type="button" @click="limpiar" class="btn btn-primary texto-normal">Limpiar</button>
            </div>
            <template v-else>
                La clave es errónea
            </template>
        </template>
       </section>

    </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      passw: 'luca1909',
      pwd: '',
      contador: 0,
      form: [],
      mostrar: false
    }
  },

   mounted: function(){
    let datosDB = JSON.parse(localStorage.getItem('local-form'));
   
      if (datosDB === null) {
        this.form = []
      }else{
        this.form = datosDB;
        console.log('entra en else', this.form);
        
      }
  },
 

   methods: {
    limpiar() {
      this.form = [];
      localStorage.clear();
    },
  

  }
}

</script>

<style lang="scss" scoped>
@import "../../public/css/estilos.scss";
   .btn {
       margin: 2em;
       padding: 0.2em 1.4em
   }

   input {
       margin-left: 1em
   }

</style>