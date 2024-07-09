import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/student/OfferedCourse";

export const facultyPaths = [
    {
        name:'Dashboard',
        path:'dashboard',
        element : <FacultyDashboard />
    },
    {
        name:'Offered courses',
        path:'offered-course',
        element : <OfferedCourse />
    },
]