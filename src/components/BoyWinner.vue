<template>
    <div class="kalam boy-winner">
        <canvas id="my-canvas"></canvas>
        <h1>IT'S A BOY!</h1>
        <div class="baby-frame">
            <img src="../assets/baby-01.jpg">
            <h2>BABY HUGDAHL</h2>
        </div>
    </div>
</template>

<script>

import ConfettiGenerator from "confetti-js";

export default {

    mounted() {
        var confettiSettings = { 
            target: 'my-canvas',
            colors: [[70,211,255],[0,167,210],[0,42,77],[0,126,166],[230,244,241]] 
        };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }
    
}
</script>

<style lang="scss">
.boy-winner {
    background: #51CEFF;
    height: 100vh;
    width: 100%;
    text-align: center;

    h1 {
        padding-top: 2%;
        font-size: 200px;
        color: white;
        margin: 0 auto;
    }
    .baby-frame {
        width: 20vw;
        margin: 0 auto;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.822);
        background: white;

        img {
            width: 100%;
            padding: 0;
        }

        h2 {
            background: white;
            color: black;
            font-size: 30px;
            margin: 0 auto;
            padding: 8px;
            
        }

    }
    canvas {
        position: absolute;
        left: 0;
        margin: 0;
        width: 100%;
        height: 100vh;
    }

}

</style>