# ChatVerse AI Frontend

A responsive web interface for chatting with AI characters.

## Features
- Character selection with themes
- Real-time chat interface
- Theme switching
- Responsive design

## Setup
1. Ensure backend is running on `http://localhost:8080`
2. Open `index.html` in a browser or serve via local server

## API Integration
Connects to backend at `http://localhost:8080/api` for:
- `GET /characters` - Load character list
- `POST /chat` - Send messages and receive replies

## Deployment
### GitHub Pages
1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Set source to "Deploy from a branch" and select `main` branch
4. Set folder to `/frontend` (if frontend is in subfolder)
5. Access at `https://yourusername.github.io/repository-name/`

### Vercel
1. Connect GitHub repo to Vercel
2. Set root directory to `frontend`
3. Deploy

**Note**: For full functionality, deploy backend separately and update `API_BASE` in `script.js` to the deployed backend URL.</content>
<parameter name="filePath">c:\Users\hjh\git\chatverse-ai\frontend\README.md
