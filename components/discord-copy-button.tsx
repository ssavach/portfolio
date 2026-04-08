"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";

const DISCORD_HANDLE = "@ssavach";
const POPOVER_DURATION_MS = 2000;

export function DiscordCopyButton() {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_HANDLE);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpen(true);
      timeoutRef.current = setTimeout(() => setOpen(false), POPOVER_DURATION_MS);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor asChild>
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleClick}
          className="group border-accent/40 hover:border-accent hover:bg-accent/10"
        >
          <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
          Discord
        </Button>
      </PopoverAnchor>
      <PopoverContent
        side="top"
        align="center"
        sideOffset={10}
        className="w-auto border-accent/40 bg-popover/95 px-3 py-1.5 text-sm font-medium text-accent backdrop-blur"
      >
        ¡Copiado!
      </PopoverContent>
    </Popover>
  );
}
