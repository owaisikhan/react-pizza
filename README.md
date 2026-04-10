# 🍕 React Pizza Co.

A full-featured pizza ordering SPA built with **React 19**, **Redux Toolkit**, **React Router v7**, and **Tailwind CSS v4**. Users can browse a live menu, manage their cart with real-time quantity controls, place orders with optional priority delivery, and track order status — all without any authentication required.

---

## ✨ Features

- **No login required** — just enter your name and start ordering
- **Live menu** — fetches real pizza data from a REST API on every visit
- **Smart cart** — add, increment, decrement, or delete individual items directly from both the menu and cart pages
- **Inline quantity controls on menu** — once a pizza is added, the Add to Cart button is replaced by `+` / `−` controls right on the menu item
- **Cart validation** — Login button only appears when a name has been typed; cart page shows a helpful empty state message
- **Priority delivery** — opt in for +20% cost at checkout
- **Order tracking** — live order status, estimated delivery time, and full price breakdown
- **Named Redux selectors** — `getCart`, `getUsername`, `getItemQuantity` for clean, reusable state access
- **Custom design system** — 11 hand-crafted Tailwind v4 color palettes defined in `@theme`
- **Code quality** — ESLint + Prettier + `prettier-plugin-tailwindcss` enforced
- **Responsive** — works across mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology                                                                | Version | Purpose                         |
| ------------------------------------------------------------------------- | ------- | ------------------------------- |
| [React](https://react.dev/)                                               | ^19.2.4 | UI library                      |
| [React Router](https://reactrouter.com/)                                  | ^7.14.0 | Routing, loaders & form actions |
| [Redux Toolkit](https://redux-toolkit.js.org/)                            | ^2.11.2 | Global state (cart + user)      |
| [Tailwind CSS](https://tailwindcss.com/)                                  | ^4.2.2  | Utility-first styling           |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | ^4.2.2  | Tailwind v4 Vite plugin         |
| [Vite](https://vitejs.dev/)                                               | ^8.0.1  | Build tool & dev server         |
| [ESLint](https://eslint.org/)                                             | ^9.39.4 | Linting                         |
| [Prettier](https://prettier.io/)                                          | ^3.8.1  | Code formatting                 |

---

## 📁 Project Structure

```
react-pizza/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/              # Shared UI components
│   │   ├── Button.jsx           # Multi-variant: login | base | small | none
│   │   ├── Header.jsx           # Logo, search bar, username display
│   │   ├── Footer.jsx           # Cart total + View Cart link
│   │   └── Error.jsx            # Route error boundary
│   ├── features/
│   │   ├── cart/
│   │   │   ├── Cart.jsx         # Cart page with empty state handling
│   │   │   ├── CartItem.jsx     # Item row with +/−/delete controls
│   │   │   ├── CartOverview.jsx # Renders all cart items from Redux
│   │   │   └── cartSlice.js     # add, increase, decrease, delete, clear + selectors
│   │   ├── menu/
│   │   │   ├── Menu.jsx         # Menu page with React Router loader
│   │   │   └── MenuItem.jsx     # Pizza card — Add to Cart ↔ quantity toggle
│   │   ├── order/
│   │   │   ├── Order.jsx        # Order form + React Router action
│   │   │   └── OrderOverview.jsx# Order status, delivery ETA, price summary
│   │   └── user/
│   │       ├── Username.jsx     # Reads + displays name from Redux
│   │       └── userSlice.js     # name state + addUser action + getUsername selector
│   ├── pages/
│   │   ├── Home.jsx             # Name input, conditional Login button
│   │   ├── CreateOrder.jsx      # (placeholder)
│   │   └── OrderSummary.jsx     # (placeholder)
│   ├── services/
│   │   └── apiPizza.js          # getMenu · getOrder · createOrder
│   ├── App.jsx                  # Root layout — Header + Outlet + Footer
│   ├── main.jsx                 # Router setup + Redux Provider + entry point
│   ├── store.js                 # configureStore with user + cart reducers
│   └── index.css                # Tailwind v4 @theme — 11 custom color palettes
├── index.html                   # App shell — loads Saira Stencil from Google Fonts
├── vite.config.js               # React + Tailwind Vite plugins
├── tailwind.config.js           # Roboto Mono font + custom height/fontSize
├── eslint.config.js             # ESLint v9 flat config
├── .prettierrc                  # Prettier with prettier-plugin-tailwindcss
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** `v18+`
- **npm** `v9+`

### Installation

```bash
# Clone the repository
git clone https://github.com/owaisikhan/react-pizza.git
cd react-pizza

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 🗺️ Routes

| Path              | Component       | Data Source                                          |
| ----------------- | --------------- | ---------------------------------------------------- |
| `/`               | `Home`          | —                                                    |
| `/home`           | `Home`          | —                                                    |
| `/menu`           | `Menu`          | loader → `getMenu()`                                 |
| `/cart`           | `Cart`          | Redux state                                          |
| `/order`          | `Order`         | action → `createOrder()` → redirects to `/order/:id` |
| `/order/:orderID` | `OrderOverview` | loader → `getOrder(id)`                              |

All routes are nested under `App`, which renders the persistent `Header` and `Footer`. Error boundaries are attached to the root and `/menu` routes.

---

## 🗃️ State Management

Two Redux Toolkit slices power the app:

### `userSlice`

|          |                                                  |
| -------- | ------------------------------------------------ |
| State    | `name: ""`                                       |
| Action   | `addUser(name)` — sets the user's name           |
| Selector | `getUsername(state)` — returns `state.user.name` |

### `cartSlice`

|                             |                                                                            |
| --------------------------- | -------------------------------------------------------------------------- |
| State                       | `cart: []` — array of `{ pizzaId, name, quantity, unitPrice, totalPrice }` |
| `addToCart(item)`           | Pushes a new pizza into the cart                                           |
| `increaseQuantity(pizzaId)` | Increments quantity, recalculates `totalPrice`                             |
| `decreaseQuantity(pizzaId)` | Decrements quantity; auto-removes item when it hits 0                      |
| `deleteItem(pizzaId)`       | Removes item immediately regardless of quantity                            |
| `clearCart()`               | Empties the entire cart                                                    |
| `getCart(state)`            | Returns the full cart array                                                |
| `getItemQuantity(pizzaId)`  | Curried selector — returns quantity for a specific pizza ID                |

---

## 🔗 API

Connects to the [Jonas Schmedtmann Fast Pizza API](https://react-fast-pizza-api.jonas.io/api):

| Function            | Method | Endpoint         | Description                                                |
| ------------------- | ------ | ---------------- | ---------------------------------------------------------- |
| `getMenu()`         | `GET`  | `/api/menu`      | Full list of pizzas with ingredients, price & availability |
| `getOrder(id)`      | `GET`  | `/api/order/:id` | Single order by ID — includes status, ETA, cart, prices    |
| `createOrder(data)` | `POST` | `/api/order`     | Creates order, returns object with generated `id`          |

---

## 🎨 Design System

All custom colors are defined in `src/index.css` via the Tailwind v4 `@theme` block. The display font **Saira Stencil** is loaded from Google Fonts in `index.html`, with **Roboto Mono** set as the base sans-serif in `tailwind.config.js`.

### Color Palettes

| Palette token   | Role in the UI                                            |
| --------------- | --------------------------------------------------------- |
| `burnt-peach`   | Primary action color — buttons, header/footer backgrounds |
| `golden-sand`   | Warm accent — text on dark surfaces, price tags           |
| `mauve-bark`    | Dark neutral — card backgrounds, form surfaces            |
| `apricot-cream` | Warm amber — priority badges, checkbox accents            |
| `cream`         | Bright yellow-green — miscellaneous accents               |
| `slate-blue`    | Cool blue neutral                                         |
| `yale-blue`     | Vivid blue                                                |
| `baltic-blue`   | Muted cool blue                                           |
| `sky-aqua`      | Cyan-aqua tones                                           |
| `mustard`       | Bold yellow                                               |
| `deep-saffron`  | Orange-amber                                              |

### Button Variants

| `type` prop      | Appearance                    | Used for                         |
| ---------------- | ----------------------------- | -------------------------------- |
| `login`          | Full-width, large, rounded-xl | Home page CTA                    |
| `base` (default) | Rounded pill with border      | General actions                  |
| `small`          | Compact square, rounded-md    | `+` / `−` quantity controls      |
| `none`           | No styling — cursor only      | Icon wrappers (e.g. delete icon) |

---

## 🤝 Contributing

Pull requests are welcome! For major changes please open an issue first.

1. Fork the repo
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m 'Add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

Make sure `npm run lint` passes before submitting.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ and 🍕 by <a href="https://github.com/owaisikhan">Owais Khan</a></p>
