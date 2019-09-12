<template>
    <div class="controller kalam">
        <h1>Settings</h1>
        <div class="controller__dropdown">
            <select v-model="selected" class="kalam">
                <option disabled value="">Choose Winner</option>
                <option>null</option>
                <option>boy</option>
                <option>girl</option>
            </select>
        </div>
        <button @click="genderSelect" class="kalam">SAVE</button>
    </div>

</template>

<script>

import API from "@/global/api-service.js";

export default {

    data() {
        return {
            selected: ''
        }
    },

    methods: {
        genderSelect() {
        API.UPDATE_SETTINGS({
            "winner": this.selected
        })
        .then((response) => {
            console.log(this.selected);
            console.log(response);

        })
        .catch((error) => {
            console.log(error);
        });
        },
    }
}
</script>

<style lang="scss">

.controller {
    background: white;
    text-align: center;
    
    &__dropdown {
        select {
            font-size: 25px;
            margin-top: 10%;
            option {
                font-size: 25px;
            }
        }
    }

    button {
        font-size: 25px;
        background: #95D04B;
        border: none;
        color: white;
        width: 70%;
        max-width: 300px;
        border-radius: 5px;
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
        padding: 18px;
        margin-bottom: 20%;
        &:focus {
            opacity: 0.8;
        }
        &:hover {
            cursor: pointer;
        }
    }
}

</style>