import apiClient from './api';
import { initialData } from '../data/initialData';

export const experienceService = {
  getExperience: async () => {
    try {
      const response = await apiClient.get('/experience');
      return response.data;
    } catch (error) {
      console.warn('API /experience failed, falling back to local dataset:', error.message);
      return initialData.experience;
    }
  }
};

export default experienceService;
