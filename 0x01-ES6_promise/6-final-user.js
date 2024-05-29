import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject2.js';

// Define and export the handleProfileSignup function
export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Create an array of promises by calling the imported functions
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  // Use Promise.allSettled to handle the promises
  const results = await Promise.allSettled(promises);

  // Format the results according to the specified structure
  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
