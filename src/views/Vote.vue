<template>
  <div class="mobile kalam">
    <div v-if="votingStage == 0" class="mobile__choose">
      <h1>Baby Hugdahl is a...</h1>
      <button @click="boyVote()" class="boy-btn gender-btn kalam">BOY</button>
      <button @click="girlVote()" class="girl-btn gender-btn kalam">GIRL</button>
    </div>
    <div v-if="votingStage == 1" class="mobile__loader"></div>
    <div v-if="votingStage == 2" class="mobile__submitted">
      <h1>Submitted!</h1>
      <i class="fas fa-check"></i>
      <button class="kalam" @click="votingStage = 0">VOTE AGAIN</button>
    </div>
  </div>
</template>

<script>
import API from "@/global/api-service.js";

export default {

  data() {
    return {
      votingStage: 0,
    }
  },

  mounted() {
    this.votingStage = 0;
  },

  methods: {
    boyVote() {
      this.votingStage = 1;
      API.SUBMIT_VOTE({
        vote: "boy"
      })
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });
      this.votingStage = 2;
    },
    girlVote() {
      this.votingStage = 1;
      API.SUBMIT_VOTE({
        vote: "girl"
      })
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });
      this.votingStage = 2;
    }    
  }
}
</script>


<style lang="scss">

.mobile {
  padding: 15px;
  text-align: center;
  height: 100vh;
  
  h1 {
    font-size: 40px;
    margin-bottom: 35%;
  }

  &__choose {

    button {
      border: none;
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
      &:focus {
        outline: none;
        opacity: 0.5;
      }
    }
    .gender-btn {
      width: 216px;
      height: 81px;
      margin-bottom: 85px;
      margin-left: 15px;
      margin-right: 15px;
      border-radius: 5px;
      font-size: 25px;
      color: white;

    }
    .boy-btn {
      background: #51CEFF;
    }
    .girl-btn {
      background: #F396FF;
    }    
  }

  &__loader {
      margin: auto;
      border: 16px solid #f3f3f3; /* Light grey */
      border-top: 16px solid #707070; /* Blue */
      border-radius: 50%;
      width: 120px;
      height: 120px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

  &__submitted {
    font-size: 30px;
    height: 100%;
    h1 {
      font-size: 50px;
    
    }
    i {
      color: green;
      font-size: 150px;
    }
    button {
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      padding: 20px;
      border-radius: 10px;
      color: white;
      background: #95D04B;
      border: none;
      font-size: 25px;

      
      &:hover {
        cursor: pointer;
      }
    }
  }
}




</style>