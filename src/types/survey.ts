// Survey data types
export interface SurveyOption {
  id: string;
  label: string;
  value: string;
}

export interface ConditionalLogic {
  enabled: boolean;
  dependsOn?: string;
  condition?: 'equals' | 'not_equals' | 'contains' | 'not_contains' | 'greater_than' | 'less_than' | 'is_empty' | 'is_not_empty';
  value?: string;
}

export interface QuestionValidation {
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  errorMessage?: string;
}

export interface QuestionStyling {
  width?: 'full' | 'half' | 'third' | 'quarter';
  alignment?: 'left' | 'center' | 'right';
  showBorder?: boolean;
  highlightOnFocus?: boolean;
  compact?: boolean;
}

export interface Question {
  id: string;
  name: string;
  type: string;
  icon?: string;
  title: string;
  description?: string;
  placeholder?: string;
  required: boolean;
  orderIndex?: number;
  options?: SurveyOption[];
  validation?: QuestionValidation;
  conditionalLogic?: ConditionalLogic;
  styling?: QuestionStyling;
  scale?: number;
  min?: number;
  max?: number;
  step?: number;
  rows?: SurveyOption[];
  columns?: SurveyOption[];
  showNumber?: boolean;
  allowComments?: boolean;
  logic?: {
    enabled: boolean;
  };
}

export interface SurveyPage {
  id: string;
  name: string;
  orderIndex?: number;
  questionCount: number;
  questions: Question[];
}

export interface SurveyData {
  id?: string | null;
  title: string;
  description?: string;
  currentPageId?: string;
  pages: SurveyPage[];
  settings?: Record<string, any>;
  theme?: Record<string, any>;
  isPublic?: boolean;
  allowAnonymous?: boolean;
  expiresAt?: string | null;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Component types
export interface ComponentData {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ComponentCategory {
  id: string;
  name: string;
  icon: string;
  components: ComponentData[];
}

// Survey response types
export interface ResponseAnswer {
  questionId: string;
  questionName?: string;
  questionTitle?: string;
  questionType?: string;
  answer: any;
  answered?: boolean;
}

export interface SubmissionData {
  formData: Record<string, any>;
  surveyId?: string;
  surveyTitle?: string;
  submittedAt: string;
  totalQuestions: number;
  answeredQuestions: number;
  questions: Array<{
    id: string;
    name: string;
    title: string;
    type: string;
    required: boolean;
    answer: any;
    answered: boolean;
  }>;
  answers: ResponseAnswer[];
}

// API types
export interface CreateSurveyDto {
  userId?: string;
  title: string;
  description?: string;
  settings?: any;
  theme?: any;
  pages?: CreatePageDto[];
  expiresAt?: string;
  isPublic?: boolean;
  allowAnonymous?: boolean;
}

export interface CreatePageDto {
  name: string;
  orderIndex?: number;
  questions?: CreateQuestionDto[];
}

export interface CreateQuestionDto {
  name: string;
  type: string;
  title: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  orderIndex?: number;
  validation?: any;
  conditionalLogic?: any;
  styling?: any;
  options?: any[];
}

export interface UpdateSurveyDto extends Partial<CreateSurveyDto> {
  status?: string;
}

export interface SubmitResponseDto {
  sessionId?: string;
  timeSpent?: number;
  deviceInfo?: any;
  answers: ResponseAnswerDto[];
}

export interface ResponseAnswerDto {
  questionId: string;
  answer: any;
}

// UI Component types
export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface StatsData {
  totalSurveys: number;
  activeSurveys: number;
  totalResponses: number;
  avgCompletionRate: number;
}

export interface SurveyListItem {
  id: number | string;
  title: string;
  description: string;
  thumbnail?: string;
  status: 'published' | 'draft' | 'closed';
  responses: number;
  completionRate: number;
  createdAt: string;
  updatedAt?: string;
  type: string;
}

// Save status enum
export type SaveStatus = 'unsaved' | 'saving' | 'saved' | 'error';

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline' | 'ghost' | 'custom';

export interface SubmitButtonConfig {
  label: string;
  className?: string;
  variant?: ButtonVariant;
  loadingLabel?: string;
  disabled?: boolean;
}

// Survey viewer modes
export type SurveyViewerMode = 'survey' | 'form';

// Custom styles for survey viewer
export interface CustomStyles {
  container?: string;
  input?: string;
  label?: string;
  button?: string;
  error?: string;
}