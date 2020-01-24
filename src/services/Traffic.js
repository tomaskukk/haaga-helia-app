import axios from "axios";

const URI = "/api/traffic/picture";

const getTrafficPicture = async () => {
  const response = await axios.get(URI);
  return response.data;
};

export default { getTrafficPicture };
