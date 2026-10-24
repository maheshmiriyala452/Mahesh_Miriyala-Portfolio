import apiClient from './api';
import { initialData } from '../data/initialData';

export const projectService = {
  getProjects: async () => {
    try {
      const response = await apiClient.get('/projects');
      return response.data;
    } catch (error) {
      console.warn('API /projects failed, falling back to local dataset:', error.message);
      return initialData.projects;
    }
  },

  getProjectById: async (id) => {
    try {
      const response = await apiClient.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      console.warn(`API /projects/${id} failed, attempting lookup in local dataset:`, error.message);
      const found = initialData.projects.find((p) => p.id === id);
      if (found) return found;
      throw error;
    }
  },

  createProject: async (projectData) => {
    const response = await apiClient.post('/projects', projectData);
    return response.data;
  },

  updateProject: async (id, projectData) => {
    const response = await apiClient.patch(`/projects/${id}`, projectData);
    return response.data;
  },

  deleteProject: async (id) => {
    const response = await apiClient.delete(`/projects/${id}`);
    return response.data;
  }
};

export default projectService;
