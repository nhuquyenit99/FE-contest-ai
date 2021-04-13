import RawCode from './http-code.json';

export type HTTP_STATUS_CODE = keyof typeof RawCode

export function HTTPCodeLabel(code: HTTP_STATUS_CODE = '400') {

    return RawCode[code] ?? 'Unknown';
}
