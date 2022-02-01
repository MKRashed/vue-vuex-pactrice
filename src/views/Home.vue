<template>
  <div class="home">
    <div class="flex bg-white h-22 w-96 justify-center items-center rounded m-auto">
      <input type="radio" name="select" id="option-1" checked>
      <input type="radio" name="select" id="option-2">
        <label for="option-1" class="bg-white h-full w-full flex justify-evenly ml-3 mr-3 rounded cursor-pointer border transition-all option-1">
          <div class="h-5 w-5 bg-gray-200 rounded absolute dot -left-full"></div>
            <span class="text-lg text-gray-300">Student</span>
            </label>
        <label for="option-2" class="bg-white h-full w-full flex justify-evenly mr-3 ml-3 rounded cursor-pointer border transition-all option-2">
          <div class="h-5 w-5 bg-gray-200 rounded absolute dot -left-full"></div>
            <span class="text-lg text-gray-300">Teacher</span>
        </label>
   </div>
  </div>


  <!-- <div class="flex bg-white items-center rounded">
            <input type="radio" name="career" id="option-1" v-model="type" :value="1">
            <input type="radio" name="psychology" id="option-2" v-model="type" :value="2">
                <label for="option-1" class="bg-white flex justify-evenly ml-3 mr-3 rounded cursor-pointer shadow hover:shadow-lg p-2 transition-all option-1">
                <div class="bg-gray-200 rounded absolute dot -left-full"></div>
                    <span class="text-lg text-gray-600">Career </span>
                    </label>
                <label for="option-2" class="bg-white flex justify-evenly mr-3 ml-3 rounded cursor-pointer shadow hover:shadow-lg p-2 transition-all option-2">
                <div class="bg-gray-200 rounded absolute dot -left-full"></div>
                    <span class="text-lg text-gray-600">Psychology </span>
                </label>
        </div> -->

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.dot::before{
  position: relative;
  content: "";
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  background: #0069d9;
  border-radius: 50%;
  opacity: 0;
  transform: scale(1.5);
  transition: all 0.3s ease;
}
input[type="radio"]{
  display: none;
}
#option-1:checked:checked ~ .option-1,
#option-2:checked:checked ~ .option-2{
  border-color: #0069d9;
  background: #0069d9;
}
#option-1:checked:checked ~ .option-1 .dot,
#option-2:checked:checked ~ .option-2 .dot{
  background: #fff;
}
#option-1:checked:checked ~ .option-1 .dot::before,
#option-2:checked:checked ~ .option-2 .dot::before{
  opacity: 1;
  transform: scale(1);
}
.option span{
  font-size: 20px;
  color: #808080;
}
#option-1:checked:checked ~ .option-1 span,
#option-2:checked:checked ~ .option-2 span{
  color: #fff;
}
</style>
