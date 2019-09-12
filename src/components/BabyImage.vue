<template>
    <div class="babyimage kalam">
        <div class="baby-frame frame-one">
            <img class="babyimage__one" src="@/assets/baby-01.jpg">
            <h2>BABY HUGDAHL</h2>
        </div>
        <div class="baby-frame frame-two">
            <img class="babyimage__two" src="@/assets/baby-02.jpg">
            <h2>BABY HUGDAHL</h2>
        </div>
        <div class="baby-frame frame-three">
            <img class="babyimage__three" src="@/assets/baby-03.jpg">
            <h2>BABY HUGDAHL</h2>
        </div>
        <div class="baby-frame frame-four">
            <img class="babyimage__four" src="@/assets/baby-01.jpg">
            <h2>BABY HUGDAHL</h2>
        </div>
        <div class="baby-frame frame-five">
            <img class="babyimage__five" src="@/assets/baby-02.jpg">
            <h2>BABY HUGDAHL</h2>
        </div>                 
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.babyimage {
    text-align: center;
    z-index: -1;

    @media only screen and (max-width: 800px) {
    }

    .frame-one {
        position: absolute;
        width: 22vw;
        bottom: 65%;
        right: 50%;
        transform: rotate(40deg);
    }

    .frame-two {
        position: absolute;
        width: 22vw;
        bottom: 20%;
        right: 38%;
        transform: rotate(-30deg);

    }

    .frame-three {
        position: absolute;
        width: 22vw;
        bottom: 70%;
        right: 28%;
        transform: rotate(20deg);
    }
    .frame-four {
        position: absolute;
        width: 22vw;
        bottom: 14%;
        right: 15%;
        transform: rotate(30deg);
        
    }
    .frame-five {
        position: absolute;
        width: 22vw;
        bottom: 72%;
        right: 5%;
        transform: rotate(-10deg);
        
    }


    .baby-frame {
        width: 22vw;
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
            font-size: 25px;
            margin: 0 auto;
            padding: 8px; 
        }

    }

}

</style>