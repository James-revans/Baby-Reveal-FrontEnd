<template>
<div class="home">
  <div v-show="winner == 'null'" class="home__wrapper">
    <LinkInvite/>
    <div class="home__wrapper__main">
      <div class="home__wrapper__main__votecontainer">
        <VoteBar
        :votes="boy"
        :gender="'Boy'"
        :color="this.boyColor"
        />
        <VoteBar
        :votes="girl"
        :gender="'Girl'"
        :color="this.girlColor"
        />
      </div>
      <BabyImage/>
    </div>
  </div>
  
  <div v-show="winner == 'boy'"><BoyWinner/></div>
  <div v-if="winner == 'girl'"><GirlWinner/></div>
</div>
</template>



<script>
// @ is an alias to /src
import GirlWinner from "@/components/GirlWinner";
import BoyWinner from "@/components/BoyWinner";
import LinkInvite from "@/components/LinkInvite";
import VoteBar from "@/components/VoteBar";
import BabyImage from "@/components/BabyImage";
import Controller from "@/views/Controller";
import API from "@/global/api-service";
import { setInterval } from 'timers';





export default {
  name: 'home',
  components: {
    Controller,
    LinkInvite,
    VoteBar,
    BabyImage,
    BoyWinner,
    GirlWinner
  },
  data() {
    return {
      boy: null,
      girl: null,
      isPolling: false,
      boyColor: 51 + 'CEFF',
      girlColor: 'F' + 396 + 'FF',
      winner: null,


    }
  },
    mounted() {
      API.GET_DATA()
      .then((response) => {
        console.log('Mounted response');
      })
      .catch((error) => {
        console.log(error);
      });
      
      this.startRefreshing();
  },  

  methods: {

    //
    startRefreshing() {
      setInterval(() => {
        if(!this.isPolling) {
          this.isPolling = true;
          API.GET_DATA()
          .then((response) => {
            //console.log(response);
            this.isPolling = false;
            this.boy = response.data.votes.boy;
            this.girl = response.data.votes.girl;
            this.winner = response.data.settings.winner;
            if(this.boy + this.girl > 1) {
              this.girl -= 0.01
            }
            else if(this.boy + this.girl < 1) {
              this.boy += 0.01
            }
          })
          .catch((error) => {
            console.log(error);
            console.log('methods did not work');
          });
        }
      }, 3000);
    },
  }
}
</script>





<style lang="scss">
.home {
  height: 100vh;
  &__wrapper {
    &__main {
      position: absolute;
      bottom: 0;
      display: flex;
      bottom: 0;
      width: 100%;
      align-items: flex-end;
      flex-wrap: wrap;

      &__votecontainer {
        display: flex;
        justify-content: start;
        max-width: 40%;
        @media only screen and (max-width: 800px) {
          width: 100%;
        }
        
      }
    }
  }
.controller-home {
  position: absolute;
  bottom: -300px;
}

canvas {
  position: absolute;
}


}


</style>
