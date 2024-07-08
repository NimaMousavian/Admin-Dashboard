import Home from "./pages/home/Home";
import UsersList from "./pages/usersList/UsersList";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UsersList /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
