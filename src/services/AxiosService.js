import APIRequest from "../utils/config/axios.config";

function getRandomUser() {
  return APIRequest.get('/', {
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    }
  }); // Request from BaseURL (https://randomuser.me/api)
}
export { getRandomUser }