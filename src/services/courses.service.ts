import CourseModel from '../models/courses.models';
import { ICourse } from '../interfaces/admin.interface';


export class CourseService {
  async dashboardCourses():Promise<ICourse[]> {
    const courses = await CourseModel.find();
    if (!courses.length || !courses) {
      return [];
    }
    const mappedResult = courses.map((course) => ({
      title: course.title,
      description: course.description,
      price: course.price,
      imageUrl: course.imageUrl,
    }));
    return mappedResult;
  }
}

export const courseService = new CourseService();

