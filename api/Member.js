import request from "./index";

export const Member = {
  TaiPeiCardSetEmail: data => {
    return request.post("/api/Member/TaiPeiCardSetEmail", data);
  },
  VerifyAccountByMail: data => {
    return request.post("/api/Member/VerifyAccountByMail", data);
  },
  Login: data => {
    return request.post("/api/Member/Login", data);
  },
  LoginByTaipeiCard: data => {
    return request.post("/api/Member/LoginByTaipeiCard", data);
  },
  LoginByTaipeiCard_NoEmail_Test: (data) => {
    return request.post("/api/Member/LoginByTaipeiCard_NoEmail_Test", data);
  },
  GetMemberData: () => {
    return request.post("/api/Member/GetMemberData");
  },
  EditMemberData: data => {
    return request.put("/api/Member/EditMemberData", data);
  },
  Register: data => {
    return request.post("/api/Member/Register", data);
  },
  ResetPassword: data => {
    return request.put("/api/Member/ResetPassword", data);
  },
  GetMemberPayRecordList: data => {
    return request.post("/api/Member/GetMemberPayRecordList", data);
  },
  // render info
  GetTenderInfoList: data => {
    return request.post("/api/Member/GetTenderInfoList", data);
  },
  GetTenderInfoById: id => {
    return request.get(`/api/Member/GetTenderInfoById/${id}`);
  },
  // latest news
  GetLatestNewsList: data => {
    return request.post("/api/Member/GetLatestNewsList", data);
  },
  GetLatestNewsById: id => {
    return request.get(`/api/Member/GetLatestNewsById/${id}`);
  },
  GetNewsTickers: data => {
    return request.post(`/api/Member/GetNewsTickers`, data);
  },
  // 聯開大樓
  GetJointDevelopList: data => {
    return request.post("/api/Member/GetJointDevelopList", data);
  },
  GetJointDevelopDetail: data => {
    return request.post("/api/Member/GetJointDevelopDetail", data);
  },
  //
  ForgetPassword: data => {
    return request.post("/api/Member/ForgetPassword", data);
  },
  ResetPasswordByMail: data => {
    return request.post("/api/Member/ResetPasswordByMail", data);
  },
  // QA
  GetGeneralQuestionList: data => {
    return request.post("/api/Member/GetGeneralQuestionList", data);
  }
};
