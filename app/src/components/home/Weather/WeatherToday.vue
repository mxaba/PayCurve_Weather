<template>
  <article class="hourly__weather">
    <h3 className="">Hourly weather today</h3>
    <WeatherItem
      v-for="(item, index) in weather.slice(1, 4)"
      :key="item.dt"
      :time="calculateHour(time.hour, index + 1)"
      :temp="item.temp"
      :icon="item.weather[0].icon"
      :iconDescription="item.weather[0].description"
    />
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { BasicWeatherInfo, Timezone } from "@/allTypes";
import WeatherItem from "./WeatherItem.vue";
import { calculateHour } from "@/utils";

export default defineComponent({
    name: 'WeatherToday',
  components: {
    WeatherItem
  },
  props: {
    weather: {
      type: Array as () => Partial<BasicWeatherInfo>[],
      required: true
    },
    time: {
      type: Object as () => Timezone,
      required: true
    }
  },

  setup() {
    return { calculateHour };
  }
});
</script>

<style></style>
