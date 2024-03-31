/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing, Register, Login, DashboardLayout, Error, 
  AddJob, Stats, AllJobs, Profile, Admin, EditJob, AddFaq, AllFaqs, EditFaq,
  JoblistPage, AboutPage, ContactPage, AddKanban, AllKanbans, EditKanban,} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { action as addJobAction } from './pages/Job/AddJob';
import { loader as allJobsLoader } from './pages/Job/AllJobs';
import { loader as editJobLoader } from './pages/Job/EditJob';
import { action as editJobAction } from './pages/Job/EditJob';
import { action as deleteJobAction } from './pages/Job/DeleteJob';
import { action as addFaqAction } from './pages/FAQ/AddFaq';
import { loader as allFaqsLoader } from './pages/FAQ/AllFaqs';
import { loader as editFaqLoader } from './pages/FAQ/EditFaq';
import { action as editFaqAction } from './pages/FAQ/EditFaq';
import { action as deleteFaqAction } from './pages/FAQ/DeleteFaq';
import { action as addKanbanAction } from './pages/Kanban/AddKanban';
import { loader as allKanbansLoader } from './pages/Kanban/AllKanbans';
import { loader as editKanbanLoader } from './pages/Kanban/EditKanban';
import { action as editKanbanAction } from './pages/Kanban/EditKanban';
import { action as deleteKanbanAction } from './pages/Kanban/DeleteKanban';
import { loader as adminLoader } from './pages/Admin';
import { action as profileAction } from './pages/Profile';
import { loader as statsLoader } from './pages/Stats';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorElement from './components/ErrorElement';


//
export const checkDefaultTheme = () => {
  const isDarkTheme =
    localStorage.getItem('darkTheme') === 'true'
    document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};
checkDefaultTheme();

//
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'joblist',
        element: <JoblistPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction(queryClient),
      },
      {
        path: 'dashboard',
        element: <DashboardLayout queryClient={queryClient} />,
        loader: dashboardLoader(queryClient),
        children: [
          { 
            index: true,
            element: <Stats />,
            loader: statsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'add-job',
            element: <AddJob />,
            action: addJobAction(queryClient),
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: allJobsLoader(queryClient),
            errorElement: <ErrorElement />
          },
          {
            path: 'add-faq',
            element: <AddFaq />,
            action: addFaqAction(queryClient),
          },
          {
            path: 'all-faqs',
            element: <AllFaqs />,
            loader: allFaqsLoader(queryClient),
            errorElement: <ErrorElement />
          },
          {
            path: 'add-kanban',
            element: <AddKanban />,
            action: addKanbanAction(queryClient),
          },
          {
            path: 'all-kanbans',
            element: <AllKanbans />,
            loader: allKanbansLoader(queryClient),
            errorElement: <ErrorElement />
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction(queryClient),
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: editJobLoader(queryClient),
            action: editJobAction(queryClient),
          },
          { 
            path: 'delete-job/:id', 
            action: deleteJobAction(queryClient), 
          },
          {
            path: 'edit-faq/:id',
            element: <EditFaq />,
            loader: editFaqLoader(queryClient),
            action: editFaqAction(queryClient),
          },
          { 
            path: 'delete-faq/:id', 
            action: deleteFaqAction(queryClient), 
          },
          {
            path: 'edit-kanban/:id',
            element: <EditKanban />,
            loader: editKanbanLoader(queryClient),
            action: editKanbanAction(queryClient),
          },
          { 
            path: 'delete-kanban/:id', 
            action: deleteKanbanAction(queryClient), 
          },
        ],
      },
    ],
  },
]);


const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );

};

export default App;