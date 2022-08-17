import axios from "axios";
import { HOST } from "constants/ApiConstant";

// Creating an instance
export default axios.create({
  baseURL: HOST,
  headers: {'content-Type': 'application/json'}
})