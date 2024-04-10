import { v4 } from 'uuid';

export const getRandomId = () => {
  const hexString = v4();

  // remove decoration
  const hexStringUndecorated = hexString.replace(/-/g, '');

  const base64String = Buffer.from(hexStringUndecorated, 'hex').toString('base64');

  const safeBase64String = base64String.replace(/\//g, '_').replace(/\+/g, '-');

  return safeBase64String;
};
