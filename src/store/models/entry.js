import { Model } from '@vuex-orm/core'
import Form from './form'
import User from './user'
import Memo from './memo'

export default class Entry extends Model {
  static entity = 'entries'

  static fields () {
    return {
      id: this.attr(null),
      body: this.attr(''),

      form_id: this.attr(null),
      form: this.belongsTo(Form, 'form_id'),

      user_id: this.attr(null),
      user: this.belongsTo(User, 'form_id'),

      memos: this.hasMany(Memo, 'entry_id')
    }
  }
}
