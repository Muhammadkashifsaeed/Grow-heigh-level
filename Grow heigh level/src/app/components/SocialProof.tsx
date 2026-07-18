"use client";

export default function SocialProof() {
  const mainVideo = "https://player.vimeo.com/video/1196511957?h=76a9847fe4";
  const rowVideos = [
    "https://player.vimeo.com/video/1196512072?h=76a9847fe4",
    "https://player.vimeo.com/video/1196851029?h=921150e191",
    "https://player.vimeo.com/video/1196850932?h=6a8d08607b",
  ];
  const leftVideo = "https://player.vimeo.com/video/1196850931?h=262f89dc57";
  const rightTop = "https://player.vimeo.com/video/1196850930?h=49fe3cd5d3";
  const rightBottom = "https://player.vimeo.com/video/1196850929?h=741b64a306";

  // Landscape video — main banner
  function LandscapeVideo({ src, title }: { src: string; title: string }) {
    return (
      <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  // Portrait video — 9:16 ratio
  function PortraitVideo({ src, title }: { src: string; title: string }) {
    return (
      <div className="relative w-full pt-[177.78%] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full bg-black px-5 py-1.5 text-sm font-semibold text-green-400">
            Social Proof
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Hear From Agencies{" "}
          <span className="bg-[linear-gradient(90deg,#22c55e,#3b82f6,#eab308)] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_5s_linear_infinite]">
            We&apos;ve Scaled.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-slate-600">
          Don&apos;t just take our word for it. See how we&apos;ve helped
          agency owners streamline their fulfillment, fix their systems, and
          scale their revenue.
        </p>

        {/* Main Video — Landscape Center */}
        <div className="mx-auto mt-10 max-w-4xl">
          <LandscapeVideo src={mainVideo} title="Main Video" />
        </div>

        {/* 3 Portrait Videos Row */}
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {rowVideos.map((src, i) => (
              <PortraitVideo key={i} src={src} title={`Video ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* Bottom — Left 1 Portrait, Right 1 Portrait */}
        <div className="mx-auto mt-8 max-w-5xl grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* Left — 1 tall portrait */}
          <div className="w-full">
            <PortraitVideo src={leftVideo} title="Left Video" />
          </div>

          {/* Right — 1 portrait */}
          <PortraitVideo src={rightTop} title="Right Top Video" />

        </div>
      </div>
    </section>
  );
}