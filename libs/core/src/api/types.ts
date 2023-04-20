export interface BackendErrorResponse {
  errors: BackendError[];
}

export interface BackendError {
  message: string;
  errCode?: string;
  errArgs?: Record<string, any>;
  property?: string;
  invalidValue?: Record<string, any>;
  action?: any;
}

export enum FetchStatus {
  FETCH_ERROR = 'FETCH_ERROR',
}
