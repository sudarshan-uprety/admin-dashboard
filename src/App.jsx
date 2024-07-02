import { Outlet, useRoutes } from 'react-router-dom';
import Navbar from './Navbar';
import router from './router/Router';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from "./dashboard/dashboard"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="ok"
          element={<h1>hello world</h1>}
        />
        <Route path="i" element={<h2 >hello world 2</h2>} />
      </Route>
    </Routes>
  )
}
