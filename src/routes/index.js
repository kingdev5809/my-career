import Aboutus from "pages/NonAuth/Aboutus";
import Talants from "pages/AfterAuth/Components/talants/Talants";
import Signup from "pages/Sign/Signup/Signup";
import Login from "pages/Sign/Login/Login";
import NotFound from "pages/404";
import PageBackground from "pages/NonAuth/Background";
import Background from "pages/Sign/RegisterFreelancer/Background/Background";
import ResumeFinish from "pages/Sign/RegisterFreelancer/ResumeFinish";
import Contract from "pages/AfterAuth//Components/contract";
import Contactus from "pages/NonAuth/Contactus";
import Freelancer from "pages/AfterAuth/Freelancer/Freelancer";
import UserFreelancer from "pages/AfterAuth/Freelancer/UserFreelancer";
import { RegisterCompany } from "pages/Sign/RegisterCompany/RegisterCompany";
import ChatForCompany from "pages/AfterAuth/Chat/ChatForCompany";
import Jobs from "pages/AfterAuth/Components/Jobs/Jobs";
import ChatModal from "pages/AfterAuth/Chat/Modal";
import ControlFilter from "pages/AfterAuth/Components/talants/ControlFilter";
import FreelancerProfile from "pages/AfterAuth/Components/FreelancerProfile/Profile";
import MyPostings from "pages/AfterAuth/Company/MyPostings";
import PostJob from "pages/AfterAuth/Company/Post job/PostJob";
export const publicRoute = [
  { id: 1, path: "/welcome", element: <PageBackground /> },
  { id: 2, path: "/login", element: <Login /> },
  { id: 3, path: "/sign-up", element: <Signup /> },
  { id: 4, path: "/chat", element: <ChatForCompany /> },
];

export const createProfileRoute = [
  { id: 1, path: "/welcome", element: <PageBackground /> },
  { id: 1, path: "/login", element: <Login /> },
  { id: 2, path: "/sign-up", element: <Signup /> },
];

export const freelancerResume = [
  { id: 2, path: "/", element: <PageBackground /> },
  { id: 3, path: "/welcome/create-profile", element: <Background /> },
  {
    id: 4,
    path: "/welcome/create-profile/:resumeId",
    element: <ResumeFinish />,
  },
];

export const createCompany = [
  { id: 2, path: "/welcome/register-company", element: <RegisterCompany /> },
];

export const freelancerRouter = [
  { id: 1, path: "/jobs", element: <Jobs ControlFilter={ControlFilter} /> },
  { id: 2, path: "/talants", element: <Talants /> },
  { id: 3, path: "/about", element: <Aboutus /> },
  { id: 4, path: "/contacts", element: <Contactus /> },
  { id: 5, path: "/contracts", element: <Contract /> },
  { id: 6, path: "/freelancer", element: <Freelancer /> },
  { id: 7, path: "/profile", element: <FreelancerProfile /> },
  { id: 8, path: "/chat", element: <ChatModal /> },
  { id: 9, path: "/freelancer-user", element: <UserFreelancer /> },

  { id: 10, path: "/*", element: <NotFound /> },
];

export const companyRouter = [
  {
    id: 1,
    path: "/talants",
    element: <Talants ControlFilter={ControlFilter} />,
  },
  { id: 2, path: "/jobs", element: <Jobs /> },
  { id: 3, path: "/about", element: <Aboutus /> },
  { id: 4, path: "/contacts", element: <Contactus /> },
  { id: 5, path: "/contracts", element: <Contract /> },
  { id: 6, path: "/freelancer", element: <Freelancer /> },
  { id: 7, path: "/profile", element: <FreelancerProfile /> },
  { id: 8, path: "/freelancer-user", element: <UserFreelancer /> },
  { id: 9, path: "/my-jobs", element: <MyPostings /> },
  { id: 10, path: "/add-job", element: <PostJob /> },
  { id: 11, path: "/chat", element: <ChatModal /> },
  { id: 12, path: "/*", element: <NotFound /> },
];
