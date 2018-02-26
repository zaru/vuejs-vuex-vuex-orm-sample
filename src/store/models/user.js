import { Model } from '@vuex-orm/core'
import Form from './form'

export default class User extends Model {
  static entity = 'users'

  static fields () {
    return {
      id: this.attr(null),
      form_id: this.attr(null),
      name: this.attr(''),
      form: this.belongsTo(Form, 'form_id')
    }
  }
}
