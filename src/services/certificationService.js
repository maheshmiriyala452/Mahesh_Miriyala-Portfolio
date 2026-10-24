import apiClient from './api';
import { initialData } from '../data/initialData';

export const certificationService = {
  getCertifications: async () => {
    try {
      const response = await apiClient.get('/certifications');
      return response.data;
    } catch (error) {
      console.warn('API /certifications failed, falling back to local dataset:', error.message);
      return initialData.certifications;
    }
  }
};

export default certificationService;
