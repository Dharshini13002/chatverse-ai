# ChatVerse AI Backend

Java Spring Boot API for character data and chat replies.

## API Endpoints
- `GET /api/characters`: Returns list of characters.
- `POST /api/chat`: Accepts `{characterId, message}`, returns `{reply}`.

## Run
- Import as Maven project in Eclipse.
- Run `Main.java` (Spring Boot app starts on port 8080).
- Or: `mvn spring-boot:run`

## Files
- `Main.java`: Spring Boot entry point.
- `ChatController.java`: REST endpoints.
- `ChatService.java`: Business logic, loads characters, handles replies.
- `Character.java`: POJO.
- `data/characters.json`: Character data.
- `data/chats.txt`: Chat log.