<template>
<div class="vote-container">
  <div class="vote-container__bar" :style="style">
    <p class="roboto">{{ this.votePercent }}%</p>
  </div>
  <div class="vote-container__base">
    <p class="kalam">{{ this.gender }}</p>
  </div>
</div>

</template>
 
<script>
export default {
  props: ['votes', 'gender', 'color'],
  data() {
    return {
      votePercent: ''
      
    }
  },

  computed: {
    style() {
      
      this.votePercent = (this.votes) * 100;
      this.votePercent = Math.round(this.votePercent);
      return 'height:' + (36 + this.votePercent) + '%;background: #' + this.color + ';'
    }
  }
}
</script>

<style lang="scss">
.vote-container {
  width: 125px;
  height: 60vh;
  position: relative;
  bottom: 0px;
  margin-bottom: 30px;
  margin-left: 30px;
  transform: scale(0.9);

  @media only screen and (max-width: 800px) {
    height: 60vh;
  }

  &__bar {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 50px;
    left: 0;
    border-top-right-radius: 150px;
    border-top-left-radius: 150px;
    transition: 1s;
    p {
      font-size: 35px;
      color: white;
      transform: rotate(90deg);
      text-align: center;
    }

  }
  &__base {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 125px;
    border-radius: 125px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 2px 5px 0px rgb(24, 24, 24);
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
      color: gray;
      font-size: 25px;
    }

  }  
}


</style>