import apiClient from './api';

export const contactService = {
  sendMessage: async (messageData) => {
    const payload = {
      ...messageData,
      id: `msg-${Date.now()}`,
      date: new Date().toISOString(),
      status: 'unread'
    };
    const response = await apiClient.post('/messages', payload);
    return response.data;
  },

  getMessages: async () => {
    try {
      const response = await apiClient.get('/messages');
      return response.data;
    } catch (error) {
      console.warn('API /messages failed:', error.message);
      return [];
    }
  },

  deleteMessage: async (id) => {
    const response = await apiClient.delete(`/messages/${id}`);
    return response.data;
  },

  markAsRead: async (id) => {
    const response = await apiClient.patch(`/messages/${id}`, { status: 'read' });
    return response.data;
  }
};

export default contactService;
