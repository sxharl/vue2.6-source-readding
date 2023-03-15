/* @flow */

import { mergeOptions } from '../util/index'

export function initMixin (Vue: GlobalAPI) {
  Vue.mixin = function (mixin: Object) {
    // 将传入的对象成员拷贝到 this.$options (Vue本身) 中去
    this.options = mergeOptions(this.options, mixin)
    return this
  }
}
