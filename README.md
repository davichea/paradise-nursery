# Paradise Nursery — Plant Shopping Cart

A responsive plant shop built with **React, Vite, Redux Toolkit, and React Redux** for the IBM/Coursera *Paradise Nursery* final project.

## Project name and overview

**Paradise Nursery** helps visitors discover indoor plants and manage a shopping cart. The landing page introduces the company and offers a **Get Started** button that opens the product listing.

## Main features

- Landing page with company name, background illustration, introduction, and Get Started button
- About Us page with mission, values, and company details
- Six unique plants divided into three categories: Tropical, Low-Maintenance, and Flowering
- Each product shows a picture, name, description, price, and Add to Cart button
- Add to Cart updates Redux state, displays the total quantity in the header, and disables the button for already-added items
- Shopping cart displays product image, unit price, item total, quantity buttons, Delete button, and calculated total cart value
- Continue Shopping returns to the plant listing; Checkout shows a "Coming Soon!" notification

## Run locally

Requires Node.js 18+ (Node.js 20+ recommended).

```bash
npm install
npm run dev
```

Open the local URL displayed by Vite. To make a production bundle:

```bash
npm run build
npm run preview
```

## Code files for the Coursera submission

| Task | File | Description |
|---|---|---|
| 1 | `README.md` | Project name and overview |
| 2 | `src/AboutUs.jsx` | Company information |
| 3 | `src/App.css` | Landing-page background and styling |
| 4 | `src/App.jsx` | Landing page, Get Started, navigation |
| 5 | `src/CartSlice.jsx` | `addItem`, `removeItem`, `updateQuantity` reducers |
| 6 | `src/ProductList.jsx` | Product categories, product cards, Add to Cart |
| 7 | `src/CartItem.jsx` | Cart contents, totals, quantity controls, Delete, Checkout |

## Publish code to GitHub

Upload this project's contents (including `src/`) into a **public** GitHub repository. Copy the direct public file URLs for your assignment. Run the application and check its behaviors before submitting.

## Notes

- Checkout is intentionally a demo action ("Coming Soon!"). No checkout backend or payment processing is provided.
- The six plant illustrations and landing background are included locally, so no external image API is required.
- This repository is a project implementation, not proof of deployment or grading results.
