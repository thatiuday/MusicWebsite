'use client'
import { InfiniteMovingCards } from "./infinite-moving-cards";
const musicSchoolTestimonials = [
  {
    quote: 'The lessons at this school have been phenomenal! My confidence in playing the piano has skyrocketed, and I feel more connected to music than ever before.',
    name: 'Emily Carter',
    title: 'Piano Student',
  },
  {
    quote: 'This school provides an amazing learning environment. The teachers are incredibly supportive, and I’ve made great progress in my vocal skills.',
    name: 'Michael Lee',
    title: 'Vocal Student',
  },
  {
    quote: 'Learning the violin here has been a dream come true! The personalized attention and structured lessons have helped me grow tremendously.',
    name: 'Sophia Martinez',
    title: 'Violin Student',
  },
  {
    quote: 'I always wanted to master the drums, and this school made it possible. The hands-on training and expert guidance have been invaluable!',
    name: 'David Robinson',
    title: 'Drum Student',
  }
];

function MusicSchoolTestimonials() {
  return (
      <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white[0.2] relative flex flex-col items-center justify-center overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony:Voice of Success</h2>
          <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 "> 
              <div className="w-full max-w-6xl">
                  <InfiniteMovingCards
                    items={musicSchoolTestimonials}
                      direction="right"
                       speed="slow"
      />
              </div>
          </div>
    </div>
  )
}
export default MusicSchoolTestimonials