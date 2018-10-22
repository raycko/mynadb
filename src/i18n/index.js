import Vue from 'vue'

// add translations directly to the application
Vue.i18n.add('en', require('./en.json'))
Vue.i18n.add('nl', require('./nl.json'))

// set the start locale to use
Vue.i18n.set('nl')

// set fallback for non-translated strings
Vue.i18n.fallback('en')
