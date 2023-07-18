import { Routes, Route } from 'react-router-dom';

import { signIn } from '../pages/signin';
import { signUp } from '../pages/signup';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<signUp />} />
      <Route path="/" element={<signIn />} />
    </Routes>
  );
}