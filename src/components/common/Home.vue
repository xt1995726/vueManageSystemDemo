<template>
  <div class="wrapper">
		<v-head></v-head>
		<v-sidebar></v-sidebar>
  </div>
</template>
<script>
import vHead from './Header.vue'
import vSidebar from './Sidebar.vue'
export default {
  data() {
    return {
      collapse: false,
    }
  },
  components: {
    vHead,
    vSidebar,
  }
}
</script>