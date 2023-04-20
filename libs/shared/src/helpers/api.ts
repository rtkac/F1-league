import i18n from 'i18next';

export function buildCommonHeaders(headers: Headers) {
  headers.append('Accept', 'application/json;charset=UTF-8');
  headers.append('Accept-Language', i18n.language);
  headers.append('Pragma', 'no-cache');
  headers.append('Cache-Control', 'no-cache');
}
