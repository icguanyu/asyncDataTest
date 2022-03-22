<template>
  <div>
    <Tutorial />

    <nuxt-link to="/post">to post</nuxt-link>
    <nuxt-link to="/rent">to rent</nuxt-link>

    <p>{{ data }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexPage",
  async asyncData() {
    console.log("asyncData! (get) 觸發");
    let data;
    await axios
      .get("https://dorts.pascation.com.tw/api/Member/GetTenderInfoById/20355")
      .then((res) => {
        console.log("GetTenderInfoById", res);
        data = res.data;
      });

    return {
      data,
    };
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
