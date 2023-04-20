import { AnyAction, isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

export function isRejectedDueToBackendError(action: AnyAction) {
  if (!isRejectedWithValue(action)) {
    return false;
  }

  return Number.isInteger((action as PayloadAction<FetchBaseQueryError>).payload.status);
}

export function isRejectedDueToUnknownError(action: AnyAction) {
  if (!isRejectedWithValue(action)) {
    return false;
  }

  return !Number.isInteger((action as PayloadAction<FetchBaseQueryError>).payload.status);
}
