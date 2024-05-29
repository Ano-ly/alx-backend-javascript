import handleResponseFromAPI from "./2-then";

const promise1 = Promise.resolve();
const promise2 = Promise.reject();
handleResponseFromAPI(promise1);
handleResponseFromAPI(promise2);
