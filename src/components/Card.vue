<template>
  <router-link :to="'/product/' + id" class="h-56 rounded-xl flex bg-white overflow-hidden items-center">
    <img :src="imglink ?? 'https://picsum.photos/400/500'" class="object-cover w-1/2 h-full" />
    <div class="pl-4">
      <h3 class="text-4xl font-semibold">{{ title || "Jo'burg" }}</h3>
      <div class="opacity-50 text-xl">$ {{ price || "300" }}</div>
    </div>
  </router-link>
</template>

<script setup>
let props = defineProps(["id", "title", "price", "imglink"]);
// let props = defineProps({
//   title: {
//     type: String,
//     default: "Jo'borg",
//   },
//   price: {
//     type: Number,
//     default: 300,
//   },
//   imglink: {
//     type: String,
//     default: "https://picsum.photos/400/500",
//   },
// });
</script>