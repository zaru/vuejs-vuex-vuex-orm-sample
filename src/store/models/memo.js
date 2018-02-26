import { Model } from '@vuex-orm/core'
import Entry from './entry'
import User from './user'

export default class Memo extends Model {
  static entity = 'memos'

  static fields () {
    return {
      id: this.attr(null),
      body: this.attr(''),

      entry_id: this.attr(null),
      entry: this.belongsTo(Entry, 'entry_id'),

      assign_id: this.attr(null),
      user: this.belongsTo(User, 'assign_id')
    }
  }
}
