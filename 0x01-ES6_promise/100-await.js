import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const info = await Promise.all([uploadPhoto(), createUser()]);
    const myObj1 = {
      photo: info[0],
      user: info[1],
    };
    return myObj1;
  } catch (error) {
    const myObj2 = {
      photo: null,
      user: null,
    };
    return myObj2;
  }
}
