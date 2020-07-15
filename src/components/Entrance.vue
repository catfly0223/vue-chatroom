<template>
  <div class="entrance">
    <form @submit="enterRoom">
      <input type="text" v-model="roomName">
      <input type="submit" value="GO" class="btn">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Entrance',
  data() {
    return {
      roomName:""
    }
  },
  methods:{
    enterRoom(e) {
      e.preventDefault()

      this.$emit("enter-room",this.roomName)
      this.roomName = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
