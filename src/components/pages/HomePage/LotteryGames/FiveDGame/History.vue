<script setup>
import IconNext from "@/components/icons/IconNext.vue";
import IconPrev from "@/components/icons/IconPrev.vue";

import { HistoryStatus } from "@/lib/consts";
import { ref } from "vue";
const historyStatus = ref(HistoryStatus["GAMEHISTORY"]);
const setHistoryStatus = (value) => {
  historyStatus.value = HistoryStatus[value];
};
</script>
<template>
  <div class="w-full flex z-[10] p-[0px_15px]">
    <div class="w-full flex z-[10] p-[0px]">
      <div
        class="w-full flex justify-center items-center gap-[10px] history_button"
      >
        <button
          @click="() => setHistoryStatus('GAMEHISTORY')"
          :class="{ selected_history: historyStatus === 'game_history' }"
        >
          <p>Game history</p>
        </button>
        <button
          @click="() => setHistoryStatus('CHARTHISTORY')"
          :class="{ selected_history: historyStatus === 'chart_history' }"
        >
          <p>Chart</p>
        </button>
        <button
          @click="() => setHistoryStatus('MYHISTORY')"
          :class="{ selected_history: historyStatus === 'my_history' }"
        >
          <p>My history</p>
        </button>
      </div>
    </div>
  </div>
  <div
    v-if="historyStatus === 'game_history'"
    class="w-full flex flex-col z-[10] p-[0px_15px] gap-[20px]"
  >
    <div
      class="w-full flex z-[10] p-[0px] flex flex-col justify-center items-center"
    >
      <div
        class="w-full grid grid-cols-12 history_table bg-blue text-white text-[14px] font-bold"
      >
        <div class="col-span-5">Period</div>
        <div class="col-span-5">Result</div>
        <div class="col-span-2">Total</div>
      </div>
      <div
        class="w-full grid grid-cols-12 bg-white font-bold mb-[3px] border-b border-b-black_2 fived_game_history"
      >
        <div class="col-span-5 flex justify-center items-center">
          20240527090551
        </div>
        <div class="col-span-5 flex justify-center items-center history_result">
          <div>0</div>
          <div>6</div>
          <div>2</div>
          <div>7</div>
          <div>1</div>
        </div>
        <div class="col-span-2 flex justify-center items-center history_result">
          <div class="bg-blue text-white !border-[0px]">30</div>
        </div>
      </div>
    </div>
    <div class="w-full flex z-[10] p-[0px_0px_45px]">
      <div
        class="w-full bg-white flex justify-center items-center page_navigation"
      >
        <button class="arrow_button"><IconPrev /></button>
        <p class="text-bold"><span>1</span>/<span>1712</span></p>
        <button class="arrow_button"><IconP /><IconNext /></button>
      </div>
    </div>
  </div>
  <div
    v-else-if="historyStatus === 'chat_history'"
    class="w-full z-[10] m-[0px_0px_45px] p-[0px_15px] flex flex-col justify-center items-center"
  >
    <div
      class="w-full flex flex-col justify-center items-center bg-white p-[50px]"
    >
      <img
        src="@/assets/empty-1b002050.png"
        alt="No Image"
        class="w-[80%] mx-auto"
      />
    </div>
  </div>
  <div
    v-else
    class="w-full z-[10] m-[0px_0px_45px] p-[0px_15px] flex flex-col justify-center items-center"
  >
    <div
      class="w-full flex flex-col justify-center items-center bg-white p-[50px]"
    >
      <img
        src="@/assets/empty-1b002050.png"
        alt="No Image"
        class="w-[80%] mx-auto"
      />
    </div>
  </div>
</template>

<style scoped>
.history_table {
  height: 42px;
  background: #4781ff;
  border-radius: 5px 5px 0 0;
  font-weight: 700;
  color: #fff;
}

.history_table div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.history_button button {
  width: calc((100% - 24px) / 3);
  height: 40px;
  background: #e8e7e8;
  border-radius: 8px;
  font-size: 12px;
  color: #333;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
}

.selected_history {
  background: -webkit-linear-gradient(
    324.57deg,
    #4ca6ff 12.38%,
    #7ddced 87.13%
  ) !important;
  background: linear-gradient(
    125.43deg,
    #4ca6ff 12.38%,
    #7ddced 87.13%
  ) !important;
  box-shadow: inset 0 -2.5px 5.5px #dbfaff !important;
  font-weight: 600;
  color: #fff !important;
}

.page_navigation {
  height: 76px;
  font-size: 18px;
  gap: 15px;
}

.arrow_button {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #4781ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fived_game_history {
  padding: 10px 0px;
  font-size: 14px;
}

.history_result {
  gap: 3px;
}

.history_result div {
  padding: 3px;
  border-radius: 50%;
  border-width: 1px;
  border-color: black;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 390px) {
  .history_button button {
    height: 30px;
    border-radius: 6px;
    font-size: 10px;
  }

  .page_navigation {
    height: 66px;
    font-size: 16px;
    gap: 15px;
  }

  .arrow_button {
    width: 30px;
    height: 30px;
    border-radius: 4px;
  }

  .fived_game_history {
    font-size: 12px;
  }
}

@media (max-width: 360px) {
  .history_button button {
    height: 30px;
    border-radius: 6px;
    font-size: 10px;
  }

  .page_navigation {
    height: 56px;
    font-size: 14px;
    gap: 8px;
  }

  .arrow_button {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }

  .fived_game_history {
    font-size: 10px;
  }
}
</style>
