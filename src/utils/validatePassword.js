const validatePassword = (password) => {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[\W_]).{8,}$/.test(password);
};

export default validatePassword;