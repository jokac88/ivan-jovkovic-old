<template>
  <section id="languages" class="languages">
    <HeaderLeft
      :heading="$route.path === '/' ? 'Languages' : 'Jezici'"
      property="languages"
    />
    <b-collapse id="languages-collapse" visible>
      <div class="languages-wrapper">
        <div
          v-for="language in languages"
          :key="language.language"
        >
          <p class="language">{{ language.language }}</p>
          <div class="meter">
            <span
              :style="{
                width: language.percentage
                  ? language.percentage
                  : language.procenat,
              }"
            ></span>
          </div>
          <p class="level">{{ language.level }}</p>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import HeaderLeft from "@/components/left/HeaderLeft.vue";

export default {
  props: {
    languages: Array,
  },
  components: {
    HeaderLeft,
  },
};
</script>

<style lang="scss">
.languages {
  &-wrapper {
    padding: 0 20px 15px;

    .language {
      padding: 0 10px 5px;
      font-weight: 700;
    }

    .meter {
      height: 30px;
      position: relative;
      background-color: var(--bg-meter);
      -moz-border-radius: 20px;
      -webkit-border-radius: 20px;
      border-radius: 20px;
      padding: 10px;
      -webkit-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.2);
      -moz-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.2);
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.2);

      & > span {
        display: block;
        height: 100%;
        -moz-border-radius: 20px;
        -webkit-border-radius: 20px;
        border-radius: 20px;
        background-color: var(--bg-meter);
        -webkit-box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.2);
        -moz-box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.2);
        box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.2),
          inset 0 -2px 6px rgba(0, 0, 0, 0.4);
        position: relative;
        overflow: hidden;
        background-size: 30px 30px;
        background-image: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        );
        -moz-background-image: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        );
        -webkit-background-image: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.15) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.15) 50%,
          rgba(255, 255, 255, 0.15) 75%,
          transparent 75%,
          transparent
        );
        animation: animate-stripes 3s linear infinite;
      }

      @keyframes animate-stripes {
        0% {
          background-position: 0 0;
        }

        100% {
          background-position: 60px 0;
        }
      }
    }

    .level {
      padding: 5px 10px 20px;
      text-align: right;

      &:last-child {
        padding-bottom: 0;
      }
    }
  }
}
</style>
