<template>
  <div class="MAIN">
      <div class="BLOCK" id="avatar_container">
        <img class="AVATAR" :src="avatar_src" alt="Avatar"/>
      </div>
      <div class="BLOCK">
          <div class="ROW">
            <h3 class="INFO_HEADER" style="padding:2px 0px;">{{first_name}}</h3>
            <h3 class="INFO_HEADER" style="padding:2px 0px;">{{last_name}}</h3>
            <span v-if="groups.length">,</span>
            <div class="ROW GROUP_CONTAINER">
              <h5 v-for="(group,id) in groups" class="GROUP" :key="id">{{group}}</h5>
            </div>
          </div>
          <div class="ROW">
            <button class="INFO_BUTTON" title="Click to Copy">{{'Mob: '+(phone || 'Unavailable')}}</button>
            <button class="INFO_BUTTON" title="Click to Email">{{email || 'No Email ID'}}</button>
          </div>
      </div>
      <div class="BLOCK" id="SMBLOCK">
          <div class="ROW">
            <h5 v-for="(sm,id) in social_media.slice(0,3)" class="SOCIAL_MEDIA" :key="id">
              <a target="_blank" :href="sm.link">
                <img class="ICON" :src="sm.src" :alt="sm.text"/>
              </a>
            </h5>
          </div>
          <div class="ROW">
            <h5 v-for="(sm,id) in social_media.slice(3)" class="SOCIAL_MEDIA" :key="id">
              <a target="_blank" :href="sm.link">
                <img class="ICON" :src="sm.src" :alt="sm.text"/>
              </a>
            </h5>
          </div>
      </div>
  </div>
  
  <br/> <br/>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  name: 'ContactRow',
  props: {
    first_name: String,
    last_name: String,
    avatar_src: String,
    groups: Array,
    email: String,
    phone: String,
    social_media: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MAIN{
  display: flex;
  flex-flow: row wrap; 
  justify-content: flex-start; 
  background-color: #eeeeee; 
}

.BLOCK{
  display: flex;
  flex-flow: column nowrap; 
  justify-content: space-around;
  margin: 2px 2px;
}

.ROW{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}

.GROUP_CONTAINER{
}
.GROUP{
  margin: 0.25em 0.5em;
  padding: 2px;
  border-right: 1px solid red;
  border-left:  1px solid red;
  border-radius: 20%;
}

.INFO_HEADER{
  margin: 0.25em 0.15em;
  padding: 3px;
  /*border-radius: 10%;
  border: solid 1px #cccccc;*/
  font-family: Helvetica;
}

.INFO_BUTTON{
  margin: 0.25em 0.5em;
  padding: 3px; 
  font-size: 1em;
/*  border-radius: 10%;
  border: solid 1px #cccccc; */
}

.ICON{
  height: 1.5em;
  width: 1.5em;
  border-radius: 50%;
  margin: 0.25em 0.5em;
}

.AVATAR{
  height: 5em;
  width: 5em;
  border-radius: 50%;
  border: 3px solid black;
  margin: 0.25em 0.35em;
}

/* Med-Small screens */
@media all and (max-width: 600px) {
  #avatar_container {
    width: 100%;
    align-items: center;
  }
  .MAIN{
    justify-content: space-around;
  }
}

/* Small screens */
@media all and (max-width: 510px) {
  .BLOCK{
    width: 100%;
  }
  .ROW{
    justify-content: center;
    flex-wrap: wrap;
  }
  #SMBLOCK{
    flex-direction: row;
    justify-content: center;
  }
}

</style>
