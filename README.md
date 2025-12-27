# ChatVerse AI

A fun chat app with season-themed AI characters. Frontend in HTML/CSS/JS, backend in Java Spring Boot.

## Project Structure
```
ChatVerse-AI/
├── frontend/          # Web UI
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── assets/icons/
│   └── README.md
├── backend/           # Java API
│   ├── src/main/java/com/chatverse/
│   │   ├── Main.java
│   │   ├── ChatController.java
│   │   ├── ChatService.java
│   │   └── Character.java
│   ├── data/
│   │   ├── characters.json
│   │   └── chats.txt
│   ├── pom.xml
│   └── README.md
├── docs/              # Documentation
└── README.md          # This file
```

## Characters
- **Sakura**: Cherry blossom theme, gentle and poetic.
- **Sparky**: Thunder theme, energetic and witty.
- **Frost**: Winter theme, cool and precise.
- **Sol**: Summer theme, warm and encouraging.
- **Harvest**: Autumn theme, grounded and nostalgic.

## Quick Start
1. **Install JDK 11+ and Maven** (Eclipse Temurin JDK is recommended and compatible).
2. **Backend**: Navigate to `backend` folder, run `mvn spring-boot:run` (starts on http://localhost:8080).
3. **Frontend**: Open `index.html` directly in browser or serve via local server (e.g., `python -m http.server 3000` in frontend folder).
4. Select a character, type messages, and chat — replies come from backend!

## Deployment
### Backend (Java Spring Boot)
Deploy to a cloud platform that supports Java:

**Railway (Free tier available):**
1. Sign up at railway.app
2. Connect GitHub repo
3. Set root directory to `backend`
4. Deploy (Railway detects Maven and runs Spring Boot)
5. Get the deployed URL (e.g., `https://your-app.railway.app`)

**Render (Free tier):**
1. Sign up at render.com
2. Create new Web Service from GitHub repo
3. Set build command: `mvn clean install`
4. Set start command: `java -jar target/chatverse-backend-1.0.0.jar`
5. Deploy

**Heroku:**
1. Install Heroku CLI
2. `heroku create your-app-name`
3. `git push heroku main`
4. Heroku detects Maven and deploys

### Frontend
**GitHub Pages:**
1. Push code to GitHub
2. Go to repo Settings > Pages
3. Source: Deploy from branch, select `main`, folder `/frontend`
4. Access at `https://yourusername.github.io/repo-name/`

**Vercel:**
1. Connect GitHub to Vercel
2. Set root directory to `frontend`
3. Deploy

### Full Online Setup
1. Deploy backend to Railway/Render/Heroku
2. Update `API_BASE` in `frontend/script.js` from `'http://localhost:8080/api'` to your deployed backend URL (e.g., `'https://your-app.railway.app/api'`)
3. Deploy frontend to GitHub Pages or Vercel
4. The app is now live and fully functional!

## Live Demo
Frontend: [Your GitHub Pages/Vercel URL]
Backend: [Your Railway/Render URL]