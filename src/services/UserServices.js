import axios from 'axios';
const BASE_URL = 'https://photo-sharing-app-server-ryb6.onrender.com';
export const getUser = async (userId) => {
      if (!userId) throw new Error("userId is required");
    const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
    // console.log(">>>>>>userId",userId)
    return data;
    
};

export const followUser = (followerId, followedId) => {
    axios.post(`${BASE_URL}/users/${followedId}/followers/${followerId}`);
};

export const unfollowUser = (followerId, followedId) => {
    axios.delete(`${BASE_URL}/users/${followedId}/followers/${followerId}`);
};

export const setProfilePhoto = async (userId, image) => {
    const { data } = await axios.put(`${BASE_URL}/users/${userId}/photo`, {
        imageUrl: image
    });
    return data;
};