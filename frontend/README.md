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
- `src/services/` — API integrations (ML, Firebase, Supabase, Web3, Automation)
- `src/hooks/` — Custom React hooks
- `src/lib/` — Utility functions

## 🔌 Adding/Removing Services
- To remove a service (e.g., Firebase, Automation), delete the file in `src/services/` and remove any imports.
- Each service is isolated for easy removal or extension.

### ⚡ Automation Service
- The automation service is in `src/services/automation.js`.
- Configure the backend URL in your `.env` file:
  ```
  VITE_AUTOMATION_API_URL=http://your-automation-backend/api/automation
  ```
- Use the `triggerAutomation` function in your components/pages:
  ```js
  import { triggerAutomation } from '@services/automation';
  const result = await triggerAutomation('sendEmail', { to: 'user@example.com' });
  ```
- To remove, delete `src/services/automation.js` and remove any imports/usages.

## 💡 Hackathon Tips
- Use environment variables for API keys/configs
- Keep components small and focused
- Use Tailwind for rapid styling
- Use Prettier/ESLint for code consistency

## 📝 Notes
- This project is ready for AWS EC2 + Docker deployment
- For production, use `npm run build` and serve with Nginx (see Dockerfile)
