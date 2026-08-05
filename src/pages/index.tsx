import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants';
import AuthLayout from '../layout/AuthLayout';
import MainLayout from '../layout/MainLayout';
import DashboardLayout from '../layout/DashboardLayout';
import SettingLayout from '../layout/SettingLayout';
import PrivateRoutes from './Private';

// Lazy load components
const Login = lazy(() => import('./Auth/Login'));
const Signup = lazy(() => import('./Auth/Signup'));
const ForgotPassword = lazy(() => import('./Auth/ForgotPassword'));
const Dashboard = lazy(() => import('./Private/Dashboard'));
const NotFound = lazy(() => import('./Public/NotFound'));
const Profile = lazy(() => import('./Private/Profile'));
const Setting = lazy(() => import('./Private/Setting'));
// const Landing = lazy(() => import('./Public/Landing'));
const About = lazy(() => import('./Public/About'));
const PrivacyPolicy = lazy(() => import('./Public/PrivacyPolicy'));
const TermsAndCondition = lazy(() => import('./Public/TermsAndCondition'));
const ContactUs = lazy(() => import('./Public/ContactUs'));
const Users = lazy(() => import('./Private/Users'));
const Home = lazy(() => import('./Public/Home'));
const CreateAccount = lazy(() => import('./Auth/CreateAccount'));
const CountrySection = lazy(() => import('../components/Base/CountrySection'));
const CreatePassword = lazy(() => import('../components/Base/CreatePassword'));
const CreateSignPassword = lazy(() => import('../components/Base/CreateSignPassword'));
const VerifyDetails = lazy(() => import('../components/Base/OtpVerification'));





export default function Pages() {
  return (
    // TODO: add custom loader
    <Suspense fallback>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path={ROUTES.LANDING} element={<Home/>} />
          <Route path={ROUTES.HOME} element={<Home/>} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
          <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route
            path={ROUTES.TERMS_CONDITION}
            element={<TermsAndCondition />}
          />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<Signup />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccount/>} />
          <Route path={ROUTES.COUNTRYSECTION} element={<CountrySection />} />
          <Route path={ROUTES.CREATE_PASSWORD} element={<CreatePassword />} />
          <Route path={ROUTES.CREATE_SIGN_PASSWORD} element={<CreateSignPassword />} />
          <Route path={ROUTES.VERIFY_DETAILS} element={<VerifyDetails />} />

        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          {/* Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            <Route path={ROUTES.DASHBOARD} index element={<Dashboard />} />
            <Route path={ROUTES.USERS} index element={<Users />} />
          </Route>

          {/* Setting Route */}
          <Route element={<SettingLayout />}>
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.SETTING} element={<Setting />} />
          </Route>
        </Route>

        {/* Always keep at last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
