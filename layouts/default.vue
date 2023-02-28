<template>
  <section class="default-layout">

    <Background/>

    <Pace/>

    <NavBar/>

    <SideNav :navigation="navigation"/>

    <ContactMe :personalInfo="personalInfo"/>

    <ColorModePicker/>

    <CloseSideNav/>

    <BackToTop :active="isScroll"/>

    <Nuxt/>
  </section>
</template>

<script>
import {mapState} from "vuex";
import Background from "@/components/Background.vue";
import Pace from "@/components/Pace.vue";
import NavBar from "@/components/NavBar.vue";
import SideNav from "@/components/SideNav.vue";
import ContactMe from "@/components/ContactMe.vue";
import ColorModePicker from "@/components/ColorModePicker.vue";
import CloseSideNav from "@/components/CloseSideNav.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  data: () => ({
    isScroll: false,
  }),
  head() {
    return {
      bodyAttrs: {
        class: [
          this.isLoading ? "isLoading" : "",
          this.isToggle ? "isToggle" : "",
        ],
      },
    };
  },
  components: {
    Background,
    Pace,
    NavBar,
    SideNav,
    ContactMe,
    ColorModePicker,
    CloseSideNav,
    BackToTop,
  },
  computed: {
    ...mapState({
      personalInfo: (state) => state.store.data['personal-info'],
      navigation: (state) => state.store.data.navigation,
      isLoading: (state) => state.store.isLoading,
      isToggle: (state) => state.store.isToggle,
    }),
  },
  methods: {
    scroll() {
      this.isScroll = window.scrollY > 600;
    },
    onResize() {
      const body = document.querySelector("body");
      if (window.innerWidth >= 768 && this.isToggle) {
        return body.classList.remove("isToggle");
      } else if (window.innerWidth < 768 && this.isToggle) {
        return body.classList.add("isToggle");
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scroll, {passive: true});
    window.addEventListener("resize", this.onResize, {passive: true});
  },
};
</script>

<style lang="scss">
</style>

