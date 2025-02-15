"use client";

import React from "react";
import { Layout } from "antd";
import {
  ChartColumnIncreasing,
  Home,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

const { Content, Sider } = Layout;

interface Props {
  children: React.ReactNode;
}

const SideBarLinsk = [
  { name: "Home", link: "/", icon: <Home /> },
  { name: "Chat", link: "/chat", icon: <MessageSquare /> },
  { name: "Users", link: "/", icon: <Users /> },
  { name: "Analytics", link: "/", icon: <ChartColumnIncreasing /> },
  { name: "Settings", link: "/", icon: <Settings /> },
];

const MainLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const handleSideBarClick = (clickedLink: string, linkName: string) => {
      localStorage.setItem("sidebarCurrent", linkName);
      router.push(clickedLink);
      setTimeout(() => location.reload(), 200)
    //   location.reload()
  };

  return (
    <Layout className="h-screen font-poppins bg-[#27292C] text-white" hasSider>
      <Sider className="bg-transparent pt-16 flex justify-center h-full">
        <div className="h-fit w-[70px] bg-[#4a4a4a] bg-blend-overlay rounded-full grid grid-cols-1 place-items-center gap-4 xl:gap-10">
          {SideBarLinsk.map((link, index) => (
            <div
            onClick={() => handleSideBarClick(link.link, link.name)}
            key={index}
              className={`rounded-full ${
                localStorage.getItem("sidebarCurrent") === link.name ? "bg-[#3E4EA5]" : "bg-[#717171]"
              } w-full aspect-square flex place-items-center justify-center hover:bg-[#ADB7CD] hover:cursor-pointer transition-all duration-200`}
            >
                {link.icon}
              
            </div>
          ))}
        </div>
        {/* User Avatar will be bleow */}
        <div className="place-items-center flex"></div>
      </Sider>
      <Content>{children}</Content>
    </Layout>
  );
};

export default MainLayout;
