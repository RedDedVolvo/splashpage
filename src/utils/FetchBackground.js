export const getBackgroundPhoto = async () => {
  let photoUrl = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_ACC_KEY}`;

  const response = await fetch(photoUrl);
  const data = await response.json();
  return data.urls.full;
};
