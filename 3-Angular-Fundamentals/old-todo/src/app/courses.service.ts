import { Observable } from "rxjs";

export class CoursesService {

    protected courses: string[] = ["Course1", "course2", "course3"]
    getCourses(): string[] {
        return this.courses;
    }
}