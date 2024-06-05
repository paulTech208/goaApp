<script setup>
import { ClockStatus, AmountStatus } from "@/lib/consts";

import { ref } from "vue";
const clockStatus = ref(ClockStatus["ONEMIN"]);
const setClockStatus = (value) => {
  clockStatus.value = ClockStatus[value];
};
</script>

<template>
  <div class="w-full flex z-[10] p-[0px_15px]">
    <div
      class="w-full flex justify-center items-center p-[3px] bg-white rounded-[10px] white_shadow"
    >
      <div v-if="clockStatus === 'one_min'">
        <button
          @click="() => setClockStatus('ONEMIN')"
          class="flex flex-col justify-center items-start p-[3px_8px] active_clock"
        >
          <img
            src="@/assets/gamelist/time_active.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1"
          />
          <p
            class="w-full text-center text-[12px] xs:text-[14px] leading-[100%] text-black_1"
          >
            5D Lotre <br />
            1Min
          </p>
        </button>
      </div>
      <div v-else>
        <button
          @click="() => setClockStatus('ONEMIN')"
          class="flex flex-col justify-center items-start p-[3px_8px]"
        >
          <img
            src="@/assets/gamelist/time_none.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1"
          />
          <p
            class="w-full text-center text-[12px] xs:text-[14px] leading-[100%] text-black_1"
          >
            5D Lotre <br />
            1Min
          </p>
        </button>
      </div>
      <div v-if="clockStatus === 'three_min'">
        <button
          @click="() => setClockStatus('THREEMIN')"
          class="flex flex-col justify-center items-start p-[3px_8px] active_clock"
        >
          <img
            src="@/assets/gamelist/time_active.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1"
          />
          <p
            class="w-full text-center text-[12px] xs:text-[14px] leading-[100%] text-black_1"
          >
            5D Lotre <br />
            3Min
          </p>
        </button>
      </div>
      <div v-else>
        <button
          @click="() => setClockStatus('THREEMIN')"
          class="flex flex-col justify-center items-start p-[3px_8px]"
        >
          <img
            src="@/assets/gamelist/time_none.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1"
          />
          <p
            class="w-full text-center text-[12px] xs:text-[14px] leading-[100%] text-black_1"
          >
            5D Lotre <br />
            3Min
          </p>
        </button>
      </div>
      <div v-if="clockStatus === 'five_min'">
        <button
          @click="() => setClockStatus('FIVEMIN')"
          class="flex flex-col justify-center items-start p-[3px_8px] active_clock"
        >
          <img
            src="@/assets/gamelist/time_active.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1"
          />
          <p
            class="w-full text-center text-[12px] xs:text-[14px] leading-[100%] text-black_1"
          >
            5D Lotre <br />
            5Min
          </p>
        </button>
      </div>
      <div v-else>
        <button
          @click="() => setClockStatus('FIVEMIN')"
          class="flex flex-col justify-center items-start p-[3px_8px]"
        >
          <img
            src="@/assets/gamelist/time_none.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1"
          />
          <p
            class="w-full text-center text-[12px] xs:text-[14px] leading-[100%] text-black_1"
          >
            5D Lotre <br />
            5Min
          </p>
        </button>
      </div>
      <div v-if="clockStatus === 'ten_min'">
        <button
          @click="() => setClockStatus('TENMIN')"
          class="flex flex-col justify-center items-start p-[3px_8px] active_clock"
        >
          <img
            src="@/assets/gamelist/time_active.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1"
          />
          <p
            class="w-full text-center text-[12px] xs:text-[14px] leading-[100%] text-black_1"
          >
            5D Lotre <br />
            10Min
          </p>
        </button>
      </div>
      <div v-else>
        <button
          @click="() => setClockStatus('TENMIN')"
          class="flex flex-col justify-center items-start p-[3px_8px]"
        >
          <img
            src="@/assets/gamelist/time_none.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1"
          />
          <p
            class="w-full text-center text-[12px] xs:text-[14px] leading-[100%] text-black_1"
          >
            5D Lotre <br />
            10Min
          </p>
        </button>
      </div>
    </div>
  </div>
  <div class="w-full flex z-[10] p-[0px_15px]">
    <div
      class="w-full flex justify-center items-center bg-white p-[10px_15px] rounded-[15px] white_shadow fived_lottery_result"
    >
      <p class="text-black_3">
        Lottrey <br />
        result
      </p>
      <div class="flex justify-center items-start gap-[10px]">
        <div class="flex flex-col justify-center items-center">
          <div class="circle_num">0</div>
          <p class="text-black_1">A</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="circle_num">9</div>
          <p class="text-black_1">B</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="circle_num">4</div>
          <p class="text-black_1">C</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="circle_num">9</div>
          <p class="text-black_1">D</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="circle_num">0</div>
          <p class="text-black_1">E</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="circle_num !bg-white !border-none !w-auto">=</div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="circle_num !bg-blue !border-blue !text-white">22</div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex z-[10] p-[0px_15px]">
    <div
      class="w-full flex flex-col justify-center items-center gap-[20px] bg-white rounded-[15px]"
    >
      <div class="w-full p-[0px_15px] flex justify-between items-center">
        <div
          class="w-full flex flex-col justify-center items-start gap-[5px] px-[5px]"
        >
          <div
            class="w-full flex justify-start items-center fived_how_play_period"
          >
            <p class="text-black_3">Period</p>
            <button
              class="w-full border border-blue rounded-full flex justify-center items-center"
            >
              <img src="@/assets/gamelist/blue_wallet.png" alt="Left Icon" />
              <p class="text-blue font-[500]">How to play</p>
            </button>
          </div>
          <p class="text-black font-[700] mx-[5px] fived_how_play_result">
            20240527090123
          </p>
        </div>
        <div class="w-full flex flex-col justify-center items-end gap-[5px]">
          <p class="text-black_1 font-[400] fived_time_remain">
            Time remaining
          </p>
          <div class="flex jusitfy-between items-center gap-[5px] k3time_count">
            <div>0</div>
            <div>0</div>
            <div>:</div>
            <div>0</div>
            <div>0</div>
          </div>
        </div>
      </div>
      <div class="w-full p-[0px_15px] flex">
        <div
          class="w-full p-[0px_15px] flex justify-between items-center fived_run_screen"
        >
          <div
            class="w-full gird gird-cols-5 justify-between items-center fived_run_box"
          >
            <div class="fived_slot_column">
              <div class="fived_slot_transfrom transform4">
                <div class="fived_solt_num fived_slot_first">0</div>
                <div class="fived_solt_num fived_slot_first">1</div>
                <div class="fived_solt_num fived_slot_first">2</div>
                <div class="fived_solt_num fived_slot_first">3</div>
                <div class="fived_solt_num fived_slot_first">4</div>
                <div class="fived_solt_num fived_slot_first">5</div>
                <div class="fived_solt_num fived_slot_first">6</div>
                <div class="fived_solt_num fived_slot_first">7</div>
                <div class="fived_solt_num fived_slot_first">8</div>
                <div class="fived_solt_num fived_slot_first">9</div>
                <div class="fived_solt_num fived_slot_first">0</div>
                <div class="fived_solt_num fived_slot_first">1</div>
                <div class="fived_solt_num fived_slot_first">2</div>
                <div class="fived_solt_num fived_slot_first">3</div>
                <div class="fived_solt_num fived_slot_first">4</div>
                <div class="fived_solt_num fived_slot_first">5</div>
                <div class="fived_solt_num fived_slot_first">6</div>
                <div class="fived_solt_num fived_slot_first">7</div>
                <div class="fived_solt_num fived_slot_first">8</div>
                <div class="fived_solt_num fived_slot_first">9</div>
              </div>
            </div>
            <div class="fived_slot_column">
              <div class="fived_slot_transfrom transform4">
                <div class="fived_solt_num">0</div>
                <div class="fived_solt_num">1</div>
                <div class="fived_solt_num">2</div>
                <div class="fived_solt_num">3</div>
                <div class="fived_solt_num">4</div>
                <div class="fived_solt_num">5</div>
                <div class="fived_solt_num">6</div>
                <div class="fived_solt_num">7</div>
                <div class="fived_solt_num">8</div>
                <div class="fived_solt_num">9</div>
                <div class="fived_solt_num">0</div>
                <div class="fived_solt_num">1</div>
                <div class="fived_solt_num">2</div>
                <div class="fived_solt_num">3</div>
                <div class="fived_solt_num">4</div>
                <div class="fived_solt_num">5</div>
                <div class="fived_solt_num">6</div>
                <div class="fived_solt_num">7</div>
                <div class="fived_solt_num">8</div>
                <div class="fived_solt_num">9</div>
              </div>
            </div>
            <div class="fived_slot_column">
              <div class="fived_slot_transfrom transform4">
                <div class="fived_solt_num">0</div>
                <div class="fived_solt_num">1</div>
                <div class="fived_solt_num">2</div>
                <div class="fived_solt_num">3</div>
                <div class="fived_solt_num">4</div>
                <div class="fived_solt_num">5</div>
                <div class="fived_solt_num">6</div>
                <div class="fived_solt_num">7</div>
                <div class="fived_solt_num">8</div>
                <div class="fived_solt_num">9</div>
                <div class="fived_solt_num">0</div>
                <div class="fived_solt_num">1</div>
                <div class="fived_solt_num">2</div>
                <div class="fived_solt_num">3</div>
                <div class="fived_solt_num">4</div>
                <div class="fived_solt_num">5</div>
                <div class="fived_solt_num">6</div>
                <div class="fived_solt_num">7</div>
                <div class="fived_solt_num">8</div>
                <div class="fived_solt_num">9</div>
              </div>
            </div>
            <div class="fived_slot_column">
              <div class="fived_slot_transfrom transform4">
                <div class="fived_solt_num">0</div>
                <div class="fived_solt_num">1</div>
                <div class="fived_solt_num">2</div>
                <div class="fived_solt_num">3</div>
                <div class="fived_solt_num">4</div>
                <div class="fived_solt_num">5</div>
                <div class="fived_solt_num">6</div>
                <div class="fived_solt_num">7</div>
                <div class="fived_solt_num">8</div>
                <div class="fived_solt_num">9</div>
                <div class="fived_solt_num">0</div>
                <div class="fived_solt_num">1</div>
                <div class="fived_solt_num">2</div>
                <div class="fived_solt_num">3</div>
                <div class="fived_solt_num">4</div>
                <div class="fived_solt_num">5</div>
                <div class="fived_solt_num">6</div>
                <div class="fived_solt_num">7</div>
                <div class="fived_solt_num">8</div>
                <div class="fived_solt_num">9</div>
              </div>
            </div>
            <div class="fived_slot_column">
              <div class="fived_slot_transfrom transform4">
                <div class="fived_solt_num">0</div>
                <div class="fived_solt_num">1</div>
                <div class="fived_solt_num">2</div>
                <div class="fived_solt_num">3</div>
                <div class="fived_solt_num">4</div>
                <div class="fived_solt_num">5</div>
                <div class="fived_solt_num">6</div>
                <div class="fived_solt_num">7</div>
                <div class="fived_solt_num">8</div>
                <div class="fived_solt_num">9</div>
                <div class="fived_solt_num">0</div>
                <div class="fived_solt_num">1</div>
                <div class="fived_solt_num">2</div>
                <div class="fived_solt_num">3</div>
                <div class="fived_solt_num">4</div>
                <div class="fived_solt_num">5</div>
                <div class="fived_solt_num">6</div>
                <div class="fived_solt_num">7</div>
                <div class="fived_solt_num">8</div>
                <div class="fived_solt_num">9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full rounded-[15px] p-[0px_15px] flex flex-col justify-center items-center gap-[20px]"
      >
        <div class="w-full flex jusitfy-between items-center">
          <div>A</div>
          <div>B</div>
          <div>C</div>
          <div>D</div>
          <div>E</div>
          <div>SUM</div>
        </div>
        <div>This is sum section</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active_clock {
  background: -webkit-linear-gradient(
    top,
    #4da6ff 0%,
    rgba(127, 220, 237, 0.5) 100%
  );
  background: linear-gradient(
    180deg,
    #4da6ff 0%,
    rgba(127, 220, 237, 0.5) 100%
  );
  box-shadow: inset 0 -0.02667rem 0.08rem #dbfaff,
    inset 0 0.02667rem 0.08rem #dbfaff;
  border-radius: 0.26667rem;
  color: white !important;
}

.fived_lottery_result {
  gap: 20px;
}

.fived_lottery_result p {
  font-size: 14px;
}

.fived_how_play_period {
  gap: 15px;
  margin-top: 15px;
}

.fived_how_play_period p {
  font-size: 14px;
}

.fived_how_play_period button {
  max-width: 80%;
  gap: 5px;
}

.fived_how_play_period img {
  width: 20px;
  height: 20px;
}

.fived_how_play_result {
  font-size: 22px;
}

.fived_time_remain {
  font-size: 14px;
}

.circle_num {
  height: 36px;
  width: 36px;
  background: #f4f4f4;
  border: 1px solid #000000;
  font-size: 14px;
  color: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.k3time_count div {
  background-color: #efeff4;
  color: #4784ff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  padding: 1px 4.5px;
}

.white_shadow {
  box-shadow: 0 10px 20px #c5c5da40;
}

.fived_run_screen {
  height: 130px;
  background: #00b977;
  border-radius: 8px;
  position: relative;
  padding: 9px;
}

.fived_run_screen::before {
  background: #008b59;
  border-radius: 5px 0 0 5px;
  left: -5px;
  content: "";
  display: block;
  width: 5.5px;
  height: 30px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 0;
}

.fived_run_screen::after {
  background: #008b59;
  border-radius: 0 5px 5px 0;
  right: -5px;
  content: "";
  display: block;
  width: 5.5px;
  height: 30px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 0;
}

.fived_run_box {
  background: #003c26;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 6px;
}

.fived_run_box::before {
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-right: 22px solid transparent;
  border-left: 22px solid #00b977;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  content: "";
  z-index: 3;
}

.fived_run_box::after {
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-left: 22px solid transparent;
  border-right: 22px solid #00b977;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  content: "";
  z-index: 3;
}

.fived_slot_column {
  display: inline-block;
  height: 100%;
  border-radius: 4.5px;
  overflow: hidden;
  background: #333;
  vertical-align: bottom;
  position: relative;
  text-align: center;
}

.fived_slot_transfrom {
  -webkit-transform: translateY(-100px);
  transform: translateY(-100px);
}

.fived_solt_num {
  width: 56px;
  height: 56px;
  background: #e1e1ec;
  border-radius: 50%;
  font-size: 42px;
  color: #0006;
  font-weight: 700;
  margin: 0 auto 4.5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fived_slot_first {
  background: #00e065;
  color: #fff;
}

@media (max-width: 390px) {
  .fived_lottery_result {
    gap: 15px;
  }

  .fived_lottery_result p {
    font-size: 12px;
  }
}

@media (max-width: 390px) {
  .fived_lottery_result {
    gap: 10px;
  }

  .fived_lottery_result p {
    font-size: 10px;
  }

  .circle_num {
    height: 36px;
    width: 36px;
    font-size: 14px;
  }

  .fived_how_play_period {
    gap: 5px;
    margin-top: 10px;
  }

  .fived_how_play_period p {
    font-size: 12px;
  }

  .fived_how_play_period img {
    width: 18px;
    height: 18px;
  }

  .fived_how_play_period button {
    max-width: 70%;
    gap: 4px;
  }

  .fived_how_play_result {
    font-size: 20px;
  }

  .k3time_count div {
    font-size: 16px;
  }

  .fived_time_remain {
    font-size: 12px;
  }

  .fived_solt_num {
    width: 56px;
    height: 56px;
    font-size: 30px;
  }
}

@media (max-width: 360px) {
  .circle_num {
    height: 24px;
    width: 24px;
    font-size: 10px;
  }

  .fived_how_play_period {
    gap: 5px;
    margin-top: 10px;
  }

  .fived_how_play_period p {
    font-size: 10px;
  }

  .fived_how_play_period img {
    width: 16px;
    height: 16px;
  }

  .fived_how_play_period button {
    max-width: 60%;
    gap: 3px;
  }

  .fived_how_play_result {
    font-size: 16px;
  }

  .k3time_count div {
    font-size: 12px;
  }

  .fived_time_remain {
    font-size: 10px;
  }

  .fived_solt_num {
    width: 44px;
    height: 44px;
    font-size: 26px;
  }

  .fived_run_screen {
    height: 100px;
  }

  .fived_slot_transfrom {
    transform: translateY(-133px);
  }
}
</style>
