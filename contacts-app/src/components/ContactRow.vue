<template>

  <div class="root-container flex-row-nowrap">
    <img class="small-image round-image" :src="avatar_src" />

    <div class="detail-container flex-col-nowrap">
      <img class="small-image round-image" :src="avatar_src" />
      <img class="small-image round-image" :src="avatar_src" />
      <!--<div class="name-container height-limit">
        <h3>{{first_name}}</h3>
        <h3>{{last_name}}</h3>
      </div>
      <div class="group-container height-limit">
        <h4 v-for="group in groups" :key="group" class="group-pill">
          {{group}}
        </h4>
      </div>-->
    </div>

    <div class="contact-container flex-col-nowrap">
      <div class="email-phone-container flex-row-nowrap">
        <button class="flat-button round-button-10">{{email}}</button>
        <button class="flat-button round-button-10">{{phone}}</button>
      </div>
      <div class="social-media-container flex-row-nowrap">
        <div v-for="sm in social_media" :key="sm.link">
          <button class="icon-button">
            <a :href="sm.link" target="_blank" class="icon-anchor">
              <img class="round-image small-image" :src="sm.image_src" />
            </a>
          </button>
        </div>
      </div>
    </div>

    <div class="action-container flex-col-nowrap">
      <div class="action-1-container flex-row-nowrap">
        <!-- TODO -> Edit icon here -->
        <button class="round-button-10">EDIT</button>
      </div>
      <div class="action-2-container flex-row-nowrap">
        <!-- TODO -> Delete icon here -->
        <button class="round-button-10">DELETE</button>
      </div>
    </div>
  </div>

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

.flex-row-nowrap{
  display: flex;
  flex: row nowrap;
}
.flex-row-wrap{
  display: flex;
  flex: row wrap;
}
.flex-col-nowrap{
  display: flex;
  flex: column nowrap;
}
.flex-col-wrap{
  display: flex;
  flex: column wrap;
}
.round-image{
  border-radius: 50%;
}
.small-image{
  width: 2.5em;
  height: 2.5em;
  border: 2px dashed orange;
}
.image-container{
  display: flex;
  flex: 0.5 0.5 5px;
}
.flat-button{
  
}
.round-button-10{
  border: 10%;
}
.root-container{
  display: flex;
  justify-content: flex-start;
  background-color: #e6ffff;
  height: 100px;
}
.group-pill{
  border: 1px solid grey;
  font-size: 0.5em;
  border-radius: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.height-limit{
  height: 50%;
}
.detail-container{
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
