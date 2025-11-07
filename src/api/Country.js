import axiosInstance from "@/utils/axiosInstance";

const FIELDS = ['name', 'flags', 'population', 'region', 'capital', 'cca3'].join(',');

export const getAllCountries = async () => {
  const response = await axiosInstance.get(`/all?fields=${FIELDS}`);
  return response.data;
};

export const getCountriesByRegion = async (region) => {
  const response = await axiosInstance.get(`/region/${region}?fields=${FIELDS}`);
  return response.data;
};

export const getCountryByCode = async (code) => {
  if (!code) return null;
  const DETAIL_FIELDS = ['name', 'flags', 'population', 'region', 'subregion', 'capital', 'cca3', 'languages', 'currencies', 'borders', 'maps', 'timezones'].join(',');
  const response = await axiosInstance.get(`/alpha/${code}?fields=${DETAIL_FIELDS}`);
  return response.data;
};




