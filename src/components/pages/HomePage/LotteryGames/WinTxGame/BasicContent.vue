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
    <div class="w-full flex flex-col justify-center items-between how_play">
      <div class="w-full flex justify-between items-center">
        <div class="flex justify-start items-center">
          <button class="wintx_time_period">Period</button>
          <button
            class="w-full rounded-full wintx_how_play_button flex justify-center items-center"
          >
            <img src="@/assets/gamelist/blue_wallet.png" alt="Left Icon" />
            <p class="text-blue font-[500]">How to play</p>
          </button>
        </div>
        <button
          class="rounded-full wintx_how_play_button text-blue flex justify-center items-center"
        >
          Public Chain Query
        </button>
      </div>
      <div class="w-full flex justify-between items-center text-white">
        <p class="winTx_how_time">20240528131296</p>
        <div class="flex justify-center items-center">
          <p class="wintx_how_draw">Draw time</p>
          <div class="flex jusitfy-between items-center gap-[5px] time_count">
            <div class="first_clock">0</div>
            <div>0</div>
            <div>:</div>
            <div>0</div>
            <div class="last_clock">0</div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-between items-center wintx_ball">
        <div class="wintx_ball_blue2" />
        <div class="wintx_ball_blue5" />
        <div class="wintx_ball_bluea" />
        <div class="wintx_ball_bluee" />
        <div class="wintx_ball_yellow5" />
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

.how_play {
  background-image: url("@/assets/gamelist/trxbg-fc72fc04.png");
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
  gap: 10px;
}

.wintx_time_period {
  height: 28px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 16px;
  margin-right: 6px;
  font-size: 12px;
  margin-right: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wintx_how_play_button {
  background-color: white;
  max-width: 85%;
  padding: 3px 10px;
  font-size: 14px;
  font-weight: 500;
}

.wintx_how_play_button img {
  width: 22px;
  height: 22px;
}

.winTx_how_time {
  font-size: 18px;
}

.wintx_how_draw {
  font-size: 14px;
  margin-right: 10px;
}

.wintx_ball div {
  width: 62px;
  height: 62px;
  text-align: center;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-top: 30px;
}

.wintx_ball_blue1 {
  background-image: url("@/assets/gamelist/blue_ball1.png");
}

.wintx_ball_blue2 {
  background-image: url("@/assets/gamelist/blue_ball2.png");
}

.wintx_ball_blue3 {
  background-image: url("@/assets/gamelist/blue_ball3.png");
}

.wintx_ball_blue4 {
  background-image: url("@/assets/gamelist/blue_ball4.png");
}

.wintx_ball_blue5 {
  background-image: url("@/assets/gamelist/blue_ball5.png");
}

.wintx_ball_blue6 {
  background-image: url("@/assets/gamelist/blue_ball6.png");
}

.wintx_ball_blue7 {
  background-image: url("@/assets/gamelist/blue_ball7.png");
}

.wintx_ball_blue8 {
  background-image: url("@/assets/gamelist/blue_ball8.png");
}

.wintx_ball_blue9 {
  background-image: url("@/assets/gamelist/blue_ball9.png");
}

.wintx_ball_blue0 {
  background-image: url("@/assets/gamelist/blue_ball0.png");
}

.wintx_ball_bluea {
  background-image: url("@/assets/gamelist/blue_balla.png");
}
.wintx_ball_blueb {
  background-image: url("@/assets/gamelist/blue_ballb.png");
}
.wintx_ball_bluec {
  background-image: url("@/assets/gamelist/blue_ballc.png");
}
.wintx_ball_blued {
  background-image: url("@/assets/gamelist/blue_balld.png");
}
.wintx_ball_bluee {
  background-image: url("@/assets/gamelist/blue_balle.png");
}

.wintx_ball_yellow0 {
  background-image: url("@/assets/gamelist/yellow_ball0.png");
}

.wintx_ball_yellow1 {
  background-image: url("@/assets/gamelist/yellow_ball1.png");
}

.wintx_ball_yellow2 {
  background-image: url("@/assets/gamelist/yellow_ball1.png");
}

.wintx_ball_yellow2 {
  background-image: url("@/assets/gamelist/yellow_ball2.png");
}

.wintx_ball_yellow3 {
  background-image: url("@/assets/gamelist/yellow_ball3.png");
}

.wintx_ball_yellow4 {
  background-image: url("@/assets/gamelist/yellow_ball4.png");
}

.wintx_ball_yellow5 {
  background-image: url("@/assets/gamelist/yellow_ball5.png");
}

.wintx_ball_yellow6 {
  background-image: url("@/assets/gamelist/yellow_ball6.png");
}

.wintx_ball_yellow7 {
  background-image: url("@/assets/gamelist/yellow_ball7.png");
}

.wintx_ball_yellow8 {
  background-image: url("@/assets/gamelist/yellow_ball8.png");
}

.wintx_ball_yellow9 {
  background-image: url("@/assets/gamelist/yellow_ball9.png");
}

.time_count div {
  background-color: #ffffff1a;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  padding: 0 5.5px;
  border: 0.2px solid #fff;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.time_count .first_clock {
  background-image: url("@/assets/gamelist/left_clock.png");
  border: transparent;
  background-color: transparent;
  box-sizing: border-box;
}

.time_count .last_clock {
  background-image: url("@/assets/gamelist/right_clock.png");
  border: transparent;
  background-color: transparent;
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
  color: black;
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

  .how_play {
    border-radius: 18px;
    padding: 12px 8px;
  }

  .wintx_time_period {
    height: 24px;
    border-radius: 8px;
    padding: 14px;
    margin-right: 5px;
    font-size: 10px;
    margin-right: 4px;
  }

  .wintx_how_play_button {
    padding: 3px 8px;
    font-size: 12px;
  }

  .wintx_how_play_button img {
    width: 20px;
    height: 20px;
  }

  .winTx_how_time {
    font-size: 16px;
  }

  .wintx_how_draw {
    font-size: 12px;
    margin-right: 8px;
  }

  .wintx_ball div {
    width: 54px;
    height: 54px;
    margin-top: 25px;
  }

  .time_count div {
    font-size: 16px !important ;
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

  .how_play {
    border-radius: 16px;
    padding: 10px 6px;
    gap: 6px;
  }

  .wintx_time_period {
    height: 20px;
    border-radius: 6px;
    padding: 8px;
    margin-right: 4px;
    font-size: 12px;
    margin-right: 3px;
  }

  .wintx_how_play_button {
    padding: 3px 6px;
    font-size: 10px;
  }

  .wintx_how_play_button img {
    width: 18px;
    height: 18px;
  }

  .winTx_how_time {
    font-size: 14px;
  }

  .wintx_how_draw {
    font-size: 10px;
    margin-right: 6px;
  }

  .wintx_ball div {
    width: 44px;
    height: 44px;
    margin-top: 20px;
  }

  .time_count div {
    font-size: 13px !important;
  }
}
</style>
