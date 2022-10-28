import axios from "axios";

const BASE_URL = "https://stage-api-frontend.tv.nu/programs?orderBy=vieews";

export const GetPrograms = async (query) => {
  const searchQuery = `&programType=${query.movie && "movie"},${
    query.series && "series"
  }`;

  try {
    const { data } = await axios(BASE_URL + searchQuery);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
