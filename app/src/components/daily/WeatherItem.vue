<template>
  <article class="daily__hourly-weather__item">
    <span class="item__temp">{{ calculateTemp(temp, 0) }}°</span>
    <time class="item__hour">{{ hour }}H00</time>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { calculateTemp } from "@/utils";
export default defineComponent({
  name: "WeatherItem",
  props: {
    hour: { type: Number, required: true },
    temp: { type: Number, required: true }
  },
  setup() {
    return { calculateTemp };
  }
});
</script>

<style lang="scss" scoped>
.daily__hourly-weather {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 0;
  margin-bottom: 15px;

  &__item {
    position: relative;
    overflow: hidden;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    color: #fff;
    width: 40vw;
    height: 40vw;
    max-width: 180px;
    max-height: 180px;
    margin: 20px 0px;
    border-radius: 20px;
    box-shadow: 0px 13px 39px -1px rgba(179, 177, 179, 1);

    &::after {
      content: "";
      width: 100%;
      height: 200%;
      top: -78%;
      left: -40%;
      position: absolute;
      transform: rotate(45deg);
    }

    span {
      z-index: 10;
      position: relative;
    }

    .item__temp {
      font-size: 3.3rem;
      transform: translate(8px, -7px);
    }

    .item__hour {
      position: absolute;
      bottom: 15px;
    }

    &:first-child {
      background: #514f4b;

      &::after {
        background-color: #a5a29e;
      }
    }

    &:nth-child(2) {
      background: #0e0812;

      &::after {
        background-color: #969090;
      }
    }

    &:nth-child(3) {
      background: #6c676e;

      &::after {
        background-color: #312836;
      }
    }

    &:nth-child(4) {
      background: #5f6265;

      &::after {
        background-color: #a5a29e;
      }
    }
  }
}

@media all and (min-width: 350px) {
  .daily__hourly-weather .item__temp {
    font-size: 4rem;
  }
}
</style>
