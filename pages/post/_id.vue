<template>
  <div>_id.vue</div>
</template>

<script>
import axios from "axios";
export default {
  name: "_id",
  async asyncData() {
    console.log("asyncData! (post)");
    let { data } = await axios.post(
      "https://floating-mountain-61278.herokuapp.com/todos",
      { id: "123" }
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
