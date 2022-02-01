import axios from "axios";

export default {
    namespaced: true,
    state () {
        return {
            posts: {},
            post: {},
        }
    },
    mutations: {

        getPosts(state, posts)
        {
            state.posts = posts
        },

        getPost(state, post)
        {
            state.post = post
        }
    },
    actions: {

        getPosts({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                commit('getPosts', response.data);
            });
        },

        getPost({commit}, postId) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then( response => {
                commit('getPost', response.data);
            });
        }

    }
}