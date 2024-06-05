<script setup>
  import IconPrev from '@/components/icons/IconPrev.vue'
</script>

<template>
  <div
    class="fixed flex justify-between items-center h-[50px] bg-blue p-[10px] z-[50] game_header"
  >
    <button @click="() => $router.push('/')" class="text-white">
      <IconPrev />
    </button>

    <img
      src="https://ossimg.goa999.vip//GoaGame/other/h5setting_20231005151012qocp.png"
      alt="Left Icon"
      class="navbar-left-icon"
    />
    <div class="flex gap-[10px]">
      <img
        src="@/assets/gamelist/avatar.png"
        alt="Left Icon"
        class="w-[26px] h-[26px]"
      />
      <img
        src="@/assets/gamelist/voice.png"
        alt="Left Icon"
        class="w-[26px] h-[26px]"
      />
    </div>
  </div>
</template>

<style scoped>

.navbar-left-icon {
  height: 46px;
}

.game_header {
  width: 400px;
}

@media (max-width: 480px) {
  .game_header {
    width: 100% !important;
  }
}
</style>
