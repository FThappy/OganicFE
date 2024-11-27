export const checkValidPhoneNumber = (phoneNumber: string) => {
  const phonePattern = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;

  return phonePattern.test(phoneNumber);
};
