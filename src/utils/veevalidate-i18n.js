import { extend, configure } from 'vee-validate'
import { required, email, min, length, confirmed, max } from 'vee-validate/dist/rules'

import { i18n } from './i18n'

configure({
  defaultMessage: (field, values) => {
    // override the field name.
    values._field_ = i18n.t(`fields.${field}`)
    console.log(values._field_)
    return i18n.t(`validation.${values._rule_}`, values)
  }
})

extend('email', email)
extend('required', required)
extend('min', min)
extend('length', length)
extend('confirmed', confirmed)
extend('max', max)

// Custom validate
extend('name', {
  validate: value => {
    console.log((/^\d+/).test(value))
    return !(/^\d+/).test(value)
  },
  message: '不能以纯数字为昵称'
})
