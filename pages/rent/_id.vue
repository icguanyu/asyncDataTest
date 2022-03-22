<template>
  <div>
    rent detail:
    <p>{{ data }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "rent-id",
  async asyncData({ params, error }) {
    let query_params = {
      TenderBaseDataId: params.id,
      TenderBuildingMainIds: "10558",
      GroupNo: "2",
    };
    console.log("params", params);
    console.log("asyncData! GetRentDetail", query_params);
    let data;
    await axios
      .post(
        "https://dorts.pascation.com.tw/api/Member/GetRentDetail",
        query_params
      )
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          data = res.data;
        } else {
          error({ statusCode: 404, message: "找不到此標租物件。" });
        }
      });
    return { data };
  },
  mounted() {
    console.log("mounted!!!!");
  },
};
</script>
