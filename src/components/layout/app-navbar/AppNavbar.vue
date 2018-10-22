<template>
    <vuestic-navbar>
        <header-selector slot="selector" :isOpen.sync="valueProxy"/>
        <span slot="logo">
            <vuestic-icon-vuestic/>
        </span>
        <span slot="center">
            {{$t('navbar.welcome')}}
        </span>
        <language-dropdown class="col nav-item"/>
    </vuestic-navbar>
</template>

<script>
import VuesticIconVuestic from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'
import VuesticNavbar from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
import HeaderSelector from './components/HeaderSelector'

import LanguageDropdown from './components/dropdowns/LanguageDropdown'

export default {
  name: 'app-navbar',

  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    LanguageDropdown,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    valueProxy: {
      get () {
        return this.isOpen
      },
      set (opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
}
</script>
