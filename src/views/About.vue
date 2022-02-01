<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <form @submit="postData" method="post">
        <input type="text" v-model="posts.name" class="border">
        <input type="text" v-model="posts.title" class="border">
        <input type="text" v-model="posts.password" class="border">
        <input type="text" v-model="posts.phone" class="border">
        <button>Post</button>
      </form>
    </div>

    <button class="text-white rounded bg-green-500 px-4 py-3 font-sans font-semibold shadow-lg hover:bg-green-800 outline-none active:outline-none focus:outline-none"
         @click="toggleModel =! toggleModel">Add</button>
    <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50" v-if="toggleModel">
        <div class="relative mx-auto w-auto max-w-2xl">
          <div class="bg-white w-full rounded shadow-2xl flex flex-col">
            <div class="modal-body relative p-4">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore deserunt nostrum natus quae accusamus temporibus aliquam accusantium rem mollitia, vero et debitis? Unde, saepe harum? Exercitationem autem molestias harum optio!</p>
            </div>
            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-2 border-t border-gray-200 rounded-b-md">
              <button type="button"
                class="inline-block px-6 py-2 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                @click="toggleModel=false">
                Close
              </button>
              <button type="button"
                class="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                Save changes
              </button>
          </div>
          </div>
        </div>
    </div>
    <div class="absolute inset-0 z-40 opacity-25 bg-gray-300" v-if="toggleModel"></div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      posts:{
        name:null,
        title: null,
        password:null,
        phone:null,
      },
      toggleModel:false
    }
  },
  methods:{
    postData(e){
      console.log(this.posts);
      e.preventDefault();

    }
  }
}
</script>
