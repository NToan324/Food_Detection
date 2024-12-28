import axios from "../../axios";
import endPoints from "../endPoints";

const Food = {
  getFood: () => {
    return axios.get(endPoints.API.GET);
  },
  getFoodById: (id) => {
    return axios.get(`${endPoints.API.GET_BY_ID}?id=${id}`);
  },
};
export default Food;
