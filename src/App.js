import { Landing, ErrorPage, Register, ProtectedRoute } from "./Pages";
import { Routes, Route } from "react-router-dom";
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./Pages/dashboard";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Stats />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="landing" element={<Landing />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
