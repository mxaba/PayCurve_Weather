<template>
  <ul class="info">
    <span class="info__title">info</span>
    <li class="info__item">
      <span class="">wind</span>
      <img
        src="@/assets/icons/info/wind.svg"
        alt="wind"
        class="info__item__icon"
      />
      <span class="info__item__text">{{ wind }}m/s</span>
    </li>
    <li class="info__item">
      <span class="">pressure</span>
      <img
        src="@/assets/icons/info/pressure.svg"
        alt="pressure"
        class="info__item__icon"
      />
      <span class="info__item__text">{{ pressure }}hPa</span>
    </li>
    <li class="info__item">
      <span class="">humidity</span>
      <img
        src="@/assets/icons/info/humidity.svg"
        alt="humidity"
        class="info__item__icon"
      />
      <span class="info__item__text">{{ humidity }}%</span>
    </li>
    <li class="info__item">
      <span class="">cloudiness</span>
      <img
        src="@/assets/icons/info/cloudiness.svg"
        alt="cloudiness"
        class="info__item__icon"
      />
      <span class="info__item__text">{{ cloudiness }}%</span>
    </li>
  </ul>
</template>


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Info",
  props: {
    wind: {
      type: Number,
      required: true
    },
    humidity: {
      type: Number,
      required: true
    },
    pressure: {
      type: Number,
      required: true
    },
    cloudiness: {
      type: Number,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.info {
  margin: 15px 0 25px 0;
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 0;

  &__title {
    font-weight: bold;
    margin-bottom: 14px;
  }

  &__item {
    width: 100%;
    display: flex;
    padding: 5px 40px;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;

    &__icon {
      width: 27px;
      height: 27px;
    }
  }
}

@media all and (min-width: 1000px) {
  .info {
    transform: scale(1.1);
    width: 105%;
  }
}
</style>
