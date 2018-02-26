<template>
  <div class="user-list">
    <h1>user list</h1>
    <button @click="increment">inc</button>
    <p>{{ count }}</p>
    <ul>
      <li v-for="user in users">
        <dl>
          <dt>User ID</dt>
          <dd>{{ user.id }}</dd>
          <dt>Form</dt>
          <dd>{{ user.form.name }}</dd>
        </dl>
      </li>
    </ul>

    <ul>
      <li v-for="entry in entries">
        <dl>
          <dt>Entry ID</dt>
          <dd>{{ entry.id }}</dd>
          <dt>Entry ID</dt>
          <dd>{{ entry.user.name }}</dd>
          <dt>Memo</dt>
          <dd>
            <ul>
              <li v-for="memo in entry.memos">
                {{ memo.body }}
              </li>
            </ul>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.withCredentials = true
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'UserList',
  data () {
    return {
    }
  },
  methods: {
    ...mapMutations([
      'increment',
    ]),
  },
  mounted () {
    axios.get('http://0.0.0.0:9999/api/user.php')
      .then((res) => {
        this.$store.dispatch('entities/users/create', { data: res.data })
      })
    axios.get('http://0.0.0.0:9999/api/form.php')
      .then((res) => {
        this.$store.dispatch('entities/forms/create', { data: res.data })
      })
    axios.get('http://0.0.0.0:9999/api/entry.php')
      .then((res) => {
        this.$store.dispatch('entities/entries/create', { data: res.data })
        const memos = []
        res.data.forEach(v => { memos.push(...v.memos) } )
        this.$store.dispatch('entities/memos/create', { data: memos })
      })
  },
  computed: {
    ...mapGetters([
      'count',
      'users',
      'entries'
    ])
  }
}
</script>

<style scoped>
ul {
  width: 70%;
  margin: 0 auto;
  text-align: left;
}
</style>
