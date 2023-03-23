import moment from 'moment';
import toNumber from 'lodash/toNumber';
import { isEmpty, isoDateFormat } from './utils';
import minchecked from './minchecked';

export default function validate(value, context, constraint = {}, input = {}) {
  if (Array.isArray(input.value)) {
    return minchecked(value, context, constraint, input);
  }

  if (isEmpty(value)) return true;

  const number = toNumber(value);

  return (!isNaN(number) && isFinite(number) && number >= toNumber(constraint.value)) || constraint.errorMessage || false;
}
