<template>
  <div class="texto-chico">
    Escaneá el codigo QR desde Mercado Pago
    <img :src="getImgUrl(mp)" alt="mp" class="imagen-mp" />
    <button
      class="btn btn-primary texto-xs px-4 py-2 mt-3"
      @click="pagar = !pagar; cantidad = 0;"
    >Volver</button>
  </div>
</template>