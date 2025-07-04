# Skillmate 🚀

**Skillmate** is a modern, full-stack web application designed to connect users with skill-sharing opportunities. The platform provides personalized dashboards, real-time feedback, and the ability to create and view posts with images and descriptions.
“Made with ❤️ at Skillmate”

## ✨ Features

- 🔐 **Google Authentication** (via NextAuth)
- 🧾 **User Dashboard** with profile details
- 🧠 **Post Uploading**: Add posts with image + description
- 📢 **Feedback System**: Submit user feedback
- 📰 **Feeds View**: See all uploaded posts
- 🛎️ **Notification Bell** (UI-ready)
- 💾 **MongoDB** database integration

---

## 🛠️ Tech Stack

| Technology       | Usage                    |
|------------------|--------------------------|
| Next.js          | Frontend + Backend       |
| Tailwind CSS     | UI Styling               |
| MongoDB          | Database                 |
| NextAuth.js      | Authentication           |
| Formidable       | Image upload handling    |
| Node.js / Express| API (optional backend)   |

---

## 📁 Folder Structure

skillmate-website/
├── pages/
│ ├── index.tsx # Landing page
│ ├── dashboard.tsx # Authenticated user dashboard
│ ├── api/
│ │ ├── posts.js # Handles post upload/view APIs
│ │ └── auth/[...nextauth].js # Auth config
├── components/
│ ├── Sidebar.js
│ ├── UserCard.js
│ └── ProfileProgress.js
├── lib/
│ ├── mongodb.ts # MongoDB connection utility
│ └── user.js (if needed)
├── public/uploads/ # Uploaded images stored here
├── styles/globals.css
├── .env.local # Contains env secrets (not committed)
└── README.md


---

## 🧪 Getting Started (Local Setup)

1. **Clone the repo**

```bash
git clone https:https://github.com/Manishankar2714/skillmate-website.git
cd skillmate-website
npm install

.env.local
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_random_secret
MONGODB_URI=your_mongo_connection_string


Run the development server
npm run dev
