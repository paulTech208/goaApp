<script setup>
import { ClockStatus, AmountStatus } from "@/lib/consts";

import { ref } from "vue";
const clockStatus = ref(ClockStatus["ONEMIN"]);
const setClockStatus = (value) => {
  clockStatus.value = ClockStatus[value];
};

const amountStatus = ref(AmountStatus["ONE"]);
const setAmountStatus = (value) => {
  amountStatus.value = AmountStatus[value];
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
            Win Go <br />
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
            Win Go <br />
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
            Win Go <br />
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
            Win Go <br />
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
            Win Go <br />
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
            Win Go <br />
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
            Win Go <br />
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
            Win Go <br />
            10Min
          </p>
        </button>
      </div>
    </div>
  </div>
  <div class="w-full flex z-[10] p-[0px_15px]">
    <div class="how_play">
      <div class="w-full flex flex-col justify-center items-start gap-[5px]">
        <button
          class="w-full border border-white rounded-full max-w-[85%] mt-[8px] flex justify-center items-center gap-[5px]"
        >
          <img
            src="@/assets/gamelist/how_play_icon.png"
            alt="Left Icon"
            class="w-[20px] h-[20px]"
          />
          <p class="text-white text-[14px] font-[500]">How to play</p>
        </button>
        <p class="text-white text-[14px] font-[400] mx-[5px]">
          Win to
          <span v-if="clockStatus === 'one_min'">1Min</span>
          <span v-else-if="clockStatus === 'three_min'">3Min</span>
          <span v-else-if="clockStatus === 'five_min'">5Min</span>
          <span v-else>10Min</span>
        </p>
        <div class="w-full flex jusitfy-between items-center gap-[5px]">
          <img
            src="@/assets/gamelist/ball5.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1 how_play_ball"
          />
          <img
            src="@/assets/gamelist/ball9.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1 how_play_ball"
          />
          <img
            src="@/assets/gamelist/ball0.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1 how_play_ball"
          />
          <img
            src="@/assets/gamelist/ball9.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1 how_play_ball"
          />
          <img
            src="@/assets/gamelist/ball6.png"
            alt="Left Icon"
            class="w-full aspect-w-1 aspect-h-1 how_play_ball"
          />
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-end gap-[5px]">
        <p class="text-white text-[14px] font-bold">Time remaining</p>
        <div class="flex jusitfy-between items-center gap-[5px] time_count">
          <div class="first_clock">0</div>
          <div>0</div>
          <div>:</div>
          <div>0</div>
          <div class="last_clock">0</div>
        </div>
        <p class="text-white text-[16px] font-[500]">2024052611050</p>
      </div>
    </div>
  </div>
  <div class="w-full flex z-[10] p-[0px_15px]">
    <div
      class="w-full flex flex-col justify-center items-cetner gap-[15px] bg-white rounded-[10px] p-[8px_10px] white_shadow"
    >
      <div
        class="w-full flex justify-center items-center gap-[20px] color_section"
      >
        <button class="green_button">Green</button>
        <button class="violet_button">Violet</button>
        <button class="red_button">Red</button>
      </div>
      <div class="w-full grid grid-cols-5 bg-black_2 p-[10px] rounded-[15px]">
        <img
          src="@/assets/gamelist/ball0.png"
          alt="Left Icon"
          class="wingo_ball_num"
        />
        <img
          src="@/assets/gamelist/ball1.png"
          alt="Left Icon"
          class="wingo_ball_num mb-[5px]"
        />
        <img
          src="@/assets/gamelist/ball2.png"
          alt="Left Icon"
          class="wingo_ball_num"
        />
        <img
          src="@/assets/gamelist/ball3.png"
          alt="Left Icon"
          class="wingo_ball_num"
        />
        <img
          src="@/assets/gamelist/ball4.png"
          alt="Left Icon"
          class="wingo_ball_num mb-[5px]"
        />
        <img
          src="@/assets/gamelist/ball5.png"
          alt="Left Icon"
          class="wingo_ball_num"
        />
        <img
          src="@/assets/gamelist/ball6.png"
          alt="Left Icon"
          class="wingo_ball_num"
        />
        <img
          src="@/assets/gamelist/ball7.png"
          alt="Left Icon"
          class="wingo_ball_num"
        />
        <img
          src="@/assets/gamelist/ball8.png"
          alt="Left Icon"
          class="wingo_ball_num"
        />
        <img
          src="@/assets/gamelist/ball9.png"
          alt="Left Icon"
          class="wingo_ball_num"
        />
      </div>
      <div
        class="w-full flex justify-center item-center gap-[5px] quality_button"
      >
        <button class="!bg-white border border-red text-red">Random</button>
        <button
          @click="() => setAmountStatus('ONE')"
          :class="{ active_amount: amountStatus === 'one_amount' }"
        >
          X1
        </button>
        <button
          @click="() => setAmountStatus('FIVE')"
          :class="{ active_amount: amountStatus === 'five_amount' }"
        >
          X5
        </button>
        <button
          @click="() => setAmountStatus('TEN')"
          :class="{ active_amount: amountStatus === 'ten_amount' }"
        >
          X10
        </button>
        <button
          @click="() => setAmountStatus('TWENTY')"
          :class="{ active_amount: amountStatus === 'twenty_amount' }"
        >
          X20
        </button>
        <button
          @click="() => setAmountStatus('FIFTY')"
          :class="{ active_amount: amountStatus === 'fifty_amount' }"
        >
          X50
        </button>
        <button
          @click="() => setAmountStatus('HUNDRED')"
          :class="{ active_amount: amountStatus === 'hundred_amount' }"
        >
          X100
        </button>
      </div>
      <div class="w-full flex justify-center item-center big_small_button">
        <button class="big_button min-w-[45%]">Big</button>
        <button class="small_button min-w-[45%]">Small</button>
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

.active_clock p {
  color: white !important;
}

.how_play {
  background-image: url("@/assets/diban-8d73e5a0.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: black;
  border-width: 1px;
  border-radius: 20px;
  padding: 15px 10px;
}

.how_play_ball {
  max-width: 27px;
}

.time_count div {
  background-color: #fff;
  color: #4781ff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  padding: 1px 4.5px;
}

.time_count .first_clock {
  background: -webkit-linear-gradient(315deg, transparent 4.5pxpx, #fff 0) 0 0;
  background: linear-gradient(135deg, transparent 4.5px, #fff 0) 0 0;
}

.time_count .last_clock {
  background: -webkit-linear-gradient(135deg, transparent 4.5px, #fff 0) 0 0;
  background: linear-gradient(-45deg, transparent 4.5px, #fff 0) 0 0;
}

.white_shadow {
  box-shadow: 0 10px 20px #c5c5da40;
}

.color_section button {
  width: calc((100% - 14px) / 3);
  height: 36px;
  line-height: 17px;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-align: center;
}

.green_button {
  background: #40ad72;
  border-radius: 0 9px;
  box-shadow: 0 5px 10px #bae6b0;
}

.violet_button {
  background: #b659fe;
  box-shadow: 0 4px 10px #b988df;
  border-radius: 9px;
}

.red_button {
  background: #fd565c;
  border-radius: 9px 0;
  box-shadow: 0 5px 10px #f49d9d;
}

.wingo_ball_num {
  width: 64px;
  height: 64px;
}

.quality_button button {
  font-weight: 500;
  padding: 5px 9px;
  border-radius: 8px;
  background-color: #eeeeee;
  gap: 5px;
  font-size: 14px;
}

.active_amount {
  background: #40ad72 !important;
  color: white;
}

.big_small_button {
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}

.big_small_button .big_button {
  background-color: #ffa82e;
  border-radius: 24px 0 0 24px;
}

.big_small_button .small_button {
  background: #6da7f4;
  border-radius: 0 24px 24px 0;
}

@media (max-width: 390px) {
  .color_section button {
    height: 32px;
    font-size: 16px;
  }

  .wingo_ball_num {
    width: 56px;
    height: 56px;
  }

  .quality_button button {
    padding: 3px 6px;
    border-radius: 6px;
    background-color: #eeeeee;
    font-size: 13px;
  }

  .big_small_button {
    height: 36px;
    font-size: 16px;
  }
}

@media (max-width: 375px) {
  .container {
    margin-top: 40px;
    margin-bottom: 50px;
    overflow-y: auto;
  }

  .how_play_ball {
    max-width: 22px;
  }

  .time_count div {
    font-size: 16px;
  }
}

@media (max-width: 360px) {
  .color_section button {
    height: 30px;
    font-size: 18px;
  }

  .wingo_ball_num {
    width: 42px;
    height: 42px;
  }

  .quality_button button {
    padding: 3px 6px;
    border-radius: 4px;
    background-color: #eeeeee;
    font-size: 10px;
  }

  .big_small_button {
    height: 30px;
    font-size: 16px;
  }
}
</style>
