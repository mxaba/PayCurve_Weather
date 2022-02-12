<template>
  <section class="weatherFocus">
    <img
      :src="require(`../../assets/icons/weatherForecast/${iconCode}.svg`)"
      :alt="iconDescription"
      class="weatherFocus__icon"
    />
    <span class="weatherFocus__temp">
      <span class="">current temperature</span>
      {{ calculateTemp(temperature, 1) }}<sup>°</sup>
    </span>
    <span class="weatherFocus__place"> {{ city }}, {{ country }} </span>
  </section>
</template>

<script lang="ts">
import { calculateTemp } from "@/utility";
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeatherForecast",
  props: {
    iconCode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    temperature: {
      type: Number,
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

<style lang="css" scoped>
.weatherFocus {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 30px 0;
}
.weatherFocus__title {
  font-size: 1rem;
  margin-bottom: 15px;
}
.weatherFocus__icon {
  margin: 10px;
  width: 100px;
  height: 100px;
  margin-bottom: 0;
}
.weatherFocus__temp {
  font-size: 3em;
  font-weight: bold;
}
.weatherFocus__temp sup {
  font-size: 1.5rem;
}
.weatherFocus__place {
  color: #9ca3ad;
}
@media all and (min-width: 1000px) {
  .weatherFocus__title {
    margin: 0;
    font-size: 0.8rem;
  }
}
</style>
