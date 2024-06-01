import { Router } from 'express';
import { academicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { studentRoutes } from '../modules/student/student.route';
import { userRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoutes,
    },
    {
        path: '/students',
        route: studentRoutes,
    },
    {
        path: '/academic-semester',
        route: academicSemesterRoute,
    },
];

moduleRoutes.forEach((routes) => router.use(routes.path, routes.route));

// router.use('/students', studentRoutes)
// router.use('/users', userRoutes)

export default router;
