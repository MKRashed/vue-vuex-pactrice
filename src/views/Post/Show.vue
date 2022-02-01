<template>
    <h2>Posts</h2>
    <div class="grid p-8 gap-4">
      <div v-if="Object.keys(post).length" class="w-full text-left border rounded shadow p-4">
        <h3 class="text-lg font-bold text-gray-700">{{ post.title }}</h3>
        <p class="text-justify text-gray-500">{{ post.body }}</p>
      </div>
      <div v-else class="text-center text-3xl border rounded shadow p-4">
          Loding...
      </div>
    </div>
</template>


<script>
export default {
    computed: {
        post() {
            return this.$store.state.post.post;
        },
        postId() {
            return this.$route.params.id;
        }
    },
    created() {
        this.$store.commit('post/getPost', {});
        this.$store.dispatch('post/getPost', this.postId);
    },
}
</script>