import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Activity from "./views/Activity.vue";
import Promotion from "./views/Promotion.vue";
import Wallet from "./views/Wallet.vue";
import Account from "./views/Account.vue";
import Wingo from "./components/pages/HomePage/LotteryGames/WingoGame/WingoGame.vue";
import K3Game from "@/components/pages/HomePage/LotteryGames/K3Game/K3Game.vue";
import FiveD from "@/components/pages/HomePage/LotteryGames/FiveDGame/FiveD.vue";
import WinTx from "@/components/pages/HomePage/LotteryGames/WinTxGame/WinTx.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/activity", name: "activity", component: Activity },
  { path: "/promotion", name: "promotion", component: Promotion },
  { path: "/wallet", name: "wallet", component: Wallet },
  { path: "/account", name: "account", component: Account },
  { path: "/home/lotterygames/wingo", name: "wingo", component: Wingo },
  { path: "/home/lotterygames/k3", name: "k3", component: K3Game },
  { path: "/home/lotterygames/5d", name: "5d", component: FiveD },
  { path: "/home/lotterygames/wintx", name: "wintx", component: WinTx },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
