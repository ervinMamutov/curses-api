const matchPasswords = (user) => {
  return user.password === user.confirmPassword ? true : false;
};

export default matchPasswords;
