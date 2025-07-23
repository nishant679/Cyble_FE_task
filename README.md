# Cyble Inventory App

**Cyble Inventory App** is a lightweight, scalable inventory management system built with modern web technologies including React, TypeScript, Zustand, React Query, and shadcn/ui. It allows users to manage a product catalog with real-time filtering, pagination, stock-level classification, and validation logic.

---

## 📌 Overview

This application provides a user-friendly interface for managing product data, including features such as:

- Product listing with client-side filtering
- Pagination with dynamic API integration
- Form-driven product creation with validation rules
- Stock availability management based on quantity
- State synchronization using Zustand and React Query

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

## 📁 Project Structure

src/
├── components/ # Shared UI elements
├── features/
│ └── products/ # Product-specific logic and views
├── store/ # Zustand state stores
├── types/ # TypeScript interfaces and types
├── pages/ # Route-level components
└── App.tsx / main.tsx # Entry point and routing

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/cyble-inventory-app.git
cd cyble-inventory-app

# Install dependencies
npm install

# Start development server
npm run dev
