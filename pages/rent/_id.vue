<template>
  <div>
    rent detail
    <p>{{ data }}</p>
  </div>
</template>
<script>
import axios from "axios";
import { Tenders } from "@/api/Tenders";
export default {
  name: "rent-id",
  async asyncData({ params, query }) {
    console.log("asyncData! GetRentDetail");
    let query_params = {
      TenderBaseDataId: params.id,
      TenderBuildingMainIds: query.main,
      GroupNo: query.groupNo,
    };
    let data;
    await Tenders.GetRentDetail(query_params).then((res) => {
      console.log(res);
      data = res.data;
    });
    return { data };
  },
  mounted() {
    console.log("mounted!");
  },
};
</script>
