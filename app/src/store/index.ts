import { Coordinates, CurrentWeatherType, DailyWeatherType, Timezone } from '@/allTypes';
import { TIMEZONE_API_KEY, TIMEZONE_API_URL, WEATHER_API_KEY, WEATHER_API_URL } from '@/constraints';
import axios from 'axios';
import { Commit, createStore } from 'vuex'
import { myTypes } from './custome-types';

export default createStore({

  state: {
    authenticated: false,
    isAdmin: false,
    loading: false,
    error: false,
    currentWeather: {},
    dailyWeather: { daily: {} },
    timezone: {}
  },
  mutations: {
    SET_AUTH: (state: { authenticated: boolean }, auth: boolean) => state.authenticated = auth,
    SET_ISADMIN: (state: { isAdmin: boolean }, admin: boolean) => state.isAdmin = admin,
    [myTypes.SET_LOADING_STATUS](state, value: boolean) {
      state.loading = value;
    },
    [myTypes.SET_ERROR_STATUS](state, value: boolean) {
      state.error = value;
    },
    [myTypes.SET_CURRENT_WEATHER](state, value: CurrentWeatherType){
      state.currentWeather = value;
    },
    [myTypes.SET_DAILY_WEATHER](state, value: DailyWeatherType){
      state.dailyWeather = value;
    },
    [myTypes.SET_TIMEZONE](state, value: Timezone){
      state.timezone = value;
    }
  },
  actions: {
    setAuthentication: ({ commit }: { commit: Commit }, auth: boolean) => commit('SET_AUTH', auth),
    setIsAdmin: ({ commit }: { commit: Commit }, admin: boolean) => commit('SET_ISADMIN', admin),
    async getCurrentWeather({ commit }, city: string) {
      const { data } = await axios.get(
        `${WEATHER_API_URL}/weather?q=${city}&APPID=${WEATHER_API_KEY}`
      );

      commit(myTypes.SET_CURRENT_WEATHER, data);
    },
    async getDailyWeather({ commit }, { lat, lon }: Coordinates) {
      const { data } = await axios.get(
        `${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&APPID=${WEATHER_API_KEY}`
      );

      commit(myTypes.SET_DAILY_WEATHER, data);

    },
    async getTimezone({ commit }, { lat, lon }: Coordinates) {
      const { data } = await axios.get(
        `${TIMEZONE_API_URL}?key=${TIMEZONE_API_KEY}&format=json&by=position&lat=${lat}&lng=${lon}`
      );

      const { countryName, formatted } = data;

      commit(myTypes.SET_TIMEZONE, { countryName, hour: Number(formatted.substring(11, 13)) })
    },

    setLoading({ commit }, value: boolean) {
      commit(myTypes.SET_LOADING_STATUS, value)
    },
    setError({ commit }, value: boolean) {
      commit(myTypes.SET_ERROR_STATUS, value)
    }
  },
  modules: {
  }
})
