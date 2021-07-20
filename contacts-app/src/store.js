import { createStore } from 'vuex'

const store = createStore(
  { state(){
      return{
        contacts: [],
      }
    },
    mutations:{
      addNewEntry(state){
        console.log(state.contacts)
        state.contacts.push({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            groups: [],
            social_media: [],
            user_img: 'avatar.png'
        })
        console.log(state.contacts)
      },
      changeFirstName(state,payload){
        if(state.contacts.length > 0 && payload.id < state.contacts.length && 
          payload.id >= 0 && payload.first_name.length>0){
          state.contacts[payload.id].first_name = payload.first_name
        }
      },
      changeLastName(state,id,last_name){
        if(state.contacts.length > 0 && id < state.contacts.length && id >= 0){
          state.contacts[id].last_name = last_name
        }
      },
      changeEmail(state,id,email){
        if(state.contacts.length > 0 && id < state.contacts.length && id >= 0){
          state.contacts[id].email = email
        }
      },
      changePhone(state,id,phone){
        if(state.contacts.length > 0 && id < state.contacts.length && id >= 0){
          state.contacts[id].phone = phone
        }
      },
      changeGroups(state,id,groups){
        if(state.contacts.length > 0 && id < state.contacts.length && id >= 0){
          state.contacts[id].groups = {...groups}
        }
      },
      changeSocialMedia(state,id,sm){
        if(state.contacts.length > 0 && id < state.contacts.length && id >= 0){
          state.contacts[id].social_media = {...sm}
        }
      },
      changeUserImg(state,id,user_img){
        if(state.contacts.length > 0 && id < state.contacts.length && id >= 0){
          state.contacts[id].user_img = user_img
        }
      },
      changeContact(state,id,contact){
        console.log(state.contacts);
        console.log(id);
        console.log(contact);
        //this.changeFirstName(state,id,contact.first_name)
        //this.changeLastName(state,id,contact.last_name)
        //this.changeEmail(state,id,contact.email)
        //this.changePhone(state,id,contact.phone)
        //this.changeGroups(state,id,contact.groups)
        //this.changeSocialMedia(state,id,contact.social_media)
        //this.changeUserImg(state,id,contact.user_img)
      },
      removeContact(state,id){
        state.contact = state.contact.filert((itm,idx)=>(id!=idx))
      }
    }
  }
)
export default store
