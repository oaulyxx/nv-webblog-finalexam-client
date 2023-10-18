import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    plugins: [
        createPersistedState()
    ],
    state: {
        token: null,
        book: null,
        isBookLoggedIn: false,
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            state.isBookLoggedIn = !!(token)
        },
        setBook(state, book) {
            state.book = book
        }
    },
    actions: {
        setToken({ commit }, token) {
            commit('setToken', token)
        },
        setBook({ commit }, book) {
            commit('setBook', book)
        }
    }
})