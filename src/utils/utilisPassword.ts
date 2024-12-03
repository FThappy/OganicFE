export const checkValidPassword = (password: string) => {
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/;

  // const phonePattern = /^0\d{9,10}$/;

  return passwordPattern.test(password);
};
