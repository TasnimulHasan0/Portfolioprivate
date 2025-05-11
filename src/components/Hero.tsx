import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f1eae9] to-white pt-24">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="max-w-xl">
            <h1 className="mb-6 text-4xl font-bold text-[#27262c] md:text-5xl lg:text-6xl">
              Tasnimul Hasan
            </h1>
            <p className="mb-8 text-lg text-[#27262c]/70">
              I'm a 16-year-old high school student with a passion for customizing Android. I enjoy flashing custom ROMs, tweaking settings, and writing code—whether it's practical or just for fun. My goal is to keep learning and experimenting with new ways to enhance my devices and dive deeper into tech.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/TasnimulHasan0" target="_blank" rel="noopener noreferrer">
<Button
  className="border-2 border-[#a15982] bg-[#a15982] text-white hover:bg-[#a15982]/90"
  size="lg"
>
  View Work
</Button>
</a>
              <Button
  className="border-2 border-[#27262c] bg-transparent text-[#27262c] hover:bg-[#27262c] hover:text-white"
  size="lg"
  onClick={() => document.getElementById("social-links")?.scrollIntoView({ behavior: "smooth" })}
>
  Contact Me
</Button>
            </div>
          </div>

          <div className="relative h-80 w-80">
            <div
              className="absolute inset-0 rounded-full animate-float"
              style={{
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
              }}
            >
              <Avatar className="h-full w-full">
                <AvatarImage src="/images/profile.jpg" alt="Tasnimul Hasan" className="object-cover" />
                <AvatarFallback className="bg-[#f1eae9] text-4xl font-bold text-[#a15982]">
                  TH
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
