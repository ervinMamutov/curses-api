import bcrypt from 'bcryptjs';

const hashingPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export default hashingPassword;
