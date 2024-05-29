export default function handleResponseFromAPI (promise) {
  promise.then(function () {
    console.log('Got a response from the API');
    const newObj = {
      status: 200,
      body: success
    };
    return newObj;
  }).catch(function () {
    return new Error();
  });
}
