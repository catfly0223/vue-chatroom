<template>
  <div id="app">
    <div v-if="this.roomName === ''">
      <Entrance v-on:enter-room="enterRoom"/>
    </div>
    <div v-else>
      <Room :roomName="roomName" />
    </div>
  </div>
</template>

<script>
import Entrance from './components/Entrance.vue'
import Room from './components/Room.vue'

export default {
  name: 'App',
  components: {
    Entrance,
    Room
  },
  data(){
    return{
      roomName: ""
    }
  },
  methods: {
    enterRoom(roomName){
      alert(roomName + "に入場します")
      this.roomName = roomName
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
