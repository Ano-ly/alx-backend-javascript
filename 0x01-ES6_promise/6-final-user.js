import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  async function myfunc(first, last, file) {
    const userStatus = {
      status: '',
      value: '',
    };
    const photoStatus = {
      status: '',
      value: '',
    };
    try {
      const user = await signUpUser(first, last);
      userStatus.status = 'fulfilled';
      userStatus.value = user;
    } catch (error) {
      userStatus.status = 'rejected';
      userStatus.value = error;
    }

    try {
      const photo = await uploadPhoto(file);
      photoStatus.status = 'fulfilled';
      photoStatus.value = photo;
    } catch (error) {
      photoStatus.status = 'rejected';
      photoStatus.value = error;
    }
    return [userStatus, photoStatus];
  }
  return myfunc(firstName, lastName, fileName);
}
