import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn/index.jsx';
import { SignUp } from '../pages/SignIn/index.jsx';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}