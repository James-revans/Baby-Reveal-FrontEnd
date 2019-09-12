import CONSTANTS from "./constants";
import axios from "axios";

export default {
  GET_DATA: () => {
      return new Promise((resolve, reject) => {
          axios.get(`${CONSTANTS.API_ENDPOINT}/get-data`)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      }) 
  },
  
  SUBMIT_VOTE: (voteData) => {
    return new Promise((resolve, reject) => {
      console.log(voteData);
      axios.post(`${CONSTANTS.API_ENDPOINT}/submit-vote`, voteData)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
    })
  },

  UPDATE_SETTINGS: (winner) => {
    return new Promise((resolve, reject) => {
      axios.post(`${CONSTANTS.API_ENDPOINT}/update-settings`, winner)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
    })
  }
}