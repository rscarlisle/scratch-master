import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
export const coursesRouterConfig = [
    {
        path: 'courses',
            children: [
                {
                    path: '',
                    component: CoursesComponent
                },
                {
                    path: ':id',
                    component: CourseDetailComponent
                }
            ]
    }
]