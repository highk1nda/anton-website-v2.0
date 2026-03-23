export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Critical Ops API Discord Bot",
    description:
      "A lightweight Discord bot integrating with an external API to fetch player stats, estimate cheater probability, generate stat card images, and manage server roles.",
    tech: ["Python", "discord.py", "aiohttp", "Pillow"],
    highlights: [
      "Async API handling with aiohttp",
      "Dynamic image generation (512×512 stat cards)",
      "Role management via button interactions",
      "Uptime & status monitoring system",
      "~8–11% CPU usage under load",
      "~68 MB RAM usage idle and under load",
    ],
    github: "https://github.com/highk1nda/Critical-Ops-API---Discord-Bot",
  },
  {
    id: 2,
    title: "Mythological 2D Fighting Game",
    description:
      "A fully playable 2D fighting game with multiple modes, a custom combat engine, and a boon system built entirely in Python using pygame.",
    tech: ["Python", "pygame", "Collaboration", "Teamwork"],
    highlights: [
      "Custom game loop architecture",
      "Story mode & local multiplayer",
      "Character system with unique stat sets",
      "Active & passive boon ability system",
      "Real-time collision combat",
    ],
    github: "https://github.com/highk1nda/Tournament-of-the-seven-Pygame",
  },
  {
    id: 3,
    title: "Python Library System",
    description:
      "A multi-user library management system for borrowing, returning, and tracking books, written with a clean OOP design.",
    tech: ["Python", "OOP"],
    highlights: [
      "Class-based modular architecture",
      "Per-user state management",
      "Error handling & validation",
      "CRUD-style book operations",
    ],
    github: "https://github.com/highk1nda/Book-library-python",
  },
];