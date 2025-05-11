import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HobbyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags?: string[];
}

export function HobbyCard({ title, description, icon, tags = [] }: HobbyCardProps) {
  return (
    <Card className="overflow-hidden bg-white transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f1eae9] text-[#a15982]">
          {icon}
        </div>
        <CardTitle className="mb-2 text-xl font-bold text-[#27262c]">{title}</CardTitle>
        <CardDescription className="mb-4 text-[#27262c]/70">
          {description}
        </CardDescription>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-[#f1eae9] text-[#a15982] hover:bg-[#a15982] hover:text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
