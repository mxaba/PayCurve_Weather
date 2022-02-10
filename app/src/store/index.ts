import { Commit, createStore } from 'vuex'

export default createStore({
  
  state: {
    authenticated: false,
    isAdmin: false,
  },
  mutations: {
    SET_AUTH: (state: {authenticated: boolean}, auth: boolean) => state.authenticated = auth,
    SET_ISADMIN: (state: {isAdmin: boolean}, admin: boolean) => state.isAdmin = admin
  },
  actions: {
    setAuthentication: ({commit}: {commit: Commit}, auth: boolean) =>  commit('SET_AUTH', auth),
    setIsAdmin: ({commit}: {commit: Commit}, admin: boolean) =>  commit('SET_ISADMIN', admin)
  },
  modules: {
  }
})
