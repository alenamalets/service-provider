import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
        profile: {},
        skills: []
    },
  },
  getters : {
    user: state => state.user,
    skills: state => state.user.skills,
  },
  mutations: {
    SET_USER_PROFILE(state, profile) {
        state.user.profile = profile
    },
    SET_USER_SKILLS(state, skills) {
        state.user.skills = skills
    },
  }
})

export default store