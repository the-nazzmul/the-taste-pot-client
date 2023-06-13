import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import Login from "../Pages/LoginAndRegistration/Login";
import Registration from "../Pages/LoginAndRegistration/Registration";
import AddClasses from "../Pages/Dashboard/Instructor/AddClasses";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import MySelectedClasses from "../Pages/Dashboard/Student/MySelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/Student/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory";
import ShowCourseDetails from "../Pages/ShowCourseDetails/ShowCourseDetails";
import UpdateClass from "../Pages/Dashboard/Instructor/UpdateClass";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import PrivateRoute from "./Private/PrivateRoute";
import AdminRoute from "./Private/AdminRoute";
import InstructorRoute from "./Private/InstructorRoute";
import StudentRoute from "./Private/StudentRoute";
import Payment from "../Pages/Dashboard/Student/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>,
        loader: () => fetch('http://localhost:4000/users/instructors')
      },
      {
        path: '/courses',
        element: <Classes></Classes>
      },
      {
        path: '/courses/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`http://localhost:4000/classes/${params.id}`)
      },
      {
        path: '/courses/:id',
        element: <ShowCourseDetails></ShowCourseDetails>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // Admin Routes
      {
        path: 'manageClasses',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'manageUsers',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      // Instructor Routes
      {
        path: 'addClasses',
        element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
      },
      {
        path: 'myClasses',
        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: 'updateClasses/:id',
        element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>,
        loader: ({ params }) => fetch(`http://localhost:4000/classes/${params.id}`)
      },
      // student routes
      {
        path: 'selectedClasses',
        element: <StudentRoute><MySelectedClasses></MySelectedClasses></StudentRoute>
      },
      {
        path: 'enrolledClasses',
        element: <StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>
      },
      {
        path: 'paymentHistory',
        element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
      },
      {
        path: 'payment/:id',
        element: <StudentRoute><Payment></Payment></StudentRoute>
      }
    ]
  }
]);