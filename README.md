# 🤖 PINAAK PrepMaster

**PINAAK PrepMaster** is a sleek and modern web platform built with **Next.js**, designed to help students and professionals practice job interviews with the help of **AI voice agents**. This project integrates tools like **Firebase**, **Google Gemini**, and **Vapi** to offer interactive mock interviews and real-time feedback.

Whether you're brushing up your skills or learning how to integrate AI into your apps, PINAAK PrepMaster offers a fun and practical way to explore these technologies.

---

## ⚙️ Tech Stack

- **Next.js** – Frontend & Backend
- **Firebase** – Authentication & Database
- **Tailwind CSS** – Styling
- **Vapi AI** – Voice Agents
- **shadcn/ui** – Beautiful UI Components
- **Google Gemini** – AI-powered interview questions & feedback
- **Zod** – Schema Validation

---

## 🔋 Features

👉 **User Authentication**  
Sign up and sign in using email/password with Firebase Auth.

👉 **AI Interview Generator**  
Start interviews powered by Vapi’s voice AI and Google Gemini’s intelligent responses.

👉 **Instant Feedback**  
Get real-time, AI-generated feedback and transcripts after each interview.

👉 **Clean UI/UX**  
Modern, accessible interface with responsive design for all devices.

👉 **Dashboard**  
View and manage all your mock interview attempts.

👉 **Fully Responsive**  
Looks great on both desktop and mobile screens.

...and more: reusable components, scalable architecture, and clear code structure.

---

## 🤸 Quick Start

### 🔧 Prerequisites

Ensure you have the following installed:

- Git
- Node.js
- npm

### 📦 Clone the Repository

```bash

git clone https://github.com/shashwatdwi176/PINAAK-PrepMaster.git
cd pinaak-prepmaster

📥 Install Dependencies
bash
Copy
Edit
npm install

🔐 Set Up Environment Variables
Create a .env.local file in the root of the project and add the following:

env
Copy
Edit
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
Replace the placeholders with your actual Firebase, Vapi, and Google Gemini API keys.

🚀 Run the Project Locally
bash
Copy
Edit
npm run dev
Open your browser and go to http://localhost:3000

🧩 Project Structure & Key Files
globals.css – Global styles

lib/utils.ts – Utility functions

app/api/vapi/generate/route.tsx – API route to generate interview questions

lib/actions/general.action.ts – Handles AI feedback prompt

app/(root)/interview/[id]/feedback/page.tsx – Displays feedback and transcripts

public/ – Assets used in the project
