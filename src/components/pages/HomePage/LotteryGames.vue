<template>
  <div class="gameitem">
    <div class="titlediv"><span class="title">Lottery</span></div>
    <div class="game_container">
      <button
        @click="() => $router.push('/home/lotterygames/wingo')"
        class="w-full flex justify-between items-center list_game"
      >
        <div class="flex flex-col justify-start items-start">
          <p class="game_name">Win go</p>
          <p class="game_explain">Guess Number</p>
          <p class="game_explain">Green/Red/Purple to win</p>
        </div>
        <img
          src="@/assets/lotterycategory_20230710190121isq8.png"
          class="game_avatar"
          alt="game_avatar"
        />
      </button>
      <button
        @click="() => $router.push('/home/lotterygames/k3')"
        class="w-full flex justify-between items-center list_game"
      >
        <div class="flex flex-col justify-start items-start">
          <p class="game_name">K3</p>
          <p class="game_explain">Guess Number</p>
          <p class="game_explain">Big/Small/Odd/Even</p>
        </div>
        <img
          src="@/assets/lotterycategory_202307102058012cme.png"
          class="game_avatar"
          alt="game_avatar"
        />
      </button>
      <button
        @click="() => $router.push('/home/lotterygames/5d')"
        class="w-full flex justify-between items-center list_game"
      >
        <div class="flex flex-col justify-start items-start">
          <p class="game_name">5D</p>
          <p class="game_explain">Guess Number</p>
          <p class="game_explain">Big/Small/Odd/Even</p>
        </div>
        <img
          src="@/assets/lotterycategory_20230710190102q9cj.png"
          class="game_avatar"
          alt="game_avatar"
        />
      </button>
      <button
        @click="() => $router.push('/home/lotterygames/wintx')"
        class="w-full flex justify-between items-center list_game"
      >
        <div class="flex flex-col justify-start items-start">
          <p class="game_name">Trx Win</p>
          <p class="game_explain">Guess Number</p>
          <p class="game_explain">Green/Red/Purple to win</p>
        </div>
        <img
          src="@/assets/lotterycategory_202307101901134yes.png"
          class="game_avatar"
          alt="game_avatar"
        />
      </button>
    </div>
  </div>
</template>

<script setup>

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

.game_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  gap: 10px;
}

.list_game {
  position: relative;
  width: 100%;
  height: 92px;
  text-align: end;
  background: -webkit-linear-gradient(
    325.68deg,
    #50a1f2 12.08%,
    #85daff 85.02%
  );
  background: linear-gradient(124.32deg, #50a1f2 12.08%, #85daff 85.02%);
  box-shadow: 0 -2px 6px #fff6f4 inset, 0 5px 9px 2px #d0d0ed5c;
  border-radius: 22px;
  color: white;
  padding: 0px 10px;
}

.list_game div {
  padding-left: 10px;
}

.game_avatar {
  height: 100%;
}

.game_name {
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 10px;
}

.game_explain {
  font-size: 12px;
  font-weight: 500;
}

@media (max-width: 390px) {
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

  .game_container {
    margin: 8px;
    gap: 8px;
  }

  .list_game {
    height: 85px;
    border-radius: 20px;
    padding: 0px 8px;
  }

  .list_game div {
    padding-left: 8px;
  }

  .game_name {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .game_explain {
    font-size: 10px;
  }
}

@media (max-width: 360px) {
  .gameitem {
    margin-top: 10px;
  }

  .title {
    font-size: 12px;
    margin-left: 3px;
  }

  .titlediv {
    margin-left: 6px;
    height: 14px;
  }

  .game_container {
    margin: 6px;
    gap: 6px;
  }

  .list_game {
    height: 70px;
    border-radius: 15px;
    padding: 0px 6px;
  }

  .list_game div {
    padding-left: 6px;
  }

  .game_name {
    font-size: 14px;
    margin-bottom: 6px;
  }

  .game_explain {
    font-size: 8px;
  }
}
</style>
