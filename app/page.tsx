"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TopNavbar from "@/component/navbar";
import Navbar from "@/component/website/navbar";
import NavContent from "@/component/website/NavContent";
import AboutSection from "@/component/aboutus";
import ServicesSection from "@/component/website/services";
import FeaturesSection from "@/component/website/modern_business";
// import BlogPosts, { BlogPost, SidebarPost } from "@/component/website/blog";
import Footer from "@/component/footer/footer";
import { useAuth } from "./context/AuthContext";
// export const sampleMainPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor sit amet consectetur adipiscing elit mauris",
//     excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     category: "TECHNOLOGY",
//     featured: true,
//     image: "/fence.jpeg",
//     author: {
//       name: "Marcus Johnson",
//       role: "UI/UX lead",
//       avatar: "https://i.pravatar.cc/150?img=12"
//     },
//     date: "Dec 18, 2024"
//   },
//   {
//     id: 2,
//     title: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse",
//     excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
//     category: "INNOVATION",
//     featured: true,
//     image: "/fence2.jpeg",
//     author: {
//       name: "Emma Rodriguez",
//       role: "Tech lead",
//       avatar: "https://i.pravatar.cc/150?img=5"
//     },
//     date: "Dec 18, 2024"
//   }
// ];

// export const sampleSidebarPosts: SidebarPost[] = [
//   {
//     id: 3,
//     title: "Excepteur sint occaecat cupidatat non proident sunt",
//     category: "BUSINESS",
//     image: "/fence3.jpeg",
//     author: "Jessica Nim",
//     date: "Dec 15, 2024"
//   },
//   {
//     id: 4,
//     title: "Voluptate velit esse cillum dolore eu fugiat nulla",
//     category: "MARKETING",
//     image: "/fence4.jpeg",
//     author: "David Park",
//     date: "Dec 15, 2024"
//   }
// ];
export default function HomeHero() {
  
  return (
    <div>
      <Navbar />
      <AboutSection
        imageSrc="/fence3.jpeg"
        badges={[
          { value: 345, label: 'PROJECTS', position: 'top-right', bgColor: 'bg-orange-500', textColor: 'text-white' },
          { value: 2, label: 'YEARS OF EXPERIENCE', position: 'bottom-left' },
        ]}
        heading="Driving Growth in the Metal Manufacturing Sector"
        subHeading="ABOUT"
        description="Raddha Company is a manufacturing firm specializing in the production of metal construction materials. The company focuses on delivering high-quality products used in infrastructure, construction, and industrial applications."
        features={[
          { icon: '🚀', title: 'Manufacturing of Nail', desc: 'Aenean vulputate eleifend tellus.' },
          { icon: '🌐', title: 'Suspendisse Pulvinar', desc: 'Maecenas tempus, tellus eget condimentum rhoncus.' },
        ]}
        checklist={['Phasellus viverra nulla ut metus varius', 'Etiam ultricies nisi vel augue']}
        // buttonText="LEARN MORE"
      />
      <ServicesSection />
      <FeaturesSection />
      {/* <BlogPosts mainPosts={sampleMainPosts} sidebarPosts={sampleSidebarPosts} /> */}
      <Footer/>
    </div>
  );
}
