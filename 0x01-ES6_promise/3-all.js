import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup () {
  const itemOne = uploadPhoto();
  const itemTwo = createUser();
  itemOne.then(function (result1) {
    itemTwo.then(function (result2) {
      console.log(`${result1.body} ${result2.firstName} ${result2.lastName}`);
    }).catch(function () {
      console.log('Signup system offline');
    });
  }).catch(function () {
    console.log('Signup system offline');
  });
}
