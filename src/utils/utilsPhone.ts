export const checkValidPhoneNumber = (phoneNumber: string) => {
  const phonePattern = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
  // const phonePattern = /^0\d{9,10}$/;

  return phonePattern.test(phoneNumber);
};
