import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  const myObj = {
    photo,
    user,
  };
  return (myObj);
}
