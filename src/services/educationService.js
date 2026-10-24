import apiClient from './api';
import { initialData } from '../data/initialData';

export const educationService = {
  getEducation: async () => {
    try {
      const response = await apiClient.get('/education');
      return response.data;
    } catch (error) {
      console.warn('API /education failed, falling back to local dataset:', error.message);
      return initialData.education;
    }
  }
};

export default educationService;
