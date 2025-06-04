import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Trade from "./pages/Trade";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/trade",
        element: (
          <ProtectedRoute>
            <Trade />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

// const queryClient = new QueryClient();

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
