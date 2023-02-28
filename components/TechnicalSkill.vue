<template>
  <b-col cols="6" lg="4" class="technical-skill">
    <p
      class="technical-skill-text"
      :class="'p-' + technology.icon"
      :style="{ color: technology.color }"
    >{{ technology.technology }}</p>
    <div
      class="c100"
      :class="[technology.icon, technology.percentage]"
    >
      <span>
        <img
          v-if="technology.icon"
          :src="require('~/assets/icon/' + technology.icon + '.png')"
          :title="technology.technology"
          :alt="require('~/assets/icon/' + technology.icon + '.png')"
          class="logo"
        />
        <DefaultImage v-else class="default-image" />
      </span>
      <div class="slice">
        <div class="bar" :style="{ borderColor : technology.color }"></div>
        <div class="fill" :style="{ borderColor : technology.color }"></div>
      </div>
    </div>
  </b-col>
</template>

<script>
import DefaultImage from "~/assets/svg/default-image.svg?inline";

export default {
  props: {
    technology: Object,
  },
  components: {
    DefaultImage,
  },
};
</script>

<style lang="scss">
.technical-skill {
  &:nth-last-child(-n + 3) {
    .c100 {
      margin-bottom: 0;
    }
  }

  @include media-breakpoint-down(md) {
    &:nth-last-child(3) {
      .c100 {
        margin-bottom: 25px;
      }
    }
  }

  &-text {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  .c100 {
    margin: 0 auto 25px;
    float: none;
    font-size: 130px;
    background-color: $mercury;

    &::after {
      background-color: var(--bg-right);
      -webkit-transition: $transition-2;
      -moz-transition: $transition-2;
      -o-transition: $transition-2;
      -ms-transition: $transition-2;
      transition: $transition-2;
    }

    .logo {
      width: 100px;
    }

    .default-image {
      width: 64px;
      height: 64px;

      .path {
        fill: var(--color-right);
      }
    }
  }
}
</style>
