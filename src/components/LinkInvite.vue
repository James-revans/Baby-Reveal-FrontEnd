<template>
    <div class="linkinvite">
        <h1 class="kalam">VOTE NOW! GUESS THE GENDER!</h1>
        <div class="linkinvite__right">
            <h1 class="kalam">Open phone camera and point it here =></h1>
            <img class="linkinvite__image" :src="qr"/>
        </div>
    </div>
</template>

<script>
import qr from "@/assets/vote-qr.png";
import API from "@/global/api-service";

export default {
    data() {
        return {
            qr
        }
    }
}
</script>

<style lang="scss">

.linkinvite {
    z-index: 1;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    &__right {
        display: flex;

    }
    &__link {
        text-align: center;
        margin: 0;
        padding: 10px;
        font-size: 20px;
    }
    box-shadow: 0px 2px 5px 2px rgb(146, 146, 146);

    &__image {
        height: 100px;
    }
}

</style>