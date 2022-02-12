<template>
  <article class="hourly__weather">
    <h3 className=""></h3>
    <WeatherItem
      v-for="(item, index) in weather.filter((item, itemIndex) =>
        availableIndexes.includes(itemIndex)
      )"
      :key="item.dt"
      :time="calculateHour(time.hour, 24 - time.hour + 10 + index * 4)"
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
  name: 'WeatherTomorrow',
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

  setup(prp) {
    const availableIndexes = [
      24 - prp.time.hour + 9,
      24 - prp.time.hour + 13,
      24 - prp.time.hour + 17
    ];

    return { calculateHour, availableIndexes };
  }
});
</script>

<style></style>
