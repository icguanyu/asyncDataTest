import request from "./index";

export const Tenders = {
  GetRentList: (data) => {
    return request.post("/api/Member/GetRentList", data);
  },
  GetBuyList: (data) => {
    return request.post("/api/Member/GetBuyList", data);
  },
  CreateTenderUser: (data) => {
    return request.post("/api/Member/CreateTenderUser", data);
  },
  GetCaseFiles: (data) => {
    return request.post("/api/Member/GetCaseFiles", data);
  },
  UploadFiles: (data) => {
    return request.post("/api/Member/UploadFiles", data);
  },
  // 電子投標
  EditTenderAmount: (data) => {

    return request.put("/api/Member/EditTenderAmount", data);
  },
  // 紙本投標
  EditTenderStyleToDoc: (data) => {

    return request.put("/api/Member/EditTenderStyleToDoc", data);
  },
  GetRentDetail: (data) => {
    return request.post("/api/Member/GetRentDetail", data);
  },
  GetBuyDetail: (data) => {
    return request.post("/api/Member/GetBuyDetail", data);
  },
  // 會員中心
  GetTenderingList: (data) => {
    return request.post("/api/Member/GetTenderingList", data);
  },
  GetTenderList: (data) => {
    return request.post("/api/Member/GetTenderList", data);
  },
  // 興趣
  AddMemberPropertyFav: (data) => {
    return request.post("/api/Member/AddMemberPropertyFav", data);
  },
  GetMemberPropertyFavList: (data) => {
    return request.post("/api/Member/GetMemberPropertyFavList", data);
  },
  RemoveMemberPropertyFav: (data) => {
    return request.post("/api/Member/RemoveMemberPropertyFav", data);
  },
};
