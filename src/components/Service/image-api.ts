import axios from "axios";

const apiKEY = "EOHDZhe-x8umxUPGy7t2BLpIqoSA8lDS0zwYptUy0k4";
axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function fetchImagesWithTopic(topic, page) {
  const response = await axios.get("search/photos", {
    params: {
      query: topic,
      client_id: apiKEY,
      page,
      per_page: 12,
    },
  });
  return {
    results: response.data.results,
    totalPage: response.data.total_pages,
  };
}
