import React from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "../icons";
import { useTheme } from "next-themes";

export function SwitchDarkMode() {
  const { setTheme } = useTheme();
  const handleOnChange = (isSelected: boolean) => {
    if (isSelected) {
      setTheme("dark");
      return;
    }

    setTheme("light");
  };
  return (
    <Switch
      onValueChange={handleOnChange}
      defaultSelected
      size="lg"
      color="success"
      endContent={<SunIcon />}
      startContent={<MoonIcon />}
    />

  );
}
