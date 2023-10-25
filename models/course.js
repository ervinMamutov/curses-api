import { v4 as newId } from 'uuid';

import courses from '../data/courses.js';

class Course {
  constructor(name, price, img) {
    this.id = newId();
    this.name = name;
    this.price = price;
    this.img = img;
  }

  static getCourses() {
    return courses;
  }

  addCourse() {
    courses.push(this);
  }
}

export default Course;
