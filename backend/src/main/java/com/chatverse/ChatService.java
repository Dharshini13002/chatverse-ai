package com.chatverse;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

public class ChatService {
    private static final ObjectMapper mapper = new ObjectMapper();
    private static List<Character> characters = new ArrayList<>();
    private static final Map<String, Character> charMap = new HashMap<>();
    private static Path chatsFile = Path.of("backend/data/chats.txt");

    public static void init() {
        try {
            Path p = Path.of("backend/data/characters.json");
            if (!Files.exists(p)) {
                characters = new ArrayList<>();
                return;
            }
            String json = Files.readString(p);
            characters = mapper.readValue(json, new TypeReference<List<Character>>() {});
            for (Character c : characters) {
                charMap.put(c.getId(), c);
            }
        } catch (IOException e) {
            characters = new ArrayList<>();
        }
    }

    public static List<Character> getCharacters() {
        if (characters.isEmpty()) init();
        return characters;
    }

    public static String getCharactersJson() {
        try {
            return mapper.writeValueAsString(getCharacters());
        } catch (Exception e) {
            return "[]";
        }
    }

    public static String handleChat(String characterId, String message) {
        if (message == null) message = "";
        Character c = characterId != null ? charMap.get(characterId) : null;
        String name = c != null ? c.getName() : "AI";
        String personality = c != null ? c.getPersonality() : "";
        String reply = String.format("%s: (%s) I heard \"%s\"", name, personality, message);
        // append to chats file
        try {
            String ts = ZonedDateTime.now().format(DateTimeFormatter.ISO_OFFSET_DATE_TIME);
            String line = String.format("[%s] %s -> %s\n", ts, name, message);
            Files.writeString(chatsFile, line, StandardOpenOption.CREATE, StandardOpenOption.APPEND);
        } catch (Exception ex) {
            // ignore logging errors
        }
        return reply;
    }
}
