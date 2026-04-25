import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from "./pages/Home.jsx";
import Menu from "./features/menu/Menu.jsx";
import { loader as menuLoader } from "./features/menu/Menu.jsx";
import Error from "./components/Error.jsx";
import Cart from "./features/cart/Cart.jsx";
import Order from "./features/order/Order.jsx";
import OrderOverview from "./features/order/OrderOverview.jsx";
import { loader as orderLoader } from "./features/order/OrderOverview.jsx";
import { action as orderAction } from "./features/order/Order.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 1, // 5 minutes (default)
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />, errorElement: <Error /> },
      { path: "/home", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,

        loader: menuLoader,
      },
      { path: "/order", element: <Order />, action: orderAction },
      {
        path: "/order/:orderID",
        element: <OrderOverview />,
        loader: orderLoader,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>,
);
