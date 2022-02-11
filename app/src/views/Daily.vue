<template>
  <div class="daily">
    <div class="daily__main">
      <WeatherForecast
        :main="selectedDayWeatherInfo.mainData"
        :additional="selectedDayWeatherInfo.additionalData"
      />
    </div>
    <div class="daily__additional">
      <Weather :temp="selectedDayWeatherInfo.temperature" />
      <DaysList
        :weather="dailyWeather"
        :activeDayIndex="currentSelectedDayIndex"
        @change-active-day="currentSelectedDayIndex = $event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { getWeatherInfoAboutSelectedDay } from "@/utils";
import { useStore } from "vuex";
import WeatherForecast from "@/components/daily/WeatherForecast.vue";
import Weather from "@/components/daily/Weather.vue";
import DaysList from "@/components/daily/DaysList.vue";
export default defineComponent({
  components: {
    WeatherForecast,
    Weather,
    DaysList
  },
  setup() {
    const store = useStore();
    const currentSelectedDayIndex = ref(0);
    const dailyWeather = store.state.dailyWeather.daily;

    const selectedDayWeatherInfo = computed(() =>
      getWeatherInfoAboutSelectedDay(
        currentSelectedDayIndex.value,
        dailyWeather
      )
    );

    return {
      currentSelectedDayIndex,
      selectedDayWeatherInfo,
      dailyWeather
    };
  }
});
</script>

<style lang="scss" scoped>
.daily {
  max-width: 550px;
}
@media all and (min-width: 1000px) {
  .daily {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 40px 0;
    max-width: 100%;

    &__additional {
      width: 500px;
    }
  }
}
</style>
