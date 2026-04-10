# 🍕 React Pizza Co.

A modern, full-featured pizza ordering web application built with React, Redux Toolkit, and Tailwind CSS v4. Browse the menu, add items to your cart, place orders with optional priority delivery, and track your order status — all in a sleek, dark UI inspired by the Cheezious brand identity.

---

## ✨ Features

- **Browse Menu** — Fetches live pizza data from a REST API, displays ingredients, pricing, and availability
- **Add to Cart** — Manage your cart with quantity controls and item removal
- **Place Orders** — Submit orders with name, phone, and delivery address
- **Priority Delivery** — Opt for priority delivery at an additional 20% cost
- **Order Tracking** — View real-time order status, estimated delivery time, and full price breakdown
- **User Session** — Simple name-based login persisted in Redux state
- **Responsive Design** — Works across mobile, tablet, and desktop
- **Error Handling** — Graceful error boundaries on all routes

---

## 🛠️ Tech Stack

| Technology                                     | Purpose                                         |
| ---------------------------------------------- | ----------------------------------------------- |
| [React 18](https://react.dev/)                 | UI library                                      |
| [React Router v7](https://reactrouter.com/)    | Client-side routing, loaders & actions          |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Global state management (cart, user)            |
| [Tailwind CSS v4](https://tailwindcss.com/)    | Utility-first styling with custom design tokens |
| [Vite](https://vitejs.dev/)                    | Build tool and dev server                       |

---

## 📁 Project Structure

```
src/
├── components/          # Shared UI components
│   ├── Button.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Error.jsx
├── features/
│   ├── cart/            # Cart slice, Cart page, CartItem, CartOverview
│   ├── menu/            # Menu page, MenuItem
│   ├── order/           # Order form, OrderOverview
│   └── user/            # User slice, Username display
├── pages/
│   └── Home.jsx         # Landing / login page
├── services/
│   └── apiPizza.js      # API calls (getMenu, getOrder, createOrder)
├── store.js             # Redux store configuration
├── App.jsx              # Root layout with Header + Footer
├── main.jsx             # Router setup and app entry point
└── index.css            # Tailwind v4 @theme with custom palette
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-pizza.git
cd react-pizza

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🎨 Design System

The app uses a custom Tailwind CSS v4 theme defined in `src/index.css` under `@theme`, inspired by the **Cheezious** brand identity — bold, dark, and appetizing.

| Token             | Hex       | Usage                            |
| ----------------- | --------- | -------------------------------- |
| `cheez-red-500`   | `#C8102E` | Buttons, borders, active accents |
| `cheez-black-950` | `#050505` | App background                   |
| `cheez-black-800` | `#111111` | Card surfaces                    |
| `cheez-gold-400`  | `#FFC200` | Prices, totals, highlights       |
| `cheez-cream-100` | `#fdf8ee` | Primary text on dark backgrounds |

---

## 🔗 API

This app connects to the [Jonas Schmedtmann Fast Pizza API](https://react-fast-pizza-api.jonas.io/api):

| Endpoint         | Method | Description           |
| ---------------- | ------ | --------------------- |
| `/api/menu`      | `GET`  | Fetch full pizza menu |
| `/api/order/:id` | `GET`  | Get order by ID       |
| `/api/order`     | `POST` | Create a new order    |

---

## 📸 App Pages

| Route             | Component       | Description                   |
| ----------------- | --------------- | ----------------------------- |
| `/`               | `Home`          | Name entry / login screen     |
| `/menu`           | `Menu`          | Full pizza menu listing       |
| `/cart`           | `Cart`          | Cart review and management    |
| `/order`          | `Order`         | Order placement form          |
| `/order/:orderID` | `OrderOverview` | Order confirmation & tracking |

---

## 📦 State Management

Redux Toolkit manages two slices:

**`userSlice`** — stores the customer's name entered on the home screen.

**`cartSlice`** — stores cart items with `pizzaId`, `name`, `quantity`, `unitPrice`, and `totalPrice`. Supports adding items and will support increment, decrement, and delete.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ and 🍕</p>
