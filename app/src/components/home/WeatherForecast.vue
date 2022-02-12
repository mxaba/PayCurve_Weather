<template>

  <section class="weather-forecast">
    <img
      :src="require(`../../assets/icons/weatherForecast/${iconCode}.svg`)"
      :alt="iconDescription"
      class="weather-forecast__icon"
    />
    <span class="weather-forecast__temp">
      <span class="">current temperature</span>
      {{ calculateTemp(temperature, 1) }}<sup>°</sup>
    </span>
    <span class="weather-forecast__place"> {{ city }}, {{ country }} </span>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { calculateTemp } from "@/utils";
export default defineComponent({
  name: "WeatherForecast",
  props: {
    iconCode: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    temperature: {
      type: Number,
      required: true
    },
    iconDescription: {
      type: String
    }
  },
  setup() {
    return { calculateTemp };
  }
});
</script>

<style lang="css" scoped>
.weather-forecast {
	 width: 100%;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 flex-flow: column wrap;
	 padding: 30px 30px;
}
 .weather-forecast__title {
	 font-size: 1rem;
	 margin-bottom: 15px;
}
 .weather-forecast__icon {
	 margin: 0;
	 width: 100px;
	 height: 100px;
	 margin-bottom: 03px;
}
 .weather-forecast__temp {
	 font-size: 1em;
	 font-weight: bold;
}
 .weather-forecast__temp sup {
	 font-size: 1rem;
}
 .weather-forecast__place {
	 color: #9ca3ad;
}
 @media all and (min-width: 1000px) {
	 .weather-forecast__title {
		 margin: 0;
		 font-size: 0.8rem;
	}
}
 
</style>
