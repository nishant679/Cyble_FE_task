# Cyble FE Task

## 📌 Overview

**Product Listing App** is a lightweight, scalable inventory management system built with modern web technologies including React, TypeScript, Zustand, React Query, and shadcn/ui. It allows users to manage a product catalog with real-time filtering, pagination, stock-level classification, and validation logic.

---

## 🔧 Technologies Used

| Stack             | Description                                  |
|------------------|----------------------------------------------|
| **React**         | Frontend UI framework                        |
| **TypeScript**    | Strong typing for predictable code           |
| **React Query**   | API data fetching and caching                |
| **Zustand**       | Global state management                      |
| **React Hook Form** | Lightweight form library with validation  |
| **Zod**           | Schema validation for form data              |
| **shadcn/ui**     | UI components built on Radix and Tailwind    |
| **Tailwind CSS**  | Utility-first CSS framework                  |

---

## ✅ Key Functionalities Implemented
- Product Listing
- Displays a list of products fetched from DummyJSON.
- Supports pagination with dynamic page controls.
- Filters products by search keyword and category.
- Add Product
- Form with validation using Zod (required fields, non-negative numbers, etc.).
- Availability dropdown: “In Stock”, “Low Stock”, “Out of Stock”.
- Conditional logic for availability based on stock count.
- Successfully added product is appended to the local state on the current page.
- Pagination
- Calculates totalPages based on API's total count.
- Uses React Query to refetch data based on page changes.
- Keeps previous data cached for smoother transitions.

## 🧠 Thought Process & Considerations
- Scalability: Hook-based architecture and global stores enable easy scaling of features like filtering, bulk actions, or sorting.
- Performance: React Query caching and keepPreviousData ensure optimized API usage and smoother UX.
- Validation UX: Zod helps enforce strong validation rules while keeping the code declarative and readable.
- Modularity: Clean separation of concerns through features, pages, hooks, and stores.

## Time Taken 
- ~ 2.5 - 3 hrs


## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation
- npm install
- npm run dev

## Limitations
- New Added products remains on each page
- Pagination starts from page 1 on refresh
- Some Linting issues needs to be fixed