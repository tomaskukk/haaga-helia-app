import axios from "axios";

const urlPasila = "/api/amica/pasila";
const urlMalmi = "/api/amica/malmi";
const urlHaaga = "/api/amica/haaga";

const getAllPasila = async lang => {
  const response = await axios.get(`${urlPasila}/${lang}`);
  return response.data;
};

const getAllMalmi = async lang => {
  const response = await axios.get(`${urlMalmi}/${lang}`);
  return response.data;
};

const getAllHaaga = async lang => {
  const response = await axios.get(`${urlHaaga}/${lang}`);
  return response.data;
};

export default { getAllPasila, getAllMalmi, getAllHaaga };
