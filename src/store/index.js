import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'

import Form from './models/form'
import forms from './modules/form'

import User from './models/user'
import users from './modules/user'

import Entry from './models/entry'
import entries from './modules/entry'

import Memo from './models/memo'
import memos from './modules/memo'

Vue.use(Vuex)
const database = new VuexORM.Database()
database.register(Form, forms)
database.register(User, users)
database.register(Entry, entries)
database.register(Memo, memos)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    count: state => { return state.count },
    users: (state, getters) => {
      return getters['entities/users']().with('form').get()
    },
    entries: (state, getters) => {
      return getters['entities/entries']().with('user').with('memos').get()
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  plugins: [VuexORM.install(database)]
})
