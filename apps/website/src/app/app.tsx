import { Loader } from '@mantine/core';
import React, { Suspense } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Topbar from '../components/topbar';
import ThreeBForm from '../3bs/form';
const ThreeBS = React.lazy(() => import('../3bs'));
const Showcase = React.lazy(() => import('../pages/showcase'));
const Deck = React.lazy(() => import('../investment/deck'));
const Home = React.lazy(() => import('../pages/home/home'));
const Auth = React.lazy(() => import('../pages/auth'));
const StartUp = React.lazy(() => import('../pages/startup/home'));
const Contact = React.lazy(() => import('../pages/contact/contact'));
const Careers = React.lazy(() => import('../pages/careers/careers'));
const Business = React.lazy(() => import('../pages/business/home'));
const About = React.lazy(() => import('../pages/about-us'));
const WhyMiurac = React.lazy(() => import('../pages/why-miurac'));
const Investor = React.lazy(() => import('../pages/investor/home'));
const CaseStudy = React.lazy(() => import('../pages/case-study'));
const EdufeatCaseStudy = React.lazy(
  () => import('../pages/case-study/edufeat')
);

export function App() {
  return (
    <div>
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
              <>
                <Topbar bg="transparent" />
                <Outlet />
              </>
            }
          >
            <Route
              index
              element={
                <div>
                  <Home />
                </div>
              }
            />
            <Route
              path={'login'}
              element={
                <div>
                  <Auth />
                </div>
              }
            />
            <Route
              path={'why-miurac'}
              element={
                <div>
                  <WhyMiurac />
                </div>
              }
            />
            <Route
              path={'business'}
              element={
                <div>
                  <Business />
                </div>
              }
            />
            <Route
              path={'startup'}
              element={
                <div>
                  <StartUp />
                </div>
              }
            />
            <Route
              path={'investor'}
              element={
                <div>
                  <Investor />
                </div>
              }
            />

            <Route
              path={'about'}
              element={
                <div>
                  <About />
                </div>
              }
            />
            <Route path={'career'} element={<Careers />} />

            <Route
              path={'contact'}
              element={
                <div>
                  <Contact />
                </div>
              }
            />
          </Route>
          <Route
            path={'showcase'}
            element={
              <>
                <Topbar bg="white" />
                <Showcase />
              </>
            }
          />
          <Route
            path={'deck/:accessId'}
            element={
              <div>
                <Deck />
              </div>
            }
          />
          <Route
            path={'/case-study'}
            element={
              <>
                <Topbar bg="white" />
                <Outlet />
              </>
            }
          >
            <Route
              index
              element={
                <div>
                  <CaseStudy />
                </div>
              }
            />
            <Route
              path={'edufeat'}
              element={
                <div>
                  <EdufeatCaseStudy />
                </div>
              }
            />
          </Route>
          <Route
            path={'3bs'}
            element={
              <>
                <Topbar bg="white" />
                <Outlet />
              </>
            }
          >
            <Route index element={<ThreeBS />} />
            <Route path='form' element={<ThreeBForm />} />
          </Route>
          <Route path={'*'} element={<Navigate to={'/'} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
