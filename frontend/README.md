# Hackathon Frontend (React + Vite + Tailwind)

## 🚀 Getting Started

```sh
cd frontend
npm install
npm run dev
```

## 🐳 Docker Build & Run

```sh
docker build -t hackathon-frontend .
docker run -p 80:80 hackathon-frontend
```

## 📁 Folder Structure

- `src/components/` — Reusable UI components
- `src/pages/` — Page components
- `src/routes/` — Routing setup
- `src/services/` — API integrations (ML, Firebase, Supabase, Web3)
- `src/hooks/` — Custom React hooks
- `src/lib/` — Utility functions

## 🔌 Adding/Removing Services
- To remove a service (e.g., Firebase), delete the file in `src/services/` and remove any imports.
- Each service is isolated for easy removal or extension.

## 💡 Hackathon Tips
- Use environment variables for API keys/configs
- Keep components small and focused
- Use Tailwind for rapid styling
- Use Prettier/ESLint for code consistency

## 📝 Notes
- This project is ready for AWS EC2 + Docker deployment
- For production, use `npm run build` and serve with Nginx (see Dockerfile)
