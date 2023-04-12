import { get } from 'lodash';

export const getQueryParams = (object: Object) => {
  return Object.keys(object)
    .map((key) => `${key}=${get(object, key)}`)
    .join('&');
};
