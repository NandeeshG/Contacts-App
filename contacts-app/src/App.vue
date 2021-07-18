<template>
  <div id="root_div" >

  <form id="input_form" >
    <input v-model="first_name" placeholder="First Name" />
    <input v-model="last_name" placeholder="Last Name" />
    <input v-model="email" placeholder="Email" />
    <input v-model="phone" placeholder="Phone" />
  </form>

  <hr/>

  <ContactRow :first_name="first_name" :last_name="last_name" 
    :avatar_src="default_img" :groups="groups" :email="email"
    :phone="phone" :social_media="social_media" />

  </div>
</template>

<script>
import ContactRow from './components/ContactRow.vue'

export default {
  data(){
    return{
      first_name: 'Nandeesh',
      last_name: 'Gupta',
      email: 'nandeeshgupta@gmail.com',
      phone: '8860024488',
      groups: ['IHS','DPS','Codechef'],
      social_media: [],
      default_img: 'avatar.png'
    }
  },
  name: 'App',
  components: {
    ContactRow
  }
}
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
