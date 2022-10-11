import { Loader } from '@mantine/core';
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Topbar from '../components/topbar';
const Home = React.lazy(() => import('../pages/home/home'));
const StartUp = React.lazy(() => import('../pages/startup/home'));
const Contact = React.lazy(() => import('../pages/contact/contact'));
const Careers = React.lazy(() => import('../pages/careers/careers'));
const Business = React.lazy(() => import('../pages/business/home'));
const About = React.lazy(() => import('../pages/about-us'));
const WhyMiurac = React.lazy(() => import('../pages/why-miurac'));
const Investor = React.lazy(() => import('../pages/investor/home'));

export function App() {
  return (
    <div >
      <Topbar />
      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route
            path={'/'}

            element={
              <div >
                <Home />
              </div>
            }
          />
          <Route
            path={'/why-miurac'}
            element={
              <div>
                <WhyMiurac />
              </div>
            }
          />
          <Route
            path={'/business'}
            element={
              <div>
                <Business />
              </div>
            }
          />
          <Route
            path={'/startup'}
            element={
              <div>
                <StartUp />
              </div>
            }
          />
          <Route
            path={'/investor'}
            element={
              <div>
                <Investor />
              </div>
            }
          />
          <Route
            path={'/about'}
            element={
              <div>
                <About />
              </div>
            }
          />
          <Route
            path={'/career'}
            element={
              <div>
                <Careers />
              </div>
            }
          />
          <Route
            path={'/contact'}
            element={
              <div>
                <Contact />
              </div>
            }
          />
          <Route path={'*'} element={<Navigate to={'/'} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
