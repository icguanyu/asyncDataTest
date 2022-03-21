<template>
  <div>
    <Tutorial />

    <nuxt-link to="/post">to post</nuxt-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  async asyncData() {
    console.log("asyncData! (get)");
    let { data } = await axios.get(
      "https://floating-mountain-61278.herokuapp.com/todos"
    );

    return {
      data,
    };
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
