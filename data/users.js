import { v4 as newId } from 'uuid';

const users = [
  {
    id: newId(),
    nickname: 'silver',
    email: 'test1@gmail.com',
    password: '$2a$10$MkSpJakzEaaOwK9OB0.6/./yZHnoWLSTk9xBSxXpy6g5vHaC5wA5K' //'P@ssw0rd1'
  },
  {
    id: newId(),
    nickname: 'gold',
    email: 'gold@gmail.com',
    password: 'S3cur1t@'
  },
  {
    id: newId(),
    nickname: 'diamond',
    email: 'diamond@gmail.com',
    password: '1234@$abcd'
  }
];

export default users;
