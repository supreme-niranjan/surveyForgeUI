import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { 
  SurveyData, 
  CreateSurveyDto, 
  UpdateSurveyDto, 
  SubmitResponseDto 
} from '../types/survey';
import { ApiResponse, ApiError, SurveyApiFilters } from '../types/api';

// Create axios instance with base configuration
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Survey API services
export const surveyAPI = {
  // Get all surveys
  getSurveys: async (filters: SurveyApiFilters = {}): Promise<SurveyData[]> => {
    const response = await api.get('/surveys', { params: { filters } });
    return response.data;
  },

  // Get survey by ID
  getSurvey: async (id: string): Promise<SurveyData> => {
    const response = await api.get(`/surveys/${id}`);
    return response.data;
  },

  // Create new survey
  createSurvey: async (surveyData: CreateSurveyDto): Promise<SurveyData> => {
    const response = await api.post('/surveys', surveyData);
    return response.data;
  },

  // Update survey
  updateSurvey: async (id: string, surveyData: UpdateSurveyDto): Promise<SurveyData> => {
    console.log('🔄 Updating survey with ID:', id);
    console.log('🔄 Survey data being sent:', JSON.stringify(surveyData, null, 2));
    try {
      const response = await api.put(`/surveys/${id}`, surveyData);
      console.log('✅ Survey update response:', response.data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('❌ Survey update error:', axiosError.response?.data || axiosError.message);
      throw error;
    }
  },

  // Delete survey
  deleteSurvey: async (id: string): Promise<{ message: string }> => {
    const response = await api.delete(`/surveys/${id}`);
    return response.data;
  },

  // Duplicate survey
  duplicateSurvey: async (id: string): Promise<SurveyData> => {
    const response = await api.post(`/surveys/${id}/duplicate`);
    return response.data;
  },

  // Publish survey
  publishSurvey: async (id: string): Promise<SurveyData> => {
    const response = await api.post(`/surveys/${id}/publish`);
    return response.data;
  },

  // Unpublish survey
  unpublishSurvey: async (id: string): Promise<SurveyData> => {
    const response = await api.post(`/surveys/${id}/unpublish`);
    return response.data;
  },

  // Get survey responses
  getSurveyResponses: async (surveyId: string): Promise<any[]> => {
    const response = await api.get(`/surveys/${surveyId}/responses`);
    return response.data;
  },

  // Get survey response statistics
  getSurveyResponseStats: async (surveyId: string): Promise<any> => {
    const response = await api.get(`/surveys/${surveyId}/responses/stats`);
    return response.data;
  },

  // Get specific response
  getResponse: async (surveyId: string, responseId: string): Promise<any> => {
    const response = await api.get(`/surveys/${surveyId}/responses/${responseId}`);
    return response.data;
  },

  // Delete response
  deleteResponse: async (surveyId: string, responseId: string): Promise<{ message: string }> => {
    const response = await api.delete(`/surveys/${surveyId}/responses/${responseId}`);
    return response.data;
  },
};

// Public survey API services
export const publicSurveyAPI = {
  // Get public survey
  getPublicSurvey: async (id: string): Promise<SurveyData> => {
    const response = await api.get(`/public/surveys/${id}`);
    return response.data;
  },

  // Submit survey response
  submitResponse: async (surveyId: string, responseData: SubmitResponseDto): Promise<any> => {
    const response = await api.post(`/public/surveys/${surveyId}/response`, responseData);
    return response.data;
  },
};

export default api;