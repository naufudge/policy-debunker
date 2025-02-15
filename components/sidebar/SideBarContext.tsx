/* eslint-disable */

import { createContext, useContext, useState } from "react";

// Create Context
//es
const SidebarContext = createContext({ activeItem: "Home", setActiveItem: (item: string) => {} });

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <SidebarContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom Hook to use SidebarContext
export function useSidebar() {
  return useContext(SidebarContext);
}
