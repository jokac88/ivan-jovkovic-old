<template>
  <Page :data="data" />
</template>

<script>
import Page from "@/components/Page.vue";
import { mapState } from "vuex";

export default {
  components: {
    Page,
  },
  async fetch({ store, error }) {
    try {
      if (process.env.NODE_ENV === "production") {
        await store.dispatch("store/fetchData", {
          url: "v3/b/5f4bc5b2993a2e110d39a754"
        });
        return;
      }
      await store.dispatch("store/fetchData", {
        url: "/rs"
      });
    } catch (e) {
      error({
        message: "Proverite internet konekciju",
      });
    }
  },
  computed: mapState({
    data: (state) => state.store.data,
  }),
};
</script>
