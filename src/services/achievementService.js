import apiClient from './api';
import { initialData } from '../data/initialData';

export const achievementService = {
  getAchievements: async () => {
    try {
      const response = await apiClient.get('/achievements');
      return response.data;
    } catch (error) {
      console.warn('API /achievements failed, falling back to local dataset:', error.message);
      return initialData.achievements;
    }
  }
};

export default achievementService;
