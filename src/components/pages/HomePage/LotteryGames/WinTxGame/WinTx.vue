<script setup>
import GameListHeader from "@/components/pages/HomePage/GameList/GameListHeader.vue";
import WalletSection from "@/components/pages/HomePage/GameList/WalletSection.vue";
import NotificationBar from "@/components/pages/HomePage/NotificationBar.vue";
import BasicContent from "./BasicContent.vue";
import History from "./History.vue";
</script>

<template>
  <main>
    <div class="main-body">
      <GameListHeader />
      <div class="container relative bg-white_1">
        <div class="game_background" />
        <WalletSection />
        <NotificationBar />
        <BasicContent />
        <History />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.main-body {
  background-color: #f7f8ff;
  width: 400px;
  min-height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-y: auto;
  gap: 20px;
}

.game_background {
  width: 100%;
  height: 315px;
  background: #4784ff;
  border-radius: 0 0 1.53333rem 1.53333rem;
  position: absolute;
  top: 0;
  left: 0;
}

@media (max-width: 480px) {
  .main-body {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .container {
    margin-top: 40px;
    margin-bottom: 50px;
    overflow-y: auto;
  }
}

@media (max-width: 390px) {
  .container {
    gap: 15px;
  }
}

@media (max-width: 360px) {
  .container {
    gap: 10px;
  }
}
</style>
