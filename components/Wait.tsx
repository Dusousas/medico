"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Wait() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out",
    }).from(
      textRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.3"
    );

    gsap.to(barRef.current, {
      width: "80%",
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    if (titleRef.current) {
      gsap.set(titleRef.current, { backgroundPosition: "-120% center" });

      gsap.to(titleRef.current, {
        backgroundPosition: "220% center",
        duration: 2.5,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 2,
      });
    }
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070A0D] text-white">

        {/* FUNDO ANIMADO */}
        <div className="absolute inset-0">

          <div className="aurora-sweep absolute inset-0 opacity-[0.22]" />

          <div className="blob blob-blue absolute -top-20 -left-20" />
          <div className="blob blob-green absolute top-1/2 -right-32 -translate-y-1/2" />
          <div className="blob blob-warm absolute -bottom-32 left-1/3" />

          <div className="noise absolute inset-0 opacity-[0.08]" />

        </div>

        <div className="maxW relative z-10 text-center">

          {/* LOGO */}
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="logo"
              className="w-24 object-contain"
            />
          </div>

          {/* TITULO */}
          <h1
            ref={titleRef}
            className="
            text-3xl md:text-5xl font-bold
            bg-gradient-to-r from-[#25B6FF] via-white to-[#FFB800]
            bg-[length:220%_100%]
            bg-clip-text text-transparent
            "
          >
            Site em construção
          </h1>

          {/* TEXTO */}
          <p
            ref={textRef}
            className="mt-4 text-white/70 max-w-xl mx-auto"
          >
            Estamos preparando uma nova experiência para você.
            Em breve nosso site estará disponível com todas as informações
            da clínica e nossos especialistas.
          </p>

          {/* PROGRESSO */}
          <div className="mt-10 max-w-md mx-auto">

            <div className="h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">

              <div
                ref={barRef}
                className="h-full bg-gradient-to-r from-[#25B6FF] via-[#46E6B0] to-[#FFB800]"
                style={{ width: "20%" }}
              />

            </div>

            <p className="text-xs text-white/50 mt-3">
              Atualizando o site...
            </p>

          </div>

        </div>
      </section>
    </>
  );
}