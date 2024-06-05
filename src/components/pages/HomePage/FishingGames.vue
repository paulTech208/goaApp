<template>
  <div class="gameitem">
    <div class="titlediv"><span class="title">Fishing</span></div>
    <div class="game-grid">
      <div v-for="(fishing, index) in fishings" :key="index" class="game-box">
        <img :src="fishing" alt="Game Image" class="game-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import fishing1 from "@/assets/gamelist/510.png";
import fishing2 from "@/assets/gamelist/AB3.png";
import fishing3 from "@/assets/gamelist/AT01.png";
import fishing4 from "@/assets/gamelist/AT05.png";
import fishing5 from "@/assets/gamelist/GO02.png";
import fishing6 from "@/assets/gamelist/67001.png";
import fishing7 from "@/assets/gamelist/7001.png";
import fishing8 from "@/assets/gamelist/7002.png";
import fishing9 from "@/assets/gamelist/7003.png";
import fishing10 from "@/assets/gamelist/7004.png";
import fishing11 from "@/assets/gamelist/7005.png";
import fishing12 from "@/assets/gamelist/7006.png";
import fishing13 from "@/assets/gamelist/7007.png";
import fishing14 from "@/assets/gamelist/1.png";
import fishing15 from "@/assets/gamelist/119.png";
import fishing16 from "@/assets/gamelist/20.png";
import fishing17 from "@/assets/gamelist/212.png";
import fishing18 from "@/assets/gamelist/32.png";
import fishing19 from "@/assets/gamelist/42.png";
import fishing20 from "@/assets/gamelist/60.png";
import fishing21 from "@/assets/gamelist/71.png";
import fishing22 from "@/assets/gamelist/74.png";
import fishing23 from "@/assets/gamelist/82.png";
import fishing24 from "@/assets/gamelist/289.png";
import fishing25 from "@/assets/gamelist/SFG_WDFuWaFishing.png";
import fishing26 from "@/assets/gamelist/SFG_WDGoldBlastFishing.png";
import fishing27 from "@/assets/gamelist/SFG_WDGoldenFortuneFishing.png";
import fishing28 from "@/assets/gamelist/SFG_WDGoldenFuwaFishing.png";
import fishing29 from "@/assets/gamelist/SFG_WDGoldenTyrantFishing.png";
import fishing30 from "@/assets/gamelist/SFG_WDMerryIslandFishing.png";

const fishings = [
  fishing1,
  fishing2,
  fishing3,
  fishing4,
  fishing5,
  fishing6,
  fishing7,
  fishing8,
  fishing9,
  fishing10,
  fishing11,
  fishing12,
  fishing13,
  fishing14,
  fishing15,
  fishing16,
  fishing17,
  fishing18,
  fishing19,
  fishing20,
  fishing21,
  fishing22,
  fishing23,
  fishing24,
  fishing25,
  fishing26,
  fishing27,
  fishing28,
  fishing29,
  fishing30,
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
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 116px;
}

.game-image {
  width: 120px;
  height: 120px;
  border-radius: 12px;
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
    border-radius: 10px;
  }
}
</style>
