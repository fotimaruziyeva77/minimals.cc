'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const heroSlides = [
  {
    title: 'Welcome back 👋',
    name: 'Jaydon Frankie',
    text:
      "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",
    image: '/assets/cover1.png', // 3D character rasm
  },
]

const appSlides = [
  {
    tag: 'FEATURED APP',
    title: 'The Rise of Remote Work: Benefits, Challenges...',
    desc:
      'The aroma of freshly brewed coffee filled the air, awakening my...',
    image: '/app-bg.jpg',
  },
]

export default function DashboardTopSection() {
  const [index, setIndex] = useState(0)

  const hero = heroSlides[index]
  const app = appSlides[index]

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">

      {/* ================= HERO SLIDER ================= */}
      <div className="relative h-[280px] rounded-2xl overflow-hidden">
  
 
  <div
    className="
      absolute inset-0 
      bg-[url('/assets/background-5.webp')] 
      bg-cover bg-center
    "
  />

  {/* GRADIENT OVERLAY */}
  <div
    className="
      absolute inset-0 
      bg-linear-to-r from-[#0f172a]/60 to-[#020617]/80
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 p-10 flex items-center h-full text-white">
    <div className="max-w-md space-y-2">
      <h2 className="text-2xl font-bold">{hero.title}</h2>

      <h3 className="text-3xl font-bold">{hero.name}</h3>

      <p className="text-sm text-slate-300 leading-relaxed">
        {hero.text}
      </p>

      <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg text-white font-medium">
        Go now
      </button>
    </div>

    {/* GIRL IMAGE */}
    <Image
      src={hero.image}
      alt="girl"
      width={360}
      height={360}
      className="absolute right-8 bottom-0 hidden md:block z-10"
    />
  </div>
</div>
      <div
        className="relative h-[280px] rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${app.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
          <span className="text-emerald-400 text-xs font-semibold">
            {app.tag}
          </span>

          <h3 className="text-lg font-bold leading-snug mt-1">
            {app.title}
          </h3>

          <p className="text-sm text-white/70 mt-1">
            {app.desc}
          </p>

          {/* CONTROLS */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={() =>
                setIndex((prev) =>
                  prev === 0 ? appSlides.length - 1 : prev - 1
                )
              }
              className="p-1.5 bg-white/20 rounded-md hover:bg-white/30"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() =>
                setIndex((prev) =>
                  prev === appSlides.length - 1 ? 0 : prev + 1
                )
              }
              className="p-1.5 bg-white/20 rounded-md hover:bg-white/30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
