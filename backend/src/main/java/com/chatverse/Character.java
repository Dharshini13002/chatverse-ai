package com.chatverse;

public class Character {
    private String id;
    private String name;
    private String theme;
    private String icon;
    private String personality;

    public Character(String id, String name, String theme, String icon, String personality) {
        this.id = id;
        this.name = name;
        this.theme = theme;
        this.icon = icon;
        this.personality = personality;
    }

    public String getId() { return id; }
    public String getName() { return name; }
    public String getTheme() { return theme; }
    public String getIcon() { return icon; }
    public String getPersonality() { return personality; }
}
