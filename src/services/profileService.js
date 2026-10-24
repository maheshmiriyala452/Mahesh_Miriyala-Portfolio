import apiClient from './api';
import { initialData } from '../data/initialData';

export const profileService = {
  getProfile: async () => {
    try {
      const response = await apiClient.get('/profile');
      return response.data;
    } catch (error) {
      console.warn('API /profile failed, falling back to local dataset:', error.message);
      return initialData.profile;
    }
  },

  updateProfile: async (profileData) => {
    const response = await apiClient.patch('/profile', profileData);
    return response.data;
  }
};

export default profileService;
