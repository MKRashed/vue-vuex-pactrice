<template>
    <h2>Posts</h2>
    <div v-if="Object.keys(posts).length" class="grid md:grid-cols-3 p-8 gap-4">
      <router-link :to="'/posts/' + post.id" v-for="(post, index) in posts" :key="index" class="w-full text-left border rounded shadow p-4">
        <h3 class="text-lg font-bold text-gray-700">{{ post.title }}</h3>
      </router-link>
    </div>
    <div v-else class="text-center text-3xl border rounded shadow p-4">
        Loding...
    </div>
</template>


<script>
export default {
    created() {
        this.$store.dispatch('post/getPost', {});
        this.$store.dispatch('post/getPosts');
    },
    computed: {
        posts() {
            return this.$store.state.post.posts;
        }
    }
}
</script>