# 📊 Trading Portfolio Dashboard

A **full-stack portfolio management dashboard** built with **Next.js (TypeScript, Redux Thunk, TailwindCSS)** on the frontend and **Node.js (Express, MVC architecture)** on the backend.

The dashboard fetches **live stock data (CMP, P/E, Earnings)** from Yahoo Finance / Google Finance APIs and calculates key portfolio insights such as **Investment, Present Value, Gain/Loss, and Sector-wise grouping** — just like a professional brokerage platform.

---

## ✨ Why This Project Will Impress Recruiters

- 🚀 **Full-Stack Solution** – Designed with **Next.js (App Router)** and **Node.js MVC** for clear separation of concerns.
- 📡 **Real-Time Finance Data** – Uses external financial APIs (Yahoo Finance) and auto-refreshes prices every few seconds.
- 🗂 **Redux Thunk** – Asynchronous state management with proper API handling and error recovery.
- 🎨 **Modern UI/UX** – TailwindCSS + React Table for sleek, responsive, and professional-looking dashboards.
- 🏦 **Domain Relevance** – Solves a real-world problem investors care about (tracking portfolio performance).
- 📈 **Scalable Architecture** – Backend with MVC pattern, caching, and API proxy for production readiness.
- 🔐 **Security-Aware** – API keys are never exposed in frontend, handled safely via backend services.

A recruiter will see that you can:  
✅ Integrate APIs,  
✅ Handle async state with Redux,  
✅ Architect clean full-stack apps,  
✅ Present data in a polished, professional UI.

---

## 🎯 Features

- 📌 Display portfolio in a **tabular format** (stock name, price, quantity, P/E ratio, earnings, gain/loss).
- ⏱ **Auto-refresh** for live CMP updates.
- 📊 **Sector grouping** (Financials, Technology, etc.) with sector-level summaries.
- 🔴🟢 **Visual gain/loss indicators** (green for profits, red for losses).
- 📉 Calculations:
  - Investment = Purchase Price × Quantity
  - Present Value = CMP × Quantity
  - Gain/Loss = Present Value – Investment
  - Portfolio % = Stock weight in portfolio

---

## 🏗 Tech Stack

**Frontend**

- ⚛️ Next.js 13 (App Router) + TypeScript
- 🎨 Tailwind CSS
- 📦 Redux Toolkit + Thunk (state management)
- 📊 react-table (data grid), recharts (optional charts)

**Backend**

- 🟩 Node.js + Express (MVC architecture)
- 📡 Yahoo Finance API (via `yahoo-finance2` npm package)
- 🔒 CORS / API proxy setup
- ⚙️ TypeScript for type safety

---

## ⚙️ Installation Guide

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/trading-portfolio.git
cd trading-portfolio
```

2️⃣ Backend Setup
cd backend
npm install
npm run dev # Runs backend on http://localhost:5000

Express server with /api/portfolio route.

Handles fetching stock data (CMP, P/E, Earnings) from Yahoo Finance API.

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev # Runs frontend on http://localhost:3000

Next.js frontend consumes backend APIs.

Uses Redux Thunk to fetch and store portfolio data.

4️⃣ Proxy API (Optional - Dev Only)

In next.config.js, requests to /api are proxied to backend:

async rewrites() {
return [
{ source: "/api/:path*", destination: "http://localhost:5000/api/:path*" },
];
}

Now you can call axios.post("/api/portfolio", {...}) without worrying about CORS.
