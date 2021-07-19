<template>
  <div id="root_div" >
    <div class="MAIN">
      <input v-model="tmp.first_name" placeholder="First Name" />
      <input v-model="tmp.last_name" placeholder="Last Name" />
      <input v-model="tmp.email" placeholder="Email" />
      <input v-model="tmp.phone" placeholder="Phone" />

      <div style="display:flex; flex-flow:row wrap;">
        <div v-for="(group,id) in tmp.groups" :key="id">
          <h5>{{group}}</h5>
          <button @click="removeGroup(id)">x</button>
        </div>
        <input v-model="tmp.group" placeholder="New group" />
        <button @click="addGroup">ADD</button>
      </div>

      <button @click="addTmp">ADD CONTACT</button>
      <button @click="clearTmp">CLEAR ALL</button>
    </div>

<!-- Add required star in firstname. Add regex checkers in input fields -->
    
    <hr/>
    
    <ContactRow v-for="(c,id) in contacts" :key="id" 
    :first_name="c.first_name" :last_name="c.last_name" 
    :avatar_src="c.user_img" :groups="c.groups" :email="c.email"
    :phone="c.phone" :social_media="c.social_media" />

  </div>
</template>

<script>
  import ContactRow from './components/ContactRow.vue'

  export default {
    data(){
      return{
        tmp:{
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            group: '',
            groups: [],
            sm: '',
            social_media: [],
            user_img: 'avatar.png'
        },
        master_social_media: [
            {link:'https://www.facebook.com', src:'facebook.png', text:'Facebook'},
            {link:'https://www.github.com', src:'github.png', text:'Github'},
            {link:'https://www.instagram.com', src:'instagram.png', text:'Instagram'},
            {link:'https://www.linkedin.com', src:'linkedin.png', text:'Linkedin'},
            {link:'https://www.twitter.com', src:'twitter.png', text:'Twitter'},
            {link:'https://www.youtube.com', src:'youtube.png', text:'Youtube'},
        ],
        default_img: 'avatar.png'
      }
    },
    methods:{
      removeGroup(id){
        this.tmp.groups = this.tmp.groups.filter(
                (g,idx)=>(idx!=id));
      },
      addGroup(){
        this.tmp.groups.push(this.tmp.group);
      },
      addTmp(){
        if(this.tmp.first_name.length>0 || this.tmp.email.length>0){
          this.$store.commit('addNewEntry');
          this.$store.commit('changeContact',this.contactsLength()-1,this.tmp);
        }
      },
      clearTmp(){
        this.tmp = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            group: '',
            groups: [],
            sm: '',
            social_media: [],
            user_img: 'avatar.png'
            }
      }
    },
    name: 'App',
    components: {
        ContactRow
    },
    computed:{
      contactsLength(){
        console.log(this.$store.contacts.length)
        return this.$store.contacts.length
      },
      contacts(){
        return this.$store.contacts
      },
    }
  }
</script>

<style>

.MAIN{
  display:flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }*/
</style>
