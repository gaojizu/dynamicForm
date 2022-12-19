<template>
  <div id="app">
    <formDynamic :formConf='loginModule' @formMit='formMit' />
  </div>
</template>

<script>

import formDynamic from './components/formDynamic/indexView.vue'
import loginModule from './components/formConf/loginModule'
export default {
  name: 'App',
  components: {
    formDynamic
  },
  data() {
    return {
      loginModule
    }
  },
  methods: {
    formMit(e) {
      console.log(e)
    }
  }
}
</script>

<style>

</style>
