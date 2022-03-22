import request from "./index";

export const SysMRT = {
  GetMRTLineList: () => {
    return request.post(`/api/SysMRT/GetMRTLineList/`);
  },
  GetMRTStationList: (data) => {
    return request.post(`/api/SysMRT/GetMRTStationList/`, data);
  },
};

export const Config = {
  GetBankNos: () => {
    return request.get(`/api/Config/GetBankNos`);
  },
  GetBranchBankNos: (data) => {
    return request.get(`/api/Config/GetBranchBankNos?BankNo=${data}`);
  },
  GetWebSiteInfo: () => {
    return request.get(`/api/Config/GetWebSiteInfo`);
  },
  SetWebSiteViewCount: () => {
    return request.post(`/api/Config/SetWebSiteViewCount`);
  },
};


