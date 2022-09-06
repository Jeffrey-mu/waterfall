<script setup lang="ts">
import _ from 'lodash'
import imgs from '~/composables/images.json'
const images = _.chunk(imgs, imgs.length / 3)
</script>

<template>
  <div flex="~ wrap" max-w="1480px" justify="center" ma class="wrapper">
    <div v-for="groupingImg, index in images" :key="index" max-w="33%">
      <div v-for="image in groupingImg" :key="image" m-1 rd overflow-hidden>
        <a-image width="100%" :src="`images/${image}`" />
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
  img {
    display: inline !important;
  }
  #app {
    background-image: url("bg.webp");
  }
</style>
