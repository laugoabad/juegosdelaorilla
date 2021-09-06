import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arreglo: [
      {
        imagenes: [
          "manta-3-1.jpg",
          "manta-3-2.jpg",
          "manta-3-3.jpg",
          "manta-3-4.jpg",
        ],
        descrCorta: "Manta pura lana",
        descrLarga:
          "Tejidas a mano en pura lana merino fina, muy suave. Mantienen tu calor sin agobiar y dejando respirar al cuerpo.\nEn stock color crudo.",
        precio: 9500,
      },
      {
        imagenes: [
          "manta-1-5.jpg",
          "manta-1-3.jpg",
          "manta-1-4.jpg",
          "manta-1-6.jpg",
          "manta-1-1.png",
          "manta-1-7.jpg",
          "manta-1-8.jpg",
        ],
        descrCorta: "Manta pura lana",
        descrLarga:
          "Manta tejida a mano en pura lana, suave y abrigada.\nMide 100 x 180cm y viene en color crudo, gris, visón claro y chocolate.\nLas hacemos en distintos puntos y en general en pares para usar en cama doble",
        precio: 9500,
      },
      {
        imagenes: ["manta-2-2.png", "manta-2-1.jpg", "manta-2-3.jpg"],
        descrCorta: "Manta pura lana baby Merino",
        descrLarga:
          "Manta tejida a mano en pura lana baby Merino, súper suave, esponjosa y abrigada.\nMide 100 x 180cm y viene sólo en color crudo",
        precio: 9500,
      },
      {
        imagenes: ["tote-1.jpeg", "tote-2.jpeg", "tote-3.jpeg", "tote-4.jpeg"],
        descrCorta: "Tote-Bag en hilo de algodón",
        descrLarga:
          "Bolso tejido a mano en algodón color gris.\nEntran muchísmas cosas y casi no ocupa espacio vacío. \nViene en varios colores",
        precio: 700,
      },
      {
        imagenes: [
          "bolso-pera-1.png",
          "bolso-pera-2.png",
          "bolso-pera-4.png",
          "bolso-pera-5.png",
        ],
        descrCorta: "Bolso bandolera",
        descrLarga:
          "Bolso tejido a mano súper práctico y canchero. \nViene en varias combinaciones de colores y también se puede hacer con la correa más corta.",
        precio: 750,
      },

      {
        imagenes: ["almohadon-1.png", "almohadon-2.png", "almohadon-3.png"],
        descrCorta: "Almohadón en vellón de lana",
        descrLarga:
          "Almohadón en pura lana, cómodo y calentito es ideal para agregar a las sillas de plástico.",
        precio: 2500,
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
