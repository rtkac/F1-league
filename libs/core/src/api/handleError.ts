import i18next from 'i18next';

import { BackendErrorResponse } from './types';

export const GENERAL_ERROR_CODE = 'general.error.unknown_error';

export function handleRTKError(error: any): BackendErrorResponse {
  // fallthrough from already created/given ZDS error object
  if (isZDSError(error)) {
    return error;
  }

  // https://redux-toolkit.js.org/rtk-query/usage/error-handling
  // assume that if error is object and has data with errors property then it's parsed backed error response
  if (isZDSError(error.data)) {
    return error.data;
  }

  return generateZDSError();
}

export function generateZDSError(message?: string, errCode?: string): BackendErrorResponse {
  return {
    errors: [
      {
        message: message || i18next.t(GENERAL_ERROR_CODE),
        errCode: errCode || GENERAL_ERROR_CODE,
      },
    ],
  };
}

export function isZDSError(anyValue?: any) {
  if (!anyValue) {
    return false;
  }

  return anyValue.errors?.constructor.name === 'Array';
}
