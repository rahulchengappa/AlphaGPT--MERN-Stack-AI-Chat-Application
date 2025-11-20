AlphaGPT – MERN Stack AI-Powered Chat Application

AlphaGPT is a MERN stack based AI chatbot application that delivers intelligent conversational capabilities with persistent chat threads, a modern UI, and seamless integration 
with LLM providers via OpenRouter. It allows users to create multiple chat threads, switch between them, delete history, and generate AI responses in real-time—similar to ChatGPT.
Designed with scalability in mind, AlphaGPT demonstrates how to integrate external LLM APIs with a custom backend, store chats in MongoDB, and render clean chat UI components with React.

Tech Stack-

Frontend:
- React (Vite)
- Context API (state management)
- FontAwesome Icons
- Custom CSS UI

Backend:
- Node.js + ExpressJS
- MongoDB Atlas + Mongoose
- dotenv (environment variables)
- nodemon (development auto-reload)

 Database:
- MongoDB Atlas
- Mongoose

AI Integration:
-OpenRouter API
Access to models such as:
-openai/gpt-4o-mini
-deepseek/deepseek-r1
-qwen/qwen-2.5 series
-Google Gemini endpoints (optional)

🚀 Key Features: 

💬 Real-Time AI Chat:
- Send messages and receive AI-generated responses instantly
- Models accessed securely via OpenRouter
- Robust error handling (rate limits, model availability, fallback-ready)

🧵 Multi-Thread Chat System
- Create new chat threads
- Auto-save conversations to MongoDB
- Rename, display, and delete threads
- Switch between conversations instantly
- -Conversations load instantly without re-querying the model.

📜 Persistent Chat History
- Each chat message is stored with:
- Role (user / assistant)
- Content
- Timestamp

🖥️ Clean Chat UI
- Center-aligned message input
- Scrollable message window with smooth auto-scroll
- Fixed layout similar to ChatGPT
- Sidebar for easy navigation
- Profile dropdown (settings / upgrade / logout)

📦 Backend REST API endpoints:
- POST /api/chat → Sends message to model & returns reply
- POST /api/thread → Create new thread
- GET /api/thread → Get all threads
- GET /api/thread/:id → Get chat history for one thread
- DELETE /api/thread/:id → Remove thread
