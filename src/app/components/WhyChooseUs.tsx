"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
        title: "Master the Guitar: Strumming Your Way to Excellence",
        description:
            "Unlock the secrets of guitar mastery with our expert-led courses. From basic chords to advanced solos, our personalized instruction caters to all skill levels, ensuring steady progress in your musical journey.",
    },
    {
        title: "The Art of Music Composition & Songwriting",
        description:
            "Explore the fundamentals of melody, harmony, and lyrics as you craft your own musical pieces. Learn from industry professionals and gain insights into structuring songs that captivate and inspire audiences.",
    },
    {
        title: "Music Production: Bringing Your Sound to Life",
        description:
            "Delve into the world of music production, where creativity meets technology. Our hands-on approach to digital audio workstations, mixing, and mastering will elevate your music to professional standards.",
    },
];
   
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}
export default WhyChooseUs
