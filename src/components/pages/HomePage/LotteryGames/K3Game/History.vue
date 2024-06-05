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
  <div class="w-full flex flex-col z-[10] p-[0px_15px] gap-[10px]">
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
    <div
      v-if="historyStatus === 'game_history'"
      class="w-full flex z-[10] p-[0px] flex flex-col justify-center items-center"
    >
      <div
        class="w-full grid grid-cols-12 history_table bg-blue text-white text-[14px] font-bold"
      >
        <div class="col-span-5">Period</div>
        <div class="col-span-2">sum</div>
        <div class="col-span-5">Result</div>
      </div>
      <div
        class="w-full grid grid-cols-12 bg-white font-bold mb-[3px] border-b border-b-black_2 k3_game_history"
      >
        <div class="col-span-4 flex justify-center items-center">
          20240527090551
        </div>
        <div class="col-span-1 flex justify-center items-center">5</div>
        <div class="col-span-2 flex justify-center items-center">Small</div>
        <div class="col-span-2 flex justify-center items-center">Odd</div>
        <div
          class="col-span-3 flex justify-center items-center k3_record gap-[10px]"
        >
          <div class="w-[22px] h-[22px] k3_dice1" />
          <div class="w-[22px] h-[22px] k3_dice3" />
          <div class="w-[22px] h-[22px] k3_dice5" />
        </div>
      </div>
      <div
        class="w-full grid grid-cols-12 bg-white font-bold mb-[3px] border-b border-b-black_2 k3_game_history"
      >
        <div class="col-span-4 flex justify-center items-center">
          20240527090551
        </div>
        <div class="col-span-1 flex justify-center items-center">5</div>
        <div class="col-span-2 flex justify-center items-center">Big</div>
        <div class="col-span-2 flex justify-center items-center">Even</div>
        <div class="col-span-3 flex justify-center items-center k3_record">
          <div class="w-[22px] h-[22px] k3_dice4" />
          <div class="w-[22px] h-[22px] k3_dice5" />
          <div class="w-[22px] h-[22px] k3_dice6" />
        </div>
      </div>
      <div
        class="w-full grid grid-cols-12 bg-white font-bold mb-[3px] border-b border-b-black_2 k3_game_history"
      >
        <div class="col-span-4 flex justify-center items-center">
          20240527090551
        </div>
        <div class="col-span-1 flex justify-center items-center">5</div>
        <div class="col-span-2 flex justify-center items-center">Small</div>
        <div class="col-span-2 flex justify-center items-center">Odd</div>
        <div class="col-span-3 flex justify-center items-center k3_record">
          <div class="w-[22px] h-[22px] k3_dice1" />
          <div class="w-[22px] h-[22px] k3_dice2" />
          <div class="w-[22px] h-[22px] k3_dice3" />
        </div>
      </div>
      <div class="w-full flex z-[10] p-[20px_0px_45px]">
        <div
          class="w-full bg-white flex justify-center items-center page_navigation"
        >
          <button class="arrow_button"><IconPrev /></button>
          <p class="text-bold text-black"><span>1</span>/<span>1712</span></p>
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
      class="w-full z-[10] m-[0px_0px_45px] flex flex-col justify-center items-center"
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
  </div>
</template>

<style>
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
  font-size: 16px;
  color: #333;
  text-align: center;
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

.k3_record {
  gap: 10px;
}

.k3_record div {
  width: 22px;
  height: 22px;
  background-repeat: no-repeat;
  background-size: 22px;
  background-position: center;
}

.k3_dice1 {
  background-image: url("@/assets/gamelist/dice_1.png");
}

.k3_dice2 {
  background-image: url("@/assets/gamelist/dice_2.png");
}

.k3_dice3 {
  background-image: url("@/assets/gamelist/dice_3.png");
}

.k3_dice4 {
  background-image: url("@/assets/gamelist/dice_4.png");
}

.k3_dice5 {
  background-image: url("@/assets/gamelist/dice_5.png");
}

.k3_dice6 {
  background-image: url("@/assets/gamelist/dice_6.png");
}

.k3_game_history {
  color: black;
  height: 43px;
  font-size: 14px;
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

@media (max-width: 390px) {
  .history_button button {
    height: 30px;
    border-radius: 6px;
    font-size: 14px;
  }

  .k3_game_history {
    height: 38px;
    font-size: 12px;
  }

  .k3_record {
    gap: 8px;
  }

  .k3_record div {
    width: 18px;
    height: 18px;
    background-size: 18px;
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

  .k3_game_history {
    height: 34px;
    font-size: 10px;
  }

  .k3_record {
    gap: 6px;
  }

  .k3_record div {
    width: 14px;
    height: 14px;
    background-size: 14px;
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
