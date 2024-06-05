<script setup>
import { ClockStatus, K3PlayMode } from "@/lib/consts";

import { ref } from "vue";
const clockStatus = ref(ClockStatus["ONEMIN"]);
const setClockStatus = (value) => {
  clockStatus.value = ClockStatus[value];
};

const playMode = ref(K3PlayMode["TOTAL"]);
const setPlayMode = (value) => {
  playMode.value = K3PlayMode[value];
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
            K3 Lotre <br />
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
            K3 Lotre <br />
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
            K3 Lotre <br />
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
            K3 Lotre <br />
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
            K3 Lotre <br />
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
            K3 Lotre <br />
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
            K3 Lotre <br />
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
            K3 Lotre <br />
            10Min
          </p>
        </button>
      </div>
    </div>
  </div>
  <div class="w-full flex z-[10] p-[0px_15px]">
    <div
      class="w-full flex flex-col justify-center items-center bg-white k3_how_play"
    >
      <div class="w-full flex justify-between items-center k3_how_play_main">
        <div
          class="w-full flex flex-col justify-center items-start gap-[5px] px-[5px]"
        >
          <div
            class="w-full flex justify-start items-center k3_how_play_button"
          >
            <p class="text-black_1">Period</p>
            <button
              class="w-full border border-blue rounded-full flex justify-center items-center"
            >
              <img src="@/assets/gamelist/blue_wallet.png" alt="Left Icon" />
              <p class="text-blue font-[500]">How to play</p>
            </button>
          </div>
          <p class="text-black font-[700] mx-[5px] k3_how_play_time">
            20240527090123
          </p>
        </div>
        <div class="w-full flex flex-col justify-center items-end gap-[5px]">
          <p class="text-black_1 text-[14px] font-[400]">Time remaining</p>
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
          class="w-full p-[0px_15px] flex justify-between items-center k3_run_screen"
        >
          <div class="w-full k3_run_box">
            <div class="k3_num3" />
            <div class="k3_num1" />
            <div class="k3_num5" />
          </div>
        </div>
      </div>
      <div
        class="w-full rounded-[15px] p-[0px_15px] flex flex-col justify-center items-center gap-[20px]"
      >
        <div
          class="w-full flex justify-center items-center gap-[5px] k3_degree"
        >
          <button
            @click="() => setPlayMode('TOTAL')"
            :class="{ active_button: playMode === 'total' }"
          >
            <p>Total</p>
          </button>
          <button
            @click="() => setPlayMode('TWOSAME')"
            :class="{ active_button: playMode === 'two_same' }"
          >
            <p>2 Same</p>
          </button>
          <button
            @click="() => setPlayMode('THREESAME')"
            :class="{ active_button: playMode === 'three_same' }"
          >
            <p>3 Same</p>
          </button>
          <button
            @click="() => setPlayMode('DIFFERENT')"
            :class="{ active_button: playMode === 'different' }"
          >
            <p>Different</p>
          </button>
        </div>
        <div
          class="w-full grid grid-cols-4 justify-between items-center gap-[5px]"
        >
          <button
            class="w-full flex flex-col justify-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_odd">
              <div class="flex justify-center items-center">3</div>
            </div>
            <p class="text-center text-black_3 w-full">207.36X</p>
          </button>
          <button
            class="w-full flex flex-col jusitfy-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_even">
              <div class="flex justify-center items-center">4</div>
            </div>
            <p class="text-center text-black_3 mx-auto">69.12X</p>
          </button>
          <button
            class="w-full flex flex-col justify-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_odd">
              <div class="flex justify-center items-center">5</div>
            </div>
            <p class="text-center text-black_3 w-full">34.56X</p>
          </button>
          <button
            class="w-full flex flex-col jusitfy-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_even">
              <div class="flex justify-center items-center">6</div>
            </div>
            <p class="text-center text-black_3 mx-auto">20.74X</p>
          </button>
          <button
            class="w-full flex flex-col justify-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_odd">
              <div class="flex justify-center items-center">7</div>
            </div>
            <p class="text-center text-black_3 w-full">13.83X</p>
          </button>
          <button
            class="w-full flex flex-col jusitfy-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_even">
              <div class="flex justify-center items-center">8</div>
            </div>
            <p class="text-center text-black_3 mx-auto">9.88X</p>
          </button>
          <button
            class="w-full flex flex-col justify-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_odd">
              <div class="flex justify-center items-center">9</div>
            </div>
            <p class="text-center text-black_3 w-full">8.3X</p>
          </button>
          <button
            class="w-full flex flex-col jusitfy-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_even">
              <div class="flex justify-center items-center">10</div>
            </div>
            <p class="text-center text-black_3 mx-auto">7.68X</p>
          </button>
          <button
            class="w-full flex flex-col justify-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_odd">
              <div class="flex justify-center items-center">11</div>
            </div>
            <p class="text-center text-black_3 w-full">7.68X</p>
          </button>
          <button
            class="w-full flex flex-col jusitfy-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_even">
              <div class="flex justify-center items-center">12</div>
            </div>
            <p class="text-center text-black_3 mx-auto">8.3X</p>
          </button>
          <button
            class="w-full flex flex-col justify-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_odd">
              <div class="flex justify-center items-center">13</div>
            </div>
            <p class="text-center text-black_3 w-full">9.88X</p>
          </button>
          <button
            class="w-full flex flex-col jusitfy-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_even">
              <div class="flex justify-center items-center">14</div>
            </div>
            <p class="text-center text-black_3 mx-auto">9.88X</p>
          </button>
          <button
            class="w-full flex flex-col justify-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_odd">
              <div class="flex justify-center items-center">15</div>
            </div>
            <p class="text-center text-black_3 w-full">20.74X</p>
          </button>
          <button
            class="w-full flex flex-col jusitfy-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_even">
              <div class="flex justify-center items-center">16</div>
            </div>
            <p class="text-center text-black_3 mx-auto">34.56X</p>
          </button>
          <button
            class="w-full flex flex-col justify-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_odd">
              <div class="flex justify-center items-center">17</div>
            </div>
            <p class="text-center text-black_3 w-full">69.12X</p>
          </button>
          <button
            class="w-full flex flex-col jusitfy-center items-center k3_game_ball"
          >
            <div class="flex justify-center items-center k3_game_even">
              <div class="flex justify-center items-center">18</div>
            </div>
            <p class="text-center text-black_3 mx-auto">207.36X</p>
          </button>
          <button
            class="w-full flex justify-center items-center k3_game_ball color_button bg-yellow"
          >
            <p class="text-white leading-[110%]">
              Big <br />
              1.92X
            </p>
          </button>
          <button
            class="w-full flex justify-center items-center k3_game_ball color_button bg-blue2"
          >
            <p class="text-white leading-[110%]">
              Small <br />
              1.92X
            </p>
          </button>
          <button
            class="w-full flex justify-center items-center k3_game_ball color_button bg-red2"
          >
            <p class="text-white leading-[110%]">
              Odd <br />
              1.92X
            </p>
          </button>
          <button
            class="w-full flex justify-center items-center k3_game_ball color_button bg-green"
          >
            <p class="text-white leading-[110%]">
              Even <br />
              1.92X
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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

.k3_how_play {
  gap: 20px;
  border-radius: 15px;
}

.k3_how_play_main {
  padding: 0px 15px;
}

.k3_how_play_button {
  gap: 15px;
  margin-top: 15px;
  font-size: 14px;
}

.k3_how_play_button button {
  max-width: 80%;
  gap: 5px;
}

.k3_how_play_button img {
  width: 20px;
  height: 20px;
}

.k3_how_play_time {
  font-size: 22px;
}

.k3_run_screen {
  height: 100%;
  background: #00b977;
  border-radius: 8px;
  position: relative;
  padding: 9px;
}

.k3_run_screen::before {
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

.k3_run_screen::after {
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

.k3_run_box {
  background: #003c26;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 6px;
}

.k3_run_box::before {
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

.k3_run_box::after {
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

.k3_run_box div {
  width: calc((100% - 16.8px) / 3);
  height: 96.6px;
  background-color: #333;
  border-radius: 5.5px;
  position: relative;
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;

  box-shadow: inset 0 -5.6px 5.6px #0000004d, inset 0 5.6px 5.6px #0000004d;
}

.k3_num3 {
  background-image: url("@/assets/gamelist/num3.png");
}

.k3_num1 {
  background-image: url("@/assets/gamelist/num1.png");
}

.k3_num2 {
  background-image: url("@/assets/gamelist/num2.png");
}

.k3_num4 {
  background-image: url("@/assets/gamelist/num4.png");
}

.k3_num5 {
  background-image: url("@/assets/gamelist/num5.png");
}

.k3_num6 {
  background-image: url("@/assets/gamelist/num6.png");
}

.k3_degree button {
  text-align: center;
  width: calc(25% - 1px);
  height: 42px;
  background: #f6f6f6;
  border-radius: 5.6px 5.6px 0 0;
  font-size: 12px;
  font-weight: 500;
  color: black;
}

.k3_degree .active_button {
  background-color: #4784ff;
  color: white;
}

.k3_game_ball {
  border-radius: 6px;
  margin-top: 9px;
  font-size: 13px;
  color: #7f7f7f;
}

.k3_game_ball div {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.k3_game_odd {
  background: url("@/assets/gamelist/redBall-fd34b99e.png") no-repeat center
    center;
  background-size: cover;
}

.k3_game_odd div {
  background: -webkit-linear-gradient(top, #ff827a 0%, #e93333 68.18%);
  background: linear-gradient(180deg, #ff827a 0%, #e93333 68.18%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  font-weight: bold;
}

.k3_game_even {
  background: url("@/assets/gamelist/greenBall-b7685130.png") no-repeat center
    center;
  background-size: cover;
}

.k3_game_even div {
  background: -webkit-linear-gradient(top, #55d991 0%, #2f9c61 68.18%);
  background: linear-gradient(180deg, #55d991 0%, #2f9c61 68.18%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 28px;
  font-weight: bold;
}

.color_button {
  height: 49px;
}

@media (max-width: 390px) {
  .k3_how_play {
    gap: 15px;
    border-radius: 10px;
  }

  .k3_how_play_main {
    padding: 0px 10px;
  }

  .k3_how_play_button {
    gap: 10px;
    margin-top: 10px;
    font-size: 12px;
  }

  .k3_how_play_button img {
    width: 18px;
    height: 18px;
  }

  .k3_how_play_button button {
    max-width: 70%;
    gap: 5px;
  }

  .k3_how_play_time {
    font-size: 18px;
  }

  .k3time_count div {
    font-size: 18px;
    padding: 1px 4.5px;
  }

  .k3_run_box div {
    height: 78.2px;
  }

  .k3_degree button {
    height: 36px;
    font-size: 10px;
  }

  .k3_game_ball {
    border-radius: 6px;
    margin-top: 7px;
    font-size: 13px;
  }

  .k3_game_ball div {
    width: 44px;
    height: 44px;
  }

  .k3_game_odd div {
    font-size: 24px;
  }

  .k3_game_even div {
    font-size: 24px;
  }

  .color_button {
    height: 44px;
  }
}
@media (max-width: 360px) {
  .k3_how_play {
    gap: 10px;
    border-radius: 5px;
  }

  .k3_how_play_main {
    padding: 0px 0px;
  }

  .k3_how_play_button {
    gap: 5px;
    margin-top: 8px;
    font-size: 12px;
  }

  .k3_how_play_button img {
    width: 16px;
    height: 16px;
  }

  .k3_how_play_button button {
    max-width: 100%;
    gap: 0px !important;
  }

  .k3_how_play_time {
    font-size: 14px;
  }

  .k3time_count div {
    font-size: 16px;
    padding: 1px 4.5px;
  }

  .k3_run_box div {
    height: 63.6px;
  }

  .k3_degree button {
    height: 32px;
    font-size: 8.9px;
  }

  .k3_game_ball {
    border-radius: 5px;
    margin-top: 5px;
    font-size: 11px;
  }

  .k3_game_ball div {
    width: 36px;
    height: 36px;
  }

  .k3_game_odd div {
    font-size: 20px;
  }

  .k3_game_even div {
    font-size: 20px;
  }

  .color_button {
    height: 36px;
  }
}
</style>
