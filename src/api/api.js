import axios from "axios";

const BASE_URL = "https://stage-api-frontend.tv.nu/programs";

export const GetPrograms = async () => {
  try {
    const { data } = await axios(BASE_URL);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
