<template>
  <article class="hourly__weather__item">
    <time class="hourly__weather__item__time">{{ time }}H00</time>
    <img
      :src="require(`../../../assets/icons/weatherForecast/${icon}.svg`)"
      :alt="iconDescription"
      class="hourly__weather__item__icon"
    />
    <span class="hourly__weather__item__temp">
      {{ calculateTemp(temp, 0) }}°
    </span>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { calculateTemp } from "@/utils";
export default defineComponent({
  name: "WeatherItem",
  props: {
    time: {
      type: Number,
      required: true,
    },
    temp: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    iconDescription: {
      type: String,
    },
  },

  setup() {
    return { calculateTemp };
  },
});
</script>

<style lang="scss" scoped>
.hourly__weather__item {
  height: 180px;
  width: 85px;
  margin: 10px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  z-index: -2;
  color: rgb(255, 255, 255);
  font-weight: bold;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    z-index: -1;
  }

  &:nth-child(2) {
    background: #6f6b65;

    &::after {
      height: 100%;
      top: 50%;
      background: #18100e;
      border-radius: 50px 0 0 0;
    }
  }

  &:nth-child(3) {
    background: #000000;

    &::after {
      height: 100%;
      top: 50%;
      background: #77737d;
    }
  }

  &:nth-child(4) {
    background: #000000;

    &::after {
      height: 50%;
      top: 0;
      background: #5a558a;
      border-radius: 0 0 50px 0;
    }
  }

  &__icon {
    width: 70px;
    height: 70px;
    margin: 15px auto;
  }
}
</style>
