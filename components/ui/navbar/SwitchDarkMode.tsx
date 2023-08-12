import React, { useEffect, useState } from "react";

import { SunIcon, MoonIcon } from "../icons";
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";

export function SwitchDarkMode() {
  const { setTheme, theme } = useTheme();
  const [IconTheme, setIconTheme] = useState("dark");

  useEffect(() => {
    setIconTheme(theme!);
  }, [theme]);

  const handleOnChange = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly aria-label="Like" onClick={handleOnChange}>
        {IconTheme == "dark" ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6 text-gray-700" />
        )}
      </Button>
    </div>
  );
}
