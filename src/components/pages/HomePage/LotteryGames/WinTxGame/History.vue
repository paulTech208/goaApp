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
  <div
    v-if="historyStatus === 'game_history'"
    class="w-full flex z-[10] p-[0px_15px] flex flex-col justify-center items-center"
  >
    <div
      class="w-full grid grid-cols-11 history_table bg-blue text-white font-bold"
    >
      <div class="col-span-4">Period</div>
      <div class="col-span-2">Number</div>
      <div class="col-span-2">Big Small</div>
      <div class="col-span-3">Color</div>
    </div>
    <div
      class="w-full grid grid-cols-11 bg-white font-bold wingo_history_table"
    >
      <div class="col-span-4 flex justify-center items-center">
        20240526011240
      </div>
      <div
        class="col-span-2 flex justify-center items-center font-bold text-green wingo_color_num"
      >
        3
      </div>
      <div class="col-span-2 flex justify-center items-center">Small</div>
      <div class="col-span-3 flex justify-center items-center">
        <div class="bg-green rounded-full wingo_color_symbol" />
      </div>
    </div>
    <div
      class="w-full grid grid-cols-11 bg-white font-bold wingo_history_table"
    >
      <div class="col-span-4 flex justify-center items-center">
        20240526011240
      </div>
      <div
        class="col-span-2 flex justify-center items-center font-bold text-green text-red wingo_color_num"
      >
        2
      </div>
      <div class="col-span-2 flex justify-center items-center">Small</div>
      <div class="col-span-3 flex justify-center items-center">
        <div class="bg-red rounded-full wingo_color_symbol" />
      </div>
    </div>
    <div
      class="w-full grid grid-cols-11 bg-white font-bold wingo_history_table"
    >
      <div class="col-span-4 flex justify-center items-center">
        20240526011240
      </div>
      <div
        class="col-span-2 flex justify-center items-center font-bold text-green number_0 wingo_color_num"
      >
        0
      </div>
      <div class="col-span-2 flex justify-center items-center">Small</div>
      <div class="col-span-3 flex justify-center items-center gap-[3px]">
        <div class="bg-red rounded-full wingo_color_symbol" />
        <div class="bg-purple rounded-full wingo_color_symbol" />
      </div>
    </div>
    <div
      class="w-full grid grid-cols-11 bg-white font-bold wingo_history_table"
    >
      <div class="col-span-4 flex justify-center items-center">
        20240526011240
      </div>
      <div
        class="col-span-2 flex justify-center items-center font-bold text-green wingo_color_num number_5"
      >
        5
      </div>
      <div class="col-span-2 flex justify-center items-center">Small</div>
      <div class="col-span-3 flex justify-center items-center gap-[3px]">
        <div class="bg-green rounded-full wingo_color_symbol" />
        <div class="bg-purple rounded-full wingo_color_symbol" />
      </div>
    </div>
    <div class="w-full flex z-[10] p-[20px_0px_45px]">
      <div
        class="w-full bg-white flex justify-center items-center page_navigation"
      >
        <button class="arrow_button"><IconPrev /></button>
        <p class="text-bold"><span>1</span>/<span>1712</span></p>
        <button class="arrow_button"><IconNext /></button>
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
<style>
.history_button button {
  width: calc((100% - 24px) / 3);
  height: 40px;
  background: #e8e7e8;
  border-radius: 8px;
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

.history_table {
  height: 42px;
  background: #4781ff;
  border-radius: 5px 5px 0 0;
  font-weight: 700;
  color: #fff;
  font-size: 14px;
}

.history_table div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wingo_history_table {
  font-size: 14px;
  margin-bottom: 3px;
  height: 43px;
}

.wingo_color_num {
  font-size: 24px;
}

.wingo_color_symbol {
  width: 8px;
  height: 8px;
}

.number_0 {
  background: -webkit-linear-gradient(top, #fd565c 50.96%, #b659fe 50.97%);
  background: linear-gradient(182deg, #fd565c 50.96%, #b659fe 50.97%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.number_5 {
  background: -webkit-linear-gradient(top, #40ad72 51.48%, #b659fe 51.49%);
  background: linear-gradient(180deg, #40ad72 51.48%, #b659fe 51.49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

.page_navigation {
  height: 76px;
  font-size: 18px;
  gap: 15px;
}

@media (max-width: 390px) {
  .history_button button {
    height: 35px;
    border-radius: 8px;
    font-size: 14px;
  }

  .history_table {
    height: 32px;
    border-radius: 4px 4px 0 0;
    font-size: 12px;
  }

  .wingo_history_table {
    font-size: 14px;
    height: 38px;
  }

  .wingo_color_num {
    font-size: 20px;
  }

  .wingo_color_symbol {
    width: 8px;
    height: 8px;
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
}
@media (max-width: 360px) {
  .history_button button {
    height: 30px;
    border-radius: 6px;
    font-size: 12px;
  }

  .history_table {
    height: 28px;
    border-radius: 4px 4px 0 0;
    font-size: 12px;
  }

  .wingo_history_table {
    font-size: 12px;
    height: 32px;
  }

  .wingo_color_num {
    font-size: 16px;
  }

  .wingo_color_symbol {
    width: 6px;
    height: 6px;
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
}
</style>
