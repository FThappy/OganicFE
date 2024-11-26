import { DATE_FORMAT_TYPE } from '@/constants/common';
import { parseISO, isValid, format as formatDate } from 'date-fns';

export const convertToDate = (value: string, format: string = DATE_FORMAT_TYPE.ymd) => {
  const date = parseISO(value); // Phân tích chuỗi ISO
  return !!value && isValid(date) ? formatDate(date, format) : '';
};
