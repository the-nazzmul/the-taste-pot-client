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
import ShowCourseDetails from "../Pages/ShowCourseDetails/ShowCourseDetails";
import UpdateClass from "../Pages/Dashboard/Instructor/UpdateClass";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import PrivateRoute from "./Private/PrivateRoute";
import AdminRoute from "./Private/AdminRoute";
import InstructorRoute from "./Private/InstructorRoute";
import StudentRoute from "./Private/StudentRoute";
import EnrolledClasses from "../Pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import MySelectedClasses from "../Pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import Payment from "../Pages/Dashboard/Student/Payments/Payment";
import PaymentHistory from "../Pages/Dashboard/Student/Payments/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import InstructorCourse from "../Pages/InstructorCourse/InstructorCourse";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("https://the-taste-pot-server.vercel.app/classes")
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
        element: <Instructors></Instructors>
      },
      {
        path: '/instructor/:id',
        element: <InstructorCourse></InstructorCourse>,
        loader: ({ params }) => fetch(`https://the-taste-pot-server.vercel.app/SingleUser/${params.id}`)
      },
      {
        path: '/courses',
        element: <Classes></Classes>
      },
      {
        path: '/courses/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://the-taste-pot-server.vercel.app/classes/${params.id}`)
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
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: ({ params }) => fetch(`https://the-taste-pot-server.vercel.app/classes/${params.id}`)
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
        element: <StudentRoute><Payment></Payment></StudentRoute>,
        loader: ({ params }) => {
          const token = localStorage.getItem('access-token')
          return fetch(`https://the-taste-pot-server.vercel.app/selectedCourse/${params.id}`, {
            headers: {
              authorization: `Bearer ${token}`
            }
          })
        }
      }
    ]
  }
]);