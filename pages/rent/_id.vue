<template>
  <div>
    rent detail
    <p>{{ data }}</p>
  </div>
</template>
<script>
import { Tenders } from "@/api/Tenders";
export default {
  name: "rent-id",
  async asyncData({ params, query, error }) {
    console.log("asyncData! GetRentDetail");
    let query_params = {
      TenderBaseDataId: params.id,
      TenderBuildingMainIds: query.main,
      GroupNo: query.groupNo,
    };
    let data;
    await Tenders.GetRentDetail(query_params).then((res) => {
      if (res.status == 200) {
        data = {
          detail: res.data,
          propertyDetails: res.data.propertyDetails,
          yearTenderNos: res.data.yearTenderNos,
          selectedYearTender: res.data.yearTenderNos[0],
        };
      } else {
        error({ statusCode: 404, message: "找不到此標租物件。" });
      }
    });
    return { data };
  },
  mounted() {
    console.log("mounted!");
  },
};
</script>
