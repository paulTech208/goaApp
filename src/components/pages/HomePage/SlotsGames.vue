<template>
    <div class="gameitem">
        <div class="titlediv"><span class="title">Slots</span></div>
        <div class="game-grid">
            <div v-for="(platform, index) in platforms" :key="index" class="game-box">
                <img :src="platform" alt="Game Image" class="game-image">
            </div>
        </div>
    </div>
</template>

<script setup>
import slotGame1 from '@/assets/slotgame1.png'
import slotGame2 from '@/assets/slotgame2.png'
import slotGame3 from '@/assets/slotgame3.png'
import slotGame4 from '@/assets/slotgame4.png'
import slotGame5 from '@/assets/slotgame5.png'
import slotGame6 from '@/assets/slotgame6.png'
import slotGame7 from '@/assets/slotgame7.png'

const platforms = [slotGame1, slotGame2, slotGame3, slotGame4, slotGame5, slotGame6, slotGame7]

</script>

<style scoped>
.gameitem {
    margin-top: 20px;
}

.title {
    font-size: 16px;
    font-weight: 700;
    margin-left: 5px;
}

.titlediv {
    border-left: 3px solid #FA5D5D;
    margin-left: 10px;
    height: 18px;
    display: flex;
    align-items: center;
}


.game-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: space-between;
}

.game-box {
    height: 140px;
    margin: 5px;
    background-image: url('@/assets/game_box.png');
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 116px;
}

.game-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 5px;
    justify-content: center;
}

@media (max-width: 375px) {
    .game-box {
        height: 120px;
        margin: 5px;
        background-image: url('@/assets/game_box.png');
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        display: flex;
        align-items: center;
        width: 106px;
    }
}
</style>