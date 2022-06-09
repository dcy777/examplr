<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="button" value="获取笑话" v-on:click="getGoodSentense()">

    <h1>笑话</h1>
    <div>
      <ol>
      <li v-for="j in jokes" :key="j.id"><p>{{j.content}}</p>
        <span>{{j.updateTime}}</span>
      </li>
    </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      from:'',
      jokes:[]
    }
  },
  methods:{
    getGoodSentense(){ 
      this.axios({
        url:"/getJokesByRandom",
        methods:'post',
        params:{
          apiKey:'26LVerf7afd45b55c8869d2f26aa8a02b6b052ed0407f87',
          pageSize:4
        }
      }).then(res=>{
        this.jokes=res.data.result;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
/* p {
  width: 1000px;
  height: 100%;
  background-color: yellow;
} */
</style>
