import {
    createBrowserRouter, 
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Home/Registration/Registration";
import Blog from "../Pages/Home/BlogPage/Blog/Blog";
import BlogDetails from "../Pages/Home/BlogPage/Blog/BlogDetails/BlogDetails";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Dashboard/Dashboard"; 
import DonorHome from "../Dashboard/Donor/DonorHome";
import MyRequest from "../Dashboard/Donor/MyRequest";
import SentRequest from "../Dashboard/Donor/SentRequest"; 
import EditRequest from "../Dashboard/Donor/EditRequest";
import DetailsRequest from "../Dashboard/Donor/DetailsRequest"; 
import AllDonationRequest from "../components/AllDonaton/AllDonationRequest";
import AdminHome from "../Dashboard/Admin/AdminHome";
import AllUsersPage from "../Dashboard/Admin/AllUsersPage";
import AddBlog from "../Dashboard/Admin/AddBlog";
import AllRequest from "../Dashboard/Admin/AllRequest";
import AdminRouter from "./AdminRouter";
import VolunteerHome from "../Dashboard/Volunteer/VolunteerHome";
import VolunteerRouter from './VolunteerRouter';
import ContentManage from "../Dashboard/Admin/ContentManage";
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorElement/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path: 'login',
            element:<Login/>
        },
        {
          path: 'registration',
          element: <Registration/>
        },
        {
          path: 'blog',
          element: <Blog/>
        },
        {
          path: 'blogdetails/:id',
          element: <BlogDetails/>,
          loader: ({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
        },
        {
          path: 'alldonation',
          element: <AllDonationRequest/>
        },
        {
          path: 'addblog',
          element: <PrivateRouter><AddBlog/></PrivateRouter>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRouter><Dashboard/></PrivateRouter>,
      children:[
        // donor
        {
          path: 'homepage',
          element: <DonorHome/>
        },
        {
          path: 'myrequest',
          element: <MyRequest/>
        },
        {
          path: 'sentrequest',
          element: <SentRequest/>
        },
        {
          path: 'editrequests/:id',
          element: <EditRequest/>,
          loader: ({params})=>fetch(`http://localhost:5000/requests/${params.id}`)
        },
        {
          path: 'details/:id',
          element: <DetailsRequest/>,
          loader: ({params})=>fetch(`http://localhost:5000/requests/${params.id}`)
        }, 
        // admin user
        {
          path: 'adminhome',
          element:<AdminRouter><AdminHome/></AdminRouter>
        },
        {
          path: 'allusers', 
          element: <AdminRouter><AllUsersPage/></AdminRouter>
        },
        {
          path:'allrequest',
          element:<AdminRouter><AllRequest/></AdminRouter>
        },
        {
          path: 'contentmanage',
          element:<AdminRouter><ContentManage/></AdminRouter>
        }, 
        // volunteer user
        {
          path:'volunteerhome',
          element: <VolunteerRouter><VolunteerHome/></VolunteerRouter>
        }

      ] 
    }

  ]);


  export default router