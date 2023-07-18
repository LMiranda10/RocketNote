import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../../src/pages/SignIn';
import { SignUp } from '../../src/pages/SignUp';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}