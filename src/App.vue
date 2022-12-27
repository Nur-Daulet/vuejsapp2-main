<template>
  <h2>Please, choose the shop which you visited and rate our service</h2>
  <popup
  v-if="messageinfo"
  @closePopup = "closeInfoPopup" 
  />
   <div id="app">
    <button  @click="Popupmessage"   class="btns" v-on:click="sendEmoji('normal')">Normal 😃</button>
    <button  @click="Popupmessage"   class="btns"  v-on:click="sendEmoji('good')">Good 😍</button>
    <button  @click="Popupmessage"   class="btns"  v-on:click="sendEmoji('bad')">Bad 😎</button>
   </div>

   <!-- { path: '/product/:id', component: Product },
   { path: '/shop/:id', component: Shop },
   { path: '/product/:id', component: () => import('../views/Product.vue') }, -->
 
  <!-- <div id="nav">
    <router-link to="/shops/1" @click.prevent>Mega</router-link> |
    <router-link to="/shops/2" @click.prevent>Mega Moskva</router-link>
  </div> 
<router-view/> -->

</template>

<script>
import Popup from './views/Messagepopup.vue'
import axios from 'axios';
// import Mega from './components/Mega.vue';
// import MegaMoskva from './components/MegaMoskva.vue';
export default {
  name: 'App',
  // components: {
  //   Mega,
  //   MegaMoskva
  // },
  components: {
      Popup
  },
  data() {
    return {
      messageinfo:false,
      feedbacks: [],
      modifiedData: {
          status: '',
          ip_address: '',
          shop_id: this.$route.params.id
        },
      error: null
    }
  },

  async mounted () {
    try {
      const response = await axios.get('https://immense-wave-26764.herokuapp.com/api/shops')
      this.feedbacks = response.data;
    } catch (error) {
      this.error = error;
    }
  },

methods: {
    sendEmoji(status) {
      axios.post('https://immense-wave-26764.herokuapp.com/api/feedbacks', {
        data: {
            status: status, //modifiedData.status,
            ip_address: '126.12.29.29', //modifiedData.ip_address,
            shop_id: this.$route.params.id //modifiedData.shop_id
          }
        })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    },

    Popupmessage()
    {
       this.messageinfo = true;
    },
    closeInfoPopup(){
       this.messageinfo = false;
    },

    

  }
}
</script>

<style>
h2{
 
 font-family: Georgia, 'Times New Roman', Times, serif;
 text-align: center;
}
body{
  background-image: url(./assets/img/backimg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btns{
  width: 100px;
  height: 35px;
  background:none;
  border-radius: 15px;
  margin: 15px;
  border: 3px solid #fff;
  cursor: pointer;
}

.btns:hover{
  border: 3px solid rgb(146, 94, 110);
}

</style>
