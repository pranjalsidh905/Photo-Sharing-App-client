import axios from "axios";
const BASE_URL = "https://photo-sharing-app-server-ryb6.onrender.com";
export const getAllPhotos = async () => {
  const { data } = await axios.get(`${BASE_URL}/photos`);
  return data;
};

export const getPhotosByUserId = async (userId) => {
  const { data } = await axios.get(`${BASE_URL}/photos/publisher/${userId}`);
  return data;
};

export const getPhotosByCategoryId = async (categoryId) => {
  const { data } = await axios.get(`${BASE_URL}/photos/category/${categoryId}`);
  return data;
};

export const getPhotoById = async (photoId) => {
  const { data } = await axios.get(`${BASE_URL}/photos/${photoId}`);
  return data;
};

export const addPhoto = async (
  imageUrl,
  title,
  description,
  category,
  publisher,
  publisherName
) => {
  const { data } = await axios.post(`${BASE_URL}/photos/`, {
    imageUrl,
    title,
    description,
    category,
    publisher,
    publisherName,
  });
  return data;
};

export const uploadPhotoToCloudinary = async (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  data.append("cloud_name", process.env.REACT_APP_CLOUD_NAMEE);
  const result = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: data,
    }
  ).then((res) => res.json());
  return result;
};

export const updatePhoto = async (photoId, title, description, category) => {
  const { data } = await axios.put(`${BASE_URL}/photos/${photoId}`, {
    title,
    description,
    category,
  });
  return data;
};

export const deletePhoto = async (photoId) => {
  const { data } = await axios.delete(`${BASE_URL}/photos/${photoId}`);
  return data;
};

// LIKE SYSTEM

export const addLike = (photoId, likerId) => {
  axios.put(`${BASE_URL}/photos/${photoId}/likes/${likerId}`, {
    liker: likerId,
  });
};

export const removeLike = (photoId, likerId) => {
  const id = likerId;
  axios.delete(`${BASE_URL}/photos/${photoId}/likes/${likerId}`, {
    liker: id,
  });
};
