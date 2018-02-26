<template>
  <div class="hello">
    <ul>
      <li v-for="item in items" :key="item.name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true

export default {
  name: 'HelloWorld',
  data () {
    return {
      items: []
    }
  },
  methods: {
    loadData () {
      axios.get('http://0.0.0.0:9999/')
        .then((response) => {
          console.log(response);
          this.items = response.data
        })
    }
  },
  mounted () {
    this.loadData();
    setInterval(() => {
      this.loadData();
    }, 2000);
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
