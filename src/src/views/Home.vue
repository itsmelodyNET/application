<script setup>
  import Player from '../components/Player.vue'
</script>



<template>
  <Player />
  <div class="bg">
    <img src="../assets/albumArt.png" alt="">
  </div>
  <main>
    <img src="../assets/logo.svg" alt="Melody Logo SVG" class="logo">
    <div class="live">
      <div class="song">
        <img src="../assets/albumArt.png" alt="" class="album-art">
        <div class="song-info">
          <p class="song-title"></p>
          <p class="song-artist"></p>
        </div>
        
      </div>
      <div class="presenter">
        <div class="presenter-info">
          <p class="presenter-title"></p>
          <p class="presenter-artist"></p>
        </div>
        <img src="../assets/albumArt.png" alt="" class="presenter-photo">
      </div>
    </div>
    <div class="bottom">
      <div class="controls">
        <i class="fa-solid fa-heart like" id="like"></i> <i class="fa-solid fa-pause playpause" id="playpause"></i> <i class="fa-solid fa-bullhorn request" id="request"></i>
      </div>
      <input class="slider" type="range" min="0.01" max="1" step="0.001" value="0.25" id="volume" style="">
    </div>
  </main>
  
</template>
