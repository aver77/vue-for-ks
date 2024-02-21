<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <router-link class="router" to="/person">Перейти просмотру людей</router-link>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout
  }
}
</script>

<style>
    .router {
        margin: 0 16px;
    }
</style>
