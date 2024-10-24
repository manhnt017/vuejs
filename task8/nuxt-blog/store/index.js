import axios from 'axios';

export const state = () => ({
  posts: [],
  post: null,
  loading: false,
  error: null,
});

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_POST(state, post) {
    state.post = post;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

export const actions = {
  async fetchPosts({ commit }) {
    commit('SET_LOADING', true);
    commit('SET_ERROR', null);
    try {
      const response = await axios.get('http://localhost:3001/posts');
      commit('SET_POSTS', response.data);
    } catch (error) {
      commit('SET_ERROR', 'Không thể tải dữ liệu');
    } finally {
      commit('SET_LOADING', false);
    }
  },
  async fetchPost({ commit }, id) {
    commit('SET_LOADING', true);
    commit('SET_ERROR', null);
    try {
      const response = await axios.get(`http://localhost:3001/posts/${id}`);
      commit('SET_POST', response.data);
    } catch (error) {
      commit('SET_ERROR', 'Bài viết không tồn tại');
    } finally {
      commit('SET_LOADING', false);
    }
  },
};
