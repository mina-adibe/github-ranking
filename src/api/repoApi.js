import moment from "moment";
import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.REACT_APP_API_URL;
//get date 30 days from now
const DATE_30_DAYS_BEFORE = moment().subtract(30, "days").format("YYYY-MM-DD");

export function getRepos(page) {
  return fetch(
    `${baseUrl}search/repositories?q=created:>${DATE_30_DAYS_BEFORE}&sort=stars&order=desc&page=${page}`
  )
    .then(handleResponse)
    .catch(handleError);
}

export function getSingleRepo(username, name) {
  return fetch(`${baseUrl}repos/${username}/${name}`)
    .then(handleResponse)
    .catch(handleError);
}
