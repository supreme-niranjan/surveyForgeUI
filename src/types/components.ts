import { ReactNode, MouseEvent, ChangeEvent, FormEvent } from 'react';
import { SurveyData, Question, SurveyPage, SubmissionData, CustomStyles, SubmitButtonConfig, SurveyViewerMode } from './survey';

// Base component props
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  id?: string;
}

// Button component props
export interface ButtonProps extends BaseComponentProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'success' | 'warning' | 'danger';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'xs' | 'xl';
  asChild?: boolean;
  loading?: boolean;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

// Input component props
export interface InputProps extends BaseComponentProps {
  type?: string;
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
}

// Select component props
export interface SelectOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface SelectProps extends BaseComponentProps {
  options: SelectOption[];
  value?: string | string[];
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  label?: string;
  description?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  loading?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  name?: string;
}

// Checkbox component props
export interface CheckboxProps extends BaseComponentProps {
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  description?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  indeterminate?: boolean;
  size?: 'sm' | 'default' | 'lg';
  name?: string;
  value?: string;
}

// Survey Viewer component props
export interface SurveyViewerProps extends BaseComponentProps {
  surveyData: SurveyData;
  mode?: SurveyViewerMode;
  customStyles?: CustomStyles;
  onSubmit?: (data: SubmissionData) => void | Promise<void>;
  onQuestionChange?: (questionId: string, value: any, allData: Record<string, any>) => void;
  initialValues?: Record<string, any>;
  submitButton?: SubmitButtonConfig;
}

// Visual Survey Builder component props
export interface ComponentLibraryProps extends BaseComponentProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onDragStart: (component: any) => void;
}

export interface SurveyCanvasProps extends BaseComponentProps {
  surveyData: SurveyData;
  onQuestionSelect: (questionId: string) => void;
  selectedQuestionId?: string | null;
  onQuestionUpdate: (questionId: string, updates: Partial<Question>) => void;
  onQuestionDelete: (questionId: string) => void;
  onQuestionDuplicate: (questionId: string) => void;
  onQuestionReorder: (fromIndex: number, toIndex: number) => void;
  onDrop: (componentData: any, dropIndex: number) => string | null;
  isPreviewMode: boolean;
  onTogglePreview: () => void;
  onSurveyDataUpdate: (updates: Partial<SurveyData>) => void;
}

export interface PropertiesPanelProps extends BaseComponentProps {
  selectedQuestion?: Question | null;
  onQuestionUpdate: (questionId: string, updates: Partial<Question>) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  surveyData: SurveyData;
}

export interface FloatingToolbarProps extends BaseComponentProps {
  onUndo: () => void;
  onRedo: () => void;
  onSave: () => void;
  onPreview: () => void;
  onPublishUpdate: () => void;
  canUndo: boolean;
  canRedo: boolean;
  saveStatus: string;
  isPreviewMode: boolean;
  onTogglePreview: () => void;
  surveyData: SurveyData;
  onExportSurvey: () => void;
  onImportJson: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface PageNavigationProps extends BaseComponentProps {
  pages: SurveyPage[];
  currentPageId: string;
  onPageSelect: (pageId: string) => void;
  onPageAdd: () => void;
  onPageDelete: (pageId: string) => void;
  onPageReorder: (fromIndex: number, toIndex: number) => void;
}

// Dashboard component props
export interface StatsOverviewProps extends BaseComponentProps {
  stats: {
    totalSurveys: number;
    activeSurveys: number;
    totalResponses: number;
    avgCompletionRate: number;
  };
}

export interface SearchAndSortProps extends BaseComponentProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export interface BulkActionsProps extends BaseComponentProps {
  selectedCount: number;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  onBulkDuplicate: () => void;
  onBulkArchive: () => void;
  onBulkExport: () => void;
}

export interface SurveyCardProps extends BaseComponentProps {
  survey: any;
  onDuplicate: (surveyId: string | number) => void;
  onArchive: (surveyId: string | number) => void;
  onExport: (surveyId: string | number) => void;
  isSelected: boolean;
  onSelect: (surveyId: string | number, isSelected: boolean) => void;
}

export interface SurveyListItemProps extends BaseComponentProps {
  survey: any;
  onDuplicate: (surveyId: string | number) => void;
  onArchive: (surveyId: string | number) => void;
  onExport: (surveyId: string | number) => void;
  isSelected: boolean;
  onSelect: (surveyId: string | number, isSelected: boolean) => void;
}

// Event handlers
export type ClickHandler = (event: MouseEvent) => void;
export type ChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
export type FormHandler = (event: FormEvent) => void;
export type KeyboardHandler = (event: KeyboardEvent) => void;