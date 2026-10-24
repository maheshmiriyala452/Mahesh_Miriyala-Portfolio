import apiClient from './api';
import { initialData } from '../data/initialData';

export const skillService = {
  getSkills: async () => {
    try {
      const response = await apiClient.get('/skills');
      return response.data;
    } catch (error) {
      console.warn('API /skills failed, falling back to local dataset:', error.message);
      return initialData.skills;
    }
  },

  createSkill: async (skillData) => {
    const response = await apiClient.post('/skills', skillData);
    return response.data;
  },

  deleteSkill: async (id) => {
    const response = await apiClient.delete(`/skills/${id}`);
    return response.data;
  }
};

export default skillService;
