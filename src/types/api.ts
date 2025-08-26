// API response types
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
  data?: any;
}

// Survey API types
export interface SurveyApiFilters {
  types?: string[];
  status?: string[];
  dateRange?: string[];
}

export interface SurveyResponse {
  id: string;
  surveyId: string;
  sessionId?: string;
  timeSpent?: number;
  deviceInfo?: any;
  answers: Array<{
    questionId: string;
    answer: any;
  }>;
  submittedAt: string;
}

export interface SurveyStats {
  responseCount: number;
  completionRate: number;
  averageTime: number;
  lastResponse?: string;
}

// HTTP methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// Request config
export interface RequestConfig {
  method?: HttpMethod;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  timeout?: number;
}