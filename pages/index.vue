<template>
  <section>
    <h1>Hello Hello</h1>
    <list :list="colours"></list>
  </section>
</template>

<script>
  import List from '~/components/List.vue'

  export default {
    name: 'index',
    components: { List },
    data() {
      return {
        colours: ['purple', 'yellow', 'mellow'],
      }
    },
  }
</script>
