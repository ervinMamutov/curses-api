import Course from '../models/course.js';

const courseControllers = {
  home: (req, res) => {
    const courses = Course.getCourses();

    res.status(200).render('home', {
      courses: courses
    });
  },
  addCourseForm: (req, res) => {
    res.status(200).render('formAddCourse', {
      title: 'Add new Course',
      action: '/add-course',
      button: 'Add-course'
    });
  },
  addCourse: (req, res) => {
    const course = req.body;
    const { name, price, img } = req.body;
    if (!name || !price || !img) {
      res.status(400).render('message', {
        title: 'Unfilled fields',
        message: 'All course fields are not filled in',
        message2: 'Try again',
        action: '/add-course'
      });
    } else {
      const newCourse = new Course(name, price, img);
      newCourse.addCourse();
      res.status(302).redirect('/');
    }
  }
};

export default courseControllers;
