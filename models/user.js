import { v4 as newId } from 'uuid';
import users from '../data/users.js';

class User {
  constructor(userInfo) {
    this.id = newId();
    this.userInfo = userInfo;
  }

  static getUserByEmail = (userInfo) => {
    return users.find((user) => user.email === userInfo.email);
  };

  addUser() {
    users.push(this);
  }
}

export default User;
