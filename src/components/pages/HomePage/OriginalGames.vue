<template>
    <div class="gameitem">
      <div class="titlediv"><span class="title">Mini games</span></div>
      <div class="game-grid">
        <div v-for="(miniGame, index) in miniGames" :key="index" class="game-box">
          <img :src="miniGame" alt="Game Image" class="game-image" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import miniGame1 from "@/assets/gamelist/800_20240126210752177.png";
  import miniGame2 from "@/assets/gamelist/801_20240126210759122.png";
  import miniGame3 from "@/assets/gamelist/802_20240126210806075.png";
  import miniGame4 from "@/assets/gamelist/803_20240126210813331.png";
  import miniGame5 from "@/assets/gamelist/100.png";
  import miniGame6 from "@/assets/gamelist/112_20240330121235753.png";
  import miniGame7 from "@/assets/gamelist/900.png";
  import miniGame8 from "@/assets/gamelist/110.png";
  import miniGame9 from "@/assets/gamelist/109.png";
  import miniGame10 from "@/assets/gamelist/107.png";
  import miniGame11 from "@/assets/gamelist/106.png";
  import miniGame12 from "@/assets/gamelist/105.png";
  import miniGame13 from "@/assets/gamelist/104_20240330121242706.png";
  import miniGame14 from "@/assets/gamelist/103.png";
  import miniGame15 from "@/assets/gamelist/102.png";
  import miniGame16 from "@/assets/gamelist/101.png";
  import miniGame17 from "@/assets/gamelist/22002.png";
  import miniGame18 from "@/assets/gamelist/22003.png";
  import miniGame19 from "@/assets/gamelist/22004.png";
  import miniGame20 from "@/assets/gamelist/22005.png";
  import miniGame21 from "@/assets/gamelist/22006.png";
  import miniGame22 from "@/assets/gamelist/22007.png";
  import miniGame23 from "@/assets/gamelist/22008.png";
  import miniGame24 from "@/assets/gamelist/197.png";
  import miniGame25 from "@/assets/gamelist/200.png";
  import miniGame26 from "@/assets/gamelist/224.png";
  import miniGame27 from "@/assets/gamelist/229.png";
  import miniGame28 from "@/assets/gamelist/232.png";
  import miniGame29 from "@/assets/gamelist/233.png";
  import miniGame30 from "@/assets/gamelist/236.png";
  import miniGame31 from "@/assets/gamelist/22001.png";

  
  const miniGames = [
    miniGame1,
    miniGame2,
    miniGame3,
    miniGame4,
    miniGame5,
    miniGame6,
    miniGame7,
    miniGame8,
    miniGame9,
    miniGame10,
    miniGame11,
    miniGame12,
    miniGame13,
    miniGame14,
    miniGame15,
    miniGame16,
    miniGame17,
    miniGame18,
    miniGame19,
    miniGame20,
    miniGame21,
    miniGame22,
    miniGame23,
    miniGame24,
    miniGame25,
    miniGame26,
    miniGame27,
    miniGame28,
    miniGame29,
    miniGame30,
    miniGame31,
  ];
  </script>
  
  <style scoped>
  .gameitem {
    margin-top: 20px;
  }
  
  .title {
    font-size: 16px;
    font-weight: 700;
    margin-left: 5px;
  }
  
  .titlediv {
    border-left: 3px solid #fa5d5d;
    margin-left: 10px;
    height: 18px;
    display: flex;
    align-items: center;
  }
  
  .game-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: space-between;
  }
  
  .game-box {
    height: 120px;
    margin: 5px;
    background: -webkit-linear-gradient(
      325.68deg,
      #50a1f2 12.08%,
      #85daff 85.02%
    );
    background: linear-gradient(124.32deg, #50a1f2 12.08%, #85daff 85.02%);
    box-shadow: 0 4px 8px 2px #d0d0ed5c, 0 -2px 4px #fff6f4 inset;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    width: 116px;
  }
  
  .game-image {
    width: 120px;
    height: 120px;
  }
  
  @media (max-width: 375px) {
    .gameitem {
      margin-top: 15px;
    }
  
    .title {
      font-size: 14px;
      margin-left: 4px;
    }
  
    .titlediv {
      margin-left: 8px;
      height: 16px;
    }
  
    .game-grid {
      margin: 8px;
    }
  
    .game-box {
      height: 100px;
      margin: 5px;
      width: 100px;
    }
  
    .game-image {
      width: 100px;
      height: 100px;
    }
  }
  </style>
  