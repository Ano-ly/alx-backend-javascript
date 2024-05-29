export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    const newObj = {
      status: 200,
      body: success,
    };
    return newObj;
  }).catch(() => new Error());
}
