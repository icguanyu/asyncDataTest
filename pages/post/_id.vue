<template>
  <div>
    _id.vue
    <p>{{ data }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "post_id",
  async asyncData() {
    console.log("asyncData! (post) 觸發");
    let params = {
      TenderBaseDataId: "10195",
      TenderBuildingMainIds: "10558",
      GroupNo: "2",
    };
    let data;
    await axios
      .post("https://dorts.pascation.com.tw/api/Member/GetRentDetail", params)
      .then((res) => {
        console.log(res);
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
