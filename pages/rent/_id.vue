<template>
  <div>
    rent detail:
    <p>{{ data }}</p>
  </div>
</template>
<script>
import { Tenders } from "@/api/Tenders";
export default {
  name: "rent-id",
  async asyncData({ params, query, error }) {
    let query_params = {
      TenderBaseDataId: params.id,
      TenderBuildingMainIds: query.main,
      GroupNo: query.groupNo,
    };
    console.log("asyncData! GetRentDetail", query_params);
    let data;
    await Tenders.GetRentDetail(query_params).then((res) => {
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
