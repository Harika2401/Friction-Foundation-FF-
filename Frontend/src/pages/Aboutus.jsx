import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/home/Navbar";
import Footer from "../Components/home/Footer";
import Banner from "../Components/home/Banner";

// ✅ Import local images
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";

// ✅ Scroll Animation Hook (Fade + Slide on Scroll)
const useScrollReveal = (options = { threshold: 0.15 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShow(true);
    }, options);

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return [ref, show];
};

const AboutUs = () => {
  const [sec1Ref, sec1Show] = useScrollReveal();
  const [sec2Ref, sec2Show] = useScrollReveal();
  const [sec3Ref, sec3Show] = useScrollReveal();
  const [cardsRef, cardsShow] = useScrollReveal();
  const [miniImagesRef, miniImagesShow] = useScrollReveal();

  return (
    <div className="w-full bg-white">
      <Navbar />

      {/* HEADER SECTION */}
      <header className="relative top-11 w-full overflow-hidden bg-[#fff3e7] px-4 py-16 text-center md:py-24">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(#fb923c 1px, transparent 1px)`,
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-[#022747] md:text-6xl">
            About Friction Foundation
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            Empowering communities through awareness, education, and meaningful
            support initiatives — building a better tomorrow together.
          </p>
        </div>

        {/* Mini Images */}
        <div
          ref={miniImagesRef}
          className={`relative z-10 mx-auto mt-10 flex max-w-6xl flex-wrap items-end justify-center gap-4 transition-all duration-700 ${
            miniImagesShow
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="h-[140px] w-[240px] overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm md:h-[150px] md:w-[280px]">
            <img src={about1} alt="foundation work big" className="h-full w-full object-cover" loading="eager" decoding="async" />
          </div>

          <div className="h-[95px] w-[170px] overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm md:h-[105px] md:w-[190px]">
            <img src={about2} alt="foundation work small" className="h-full w-full object-cover" loading="eager" decoding="async" />
          </div>

          <div className="h-[140px] w-[240px] overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm md:h-[150px] md:w-[280px]">
            <img src={about3} alt="foundation work big 2" className="h-full w-full object-cover" loading="eager" decoding="async" />
          </div>

          <div className="h-[95px] w-[170px] overflow-hidden rounded-2xl border border-orange-200 bg-white shadow-sm md:h-[100px] md:w-[190px]">
            <img src={about4} alt="foundation work small 2" className="h-full w-full object-cover" loading="eager" decoding="async" />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="mx-auto mt-12 mb-12 w-full max-w-7xl px-4 md:mb-20">
        {/* VIDEO SECTION */}
        <section className="mb-16">
          <div className="relative h-[520px] w-full overflow-hidden rounded-3xl border border-orange-200 shadow-xl md:h-[600px]">
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
              <source src="/foundation.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/55"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h2 className="mb-3 text-3xl font-extrabold text-white md:text-5xl">
                Making Change Together
              </h2>
              <p className="max-w-3xl text-sm text-white/90 md:text-lg">
                Supporting lives, inspiring growth, and building stronger
                communities with compassion and action.
              </p>

              <div className="mt-6 rounded-full bg-white/15 px-6 py-2 text-xs font-medium text-white backdrop-blur-md md:text-sm">
                Friction Foundation • Impact • Awareness • Growth
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-[#eff6ff] p-7 shadow-sm">
            <h3 className="mb-2 text-2xl font-bold text-[#022747]">Who We Are</h3>
            <p className="leading-relaxed text-slate-600">
              Friction Foundation is a community-first organization dedicated to
              creating positive social impact. We work with individuals,
              volunteers, and partners to build opportunities, strengthen lives,
              and spread awareness through action.
            </p>
          </div>
        </section>

        {/* SECTION 1 */}
        <section
          ref={sec1Ref}
          className={`mb-20 transition-all duration-700 ${
            sec1Show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-6 text-center text-3xl font-bold text-[#022747] md:text-5xl">
            We make sure your idea & creation delivered properly
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <p className="leading-relaxed text-slate-600">
              We believe meaningful change happens when communities receive
              consistent support, correct guidance, and genuine opportunities.
              Our programs focus on awareness, education, and empowerment to
              help people grow with confidence.
            </p>
            <p className="leading-relaxed text-slate-600">
              With dedication and strong teamwork, we ensure our initiatives
              reach the right people at the right time. We work with a long-term
              vision and create impact that lasts.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section
          ref={sec2Ref}
          className={`mb-24 grid items-center gap-10 md:grid-cols-2 transition-all duration-700 ${
            sec2Show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative w-full">
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
              <img src={about2} alt="Friction Foundation team" className="h-[360px] w-full object-cover md:h-[440px]" loading="eager" decoding="async" />
            </div>

            <div className="absolute -bottom-7 -right-7 w-[200px] overflow-hidden rounded-3xl border-4 border-white shadow-xl md:w-[260px]">
              <img src={about4} alt="team support" className="h-[140px] w-full object-cover md:h-[180px]" loading="eager" decoding="async" />
            </div>

            <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/85 shadow-md">
              <span className="text-xl">▶</span>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-[#022747] md:text-4xl">
              We empower communities
            </h3>

            <p className="mt-4 leading-relaxed text-slate-600">
              Our mission is to empower individuals through awareness,
              education, and support programs. We provide mentorship, training,
              and resources that help people unlock their potential.
            </p>

            <div className="mt-6 rounded-2xl border-l-4 border-[#fb923c] bg-[#fff3e7] p-5">
              <p className="text-sm italic text-slate-700">
                “We believe every person deserves access to guidance,
                opportunities, and a supportive community.”
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section
          ref={sec3Ref}
          className={`mt-16 text-center transition-all duration-700 ${
            sec3Show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-[#022747] md:text-5xl">
            We help communities to grow faster and bigger
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Our initiatives are designed to build confidence, create awareness,
            and support long-term progress.
          </p>
        </section>

        {/* Bottom Cards */}
        <section
          ref={cardsRef}
          className={`mt-12 transition-all duration-700 ${
            cardsShow ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid gap-7 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 text-center shadow-md ring-1 ring-orange-100 hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">👥</div>
              <h3 className="text-lg font-bold text-[#022747]">Professional Team</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                A strong volunteer team working together to deliver meaningful
                outcomes.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md ring-1 ring-blue-100 hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">🎯</div>
              <h3 className="text-lg font-bold text-[#022747]">Target Oriented</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Programs designed with clear goals, measurable progress, and
                strong support.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 text-center shadow-md ring-1 ring-orange-100 hover:shadow-lg transition">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">✅</div>
              <h3 className="text-lg font-bold text-[#022747]">Success Guarantee</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Consistent guidance, training, and mentorship to help
                communities grow.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
