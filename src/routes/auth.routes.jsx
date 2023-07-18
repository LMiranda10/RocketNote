import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn/';
import SignUp from '../pages/SignIn/';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}