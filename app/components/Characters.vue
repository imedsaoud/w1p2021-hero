<template>
  <transition name = "black">
    <div class="big-header">
      <h1>Choix du personnage</h1>
      <br/>
      <router-link class="button" to="/game/1">Thor</router-link>
      <router-link class="button" to="/game/1">Iron-Man</router-link>
    </div>
  </transition>
</template>

<script>
export default {

};
</script>

<style>
  .black-leave-active {
    animation: toBlack 3s ease reverse;
  }
  .black-enter-active {
    border: 3px solid red;
    animation: toBlack 3s ease;
  }

  @keyframes toBlack {
    to {
      opacity: 0;
    }
  }

  body {
    background-color: black;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
</style>
