import React from "react";
import { HobbyCard } from "./HobbyCard";

export function HobbiesSection() {
  const hobbies = [
    {
      title: "Custom ROM Development",
      description:
        "I'm passionate about customizing Android with custom ROMs. I enjoy optimizing device performance, extending battery life, and adding features not available in stock firmware. This hobby combines my love for mobile technology with software tinkering.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      tags: ["Android", "Custom ROM", "Root", "XDA"],
    },
    {
      title: "Coding",
      description:
        "I love writing code, whether it's useful applications or experimental projects that might not have practical application. Coding gives me the freedom to experiment, solve problems, and turn ideas into reality - even if sometimes those ideas are just for fun or learning.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      tags: ["JavaScript", "Web Dev", "Experiments", "Projects"],
    },
    {
      title: "Traveling",
      description:
        "I'm passionate about exploring new places, experiencing different cultures, and creating memories around the world. Each journey teaches me something new about myself and the diverse world we live in.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 15a4 4 0 0 1 4-4h14"></path>
          <path d="M17 8l4 4-4 4"></path>
          <path d="M21 12H7"></path>
          <path d="M7 3v18"></path>
        </svg>
      ),
      tags: ["Adventure", "Culture", "Food", "Photography"],
    },
    {
      title: "Gaming",
      description:
        "Video games are my way to unwind and connect with friends. I enjoy both competitive multiplayer games and immersive single-player experiences with rich storytelling and world-building.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          <path d="M8 12h.01"></path>
          <path d="M12 12h.01"></path>
          <path d="M16 12h.01"></path>
        </svg>
      ),
      tags: ["RPG", "Strategy", "Multiplayer", "Esports"],
    },
    {
      title: "Reading",
      description:
        "Books are my gateway to different worlds and perspectives. I enjoy a variety of genres from science fiction and fantasy to non-fiction topics like technology, psychology, and history.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
      tags: ["Fiction", "Science", "History", "Technology"],
    },
    {
      title: "Music",
      description:
        "Music is an essential part of my life. I enjoy discovering new artists and genres, attending live concerts, and creating playlists that match different moods and activities.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      ),
      tags: ["Rock", "Electronic", "Jazz", "Concerts"],
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-[#27262c]">MY HOBBIES</h2>
        <p className="mb-12 text-center text-lg text-[#27262c]/70">
          Passionate interests that keep me inspired and balanced
        </p>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <HobbyCard
              key={index}
              title={hobby.title}
              description={hobby.description}
              icon={hobby.icon}
              tags={hobby.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
