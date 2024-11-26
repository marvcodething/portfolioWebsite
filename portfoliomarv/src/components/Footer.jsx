import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-800 py-7 px-8 font-sans tracking-wide">
      <div class="flex max-lg:flex-col items-center justify-between gap-6">


        <p class='text-base text-gray-300  max-lg:order-1'>©Marvin Romero</p>
        <ul class="flex gap-x-6 gap-y-2 flex-wrap">
          <li><a href="https://drive.google.com/file/d/1WlxcEdR4WwU8FxC2C5UHE03sZEYBW1MF/view?usp=sharing" class="text-stone-300 hover:text-white text-base hover:scale-125">Resume/CV</a></li>
          <li><a href="mailto:marv.a.romero05@gmail.com" class="text-stone-300 hover:text-white text-base hover:scale-125">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer