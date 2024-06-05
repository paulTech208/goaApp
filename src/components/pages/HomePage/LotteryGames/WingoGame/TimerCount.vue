<template>
  <div>
    <h1>10 Minute Countdown</h1>
    <br /><br />
    <div>{{ firstMin }}</div>
    <div>{{ secondMin }}</div>

    <div>{{ firstSec }}</div>
    <div>{{ secondSec }}</div>
    <br /><br />
    <button @click="changeTimeRemaining(600)">Change Time</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeRemaining: 60, // 10 minutes in seconds
      intervalId: null,
      deadline: null,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.timeRemaining / 60);
      const seconds = this.timeRemaining % 60;
      return `min: ${Math.floor(minutes/10)} ${minutes%10} sec: 
        ${Math.floor(seconds/10)} ${seconds%10}`;
    },
    firstMin() {
      const minutes = Math.floor(this.timeRemaining / 60);
      return `${Math.floor(minutes/10)}`
    },
    secondMin() {
      const minutes = Math.floor(this.timeRemaining / 60);
      return `${minutes%10}`
    },
    firstSec() {
      const seconds = this.timeRemaining % 60;
      return `${Math.floor(seconds/10)}`
    },
    secondSec() {
      const seconds = this.timeRemaining % 60;
      return `${seconds%10}`
    }
  },
  methods: {
    getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((t / 1000) % 60);
      const minutes = Math.floor((t / 1000 / 60) % 60);
      return { total: t, minutes, seconds };
    },
    updateClock() {
      const t = this.getTimeRemaining(this.deadline);
      this.timeRemaining = t.total / 1000;
      if (t.total <= 0) {
        this.timeRemaining = 60;
        const currentTime = Date.parse(new Date());
        this.deadline = new Date(currentTime + this.timeRemaining * 1000);
      }
    },
    startClock() {
      const currentTime = Date.parse(new Date());
      this.deadline = new Date(currentTime + this.timeRemaining * 1000);
      this.updateClock();
      this.intervalId = setInterval(this.updateClock, 1000);
    },
    changeTimeRemaining( value) {
      // Change the timeRemaining value here
      this.timeRemaining = value; // Change to 5 minutes (300 seconds)
    }
  },
  mounted() {
    this.startClock();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>

</style>
