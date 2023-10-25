import { v4 as newId } from 'uuid';

const courses = [
  {
    id: newId(),
    name: 'JavaScript',
    price: 50,
    img: 'https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg'
  },
  {
    id: newId(),
    name: 'NodeJs',
    price: 150,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBJtfZBg-MknbJ7P0cnfkqs3acjZcQRI3gwvqAjO4U4SH0eHznZR423iqoJID0HvnRNcY&usqp=CAU'
  },
  {
    id: newId(),
    name: 'React JS',
    price: 120,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQP2XxtB-U9yDkFXg7QZTH4v-tI9rBRtg6RjIuIMxYaz_yuHlj9PtbRMCSTQqpGsfLu8&usqp=CAU'
  },
  {
    id: newId(),
    name: 'C++',
    price: 220,
    img: 'https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/dec/17dec/What-is-Cplusplus.jpg'
  }
];

export default courses;
