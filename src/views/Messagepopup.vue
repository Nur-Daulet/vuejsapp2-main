<template>
    <div class="v-popup">
      <div class="content">
        <slot>Thank you for your feedback!</slot>
      </div>
    <div class="closer">
        <button @click="closePopup" class="closebtn">Close</button>
    </div>
    </div>
</template>
  
  <script>
  export default{
    name:"MessPopup",
    props:{},
    data(){
return{

}
    },
  
  methods:{
    closePopup(){
      this.$emit ('closePopup')
    }
  }
  }
  </script>
  
  <style lang="scss">
 
   .v-popup{
    padding: 15px;
    position: fixed;
    left: 38rem;
    top: 300px;
    width: 300px;
    background-color: white;
    box-shadow: 0 0 17px 0 #fff;
    border-radius: 15px;
    color: #000;
   }
    .content, .closer {
      display: flex;
      font-size: 18px;
      justify-content: center;
      align-items: center;
      padding:10px;
    }

    .closebtn{
      background: none;
      border-radius: 10px;
      width: 50px;
      height: 28px;
      cursor: pointer;
      border: 2px solid #000;
    }
    .closebtn:hover{
      border: 2px solid rgb(146, 94, 110);
    }
  </style>