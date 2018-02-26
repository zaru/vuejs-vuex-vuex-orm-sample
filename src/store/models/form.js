import { Model } from '@vuex-orm/core'

export default class Form extends Model {
  static entity = 'forms'

  static fields () {
    return {
      id: this.attr(null),
      name: this.attr('')
    }
  }
}
