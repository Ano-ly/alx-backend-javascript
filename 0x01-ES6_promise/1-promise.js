export default function getFullResponseFromAPI(success) {
  const newPromise = new Promise((resolve, reject) => {
    if (success === true) {
      const newObj = {
        status: 200,
        body: 'Success',
      };
      resolve(newObj);
    } else {
      reject(Error("The fake API is not working currently"));
    }    
  });
  return newPromise;
}
