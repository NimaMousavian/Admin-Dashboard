import Home from "./pages/home/Home";
import UsersList from "./pages/usersList/UsersList";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import User from "./pages/user/User";
import Product from "./pages/product/Product";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/users/", element: <UsersList /> },
  { path: "/users/:id", element: <User /> },
  { path: "/newuser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <Product /> },
];

export default routes;
