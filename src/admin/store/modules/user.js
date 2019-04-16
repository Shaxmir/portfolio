export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    DELETE_USER: (state) => {
      state.user = state.user;
  }
  },
  getters: {
    userIsLogged: state => {
      const userObj = state.user;
      const userObjectIsEmpty =
        Object.keys(userObj).length === 0 && userObj.constructor === Object;

      return userObjectIsEmpty === false;
    }
  },
  actions: {
    async logout({commit}) {
      try {
          const response = await this.$axios.post('/logout');
          commit ('DELETE_USER');
          localStorage.removeItem('token');
          this.$axios.defaults.headers['Authorization'] = '';
          return response
      } catch (error) {
          throw new Error (
              error.response.data.error || error.response.data.message
          )
      }
  }
  }
}