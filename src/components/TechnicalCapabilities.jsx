import { memo, useRef, useState, useEffect } from 'react';
import { Gsap, useGsapInView } from '../utils/gsapAnimate';
import { Cpu, Network, Eye, MessageSquare, Infinity, MonitorSmartphone } from 'lucide-react';

const CAPABILITIES = [
  {
    title: 'Mobile Development',
    desc: 'Building cross-platform mobile applications using Flutter, Dart, and Firebase.',
    icon: MonitorSmartphone,
  },
  {
    title: 'QA Engineer',
    desc: 'Applying quality assurance principles across the software lifecycle.',
    icon: Cpu,
  },
  {
    title: 'Manual Test',
    desc: 'Designing test scenarios, executing test cases, exploratory testing, and reporting bugs.',
    icon: Eye,
  },
  {
    title: 'Automation Test',
    desc: 'Developing automated test scripts using Selenium, Cypress, and Pytest to improve testing efficiency and reliability.',
    icon: Network,
  },
  {
    title: 'API Testing',
    desc: 'Validating REST APIs through request verification, response assertions, and endpoint testing using Postman.',
    icon: MessageSquare,
  },
  {
    title: 'DevOps (Not Yet)',
    desc: 'Currently preparing to learn CI/CD pipelines, containerization, deployment workflows, and infrastructure practices.',
    icon: Infinity,
  },
];

const TechnicalCapabilities = memo(function TechnicalCapabilities() {
  const gridRef = useRef(null);
  const isInView = useGsapInView(gridRef, { once: true, amount: 0.15 });
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (isInView) {
      let currentIndex = 0;
      // 700ms sequential cascade lighting up the boxes for a smooth reveal
      const interval = setInterval(() => {
        setActiveIndex(currentIndex);
        currentIndex++;

        // Clear when it reaches past the ghost cell
        if (currentIndex > CAPABILITIES.length) {
          setTimeout(() => setActiveIndex(-1), 700);
          clearInterval(interval);
        }
      }, 700);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section id="capabilities-section" className="pt-24 pb-32 w-full relative bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── SECTION HEADER ── */}
        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mb-20 md:mb-24"
        >
          <div className="w-8 h-[2px] bg-black" />
          <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] md:tracking-[0.26em] text-black">
            06. Matrix_Numbers
          </span>
          <div className="w-8 h-[2px] bg-black" />
        </Gsap.div>

        {/* Big Title Area - CENTERED */}
        <div className="mb-20 md:mb-28 flex flex-col items-center text-center max-w-4xl mx-auto">
          <Gsap.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-black"
          >
            Technical <br />
            <span className="text-black/20">Capabilities.</span>
          </Gsap.h2>
        </div>

        {/* ARCHITECTURAL MATRIX GRID - SOLID BLACK BORDERS */}
        <Gsap.div
          ref={gridRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l-2 border-t-2 border-black group/grid bg-[#FAF9F6]"
        >
          {CAPABILITIES.map((cap, i) => {
            const isActive = activeIndex === i;
            const isSelected = selectedIndex === i;
            return (
              <div
                key={i}
                onClick={() =>
                    setSelectedIndex(selectedIndex === i ? -1 : i)
                }                
                className={`group/cell relative border-r-2 border-b-2 border-black p-5 md:p-8 lg:p-10 min-h-[180px] md:min-h-[300px] lg:min-h-[340px] flex flex-col justify-between overflow-hidden cursor-crosshair transition-colors duration-500 hover:bg-[#0A0A0A] ${isActive || isSelected ? '!bg-[#0A0A0A]' : ''}`}
              >
                {/* Number & Icon Row */}
                <div className="flex justify-between items-start relative z-10">
                  <span className={`font-mono text-xs md:text-sm font-bold text-black group-hover/cell:text-lime-400 transition-colors duration-500 tracking-[0.12em] md:tracking-[0.16em] ${isActive || isSelected ? '!text-lime-400' : ''}`}>
                    0{i + 1}
                  </span>
                  <cap.icon className={`w-5 h-5 md:w-8 md:h-8 text-black group-hover/cell:text-lime-400 transition-colors duration-500 ${isActive || isSelected ? '!text-lime-400' : ''}`} strokeWidth={2} />
                </div>

                {/* Center massive number watermark — hidden on mobile */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                  <svg
                    className={`
                  w-[90px]
                  h-[90px]
                  sm:w-[130px]
                  sm:h-[130px]
                  md:w-[220px]
                  md:h-[220px]
                  lg:w-[300px]
                  lg:h-[300px]
                  transition-all
                  duration-500
                  group-hover/cell:scale-105
                  ${isActive || isSelected ? "!scale-105" : ""}
                `}
                    viewBox="0 0 300 300"
                  >
                    <text
                      x="50%"
                      y="58%"
                      textAnchor="middle"
                      fontSize="180"
                      fontWeight="900"
                      fill="transparent"
                      stroke={isActive || isSelected ? "#A3E635" : "#000"}
                      strokeWidth="2"
                      className="transition-all duration-500 group-hover/cell:stroke-lime-400"
                    >
                      {i + 1}
                    </text>
                  </svg>
                </div>
                  {/* Title & Desc Row */}
                  <div className="relative z-10 mt-auto">
                    <h3 className={`text-base md:text-2xl lg:text-3xl font-black uppercase text-black tracking-tight leading-[1.1] mb-1 md:mb-2 group-hover/cell:text-lime-400 transition-colors duration-500 ${isActive || isSelected ? '!text-lime-400' : ''}`}>
                      {cap.title}
                    </h3>

                    {/* Desktop Hover Description */}
                    <div
                      className={`
                      block
                      overflow-hidden
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${
                      isSelected
                      ? "max-h-[220px] opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                      }
                      `}
                      >
                      <p
                        className={`
                        text-[12px] leading-[1.35]
                        md:text-sm
                        border-l-2
                        border-lime-400
                        pl-3
                        md:pl-4
                        text-white/80
                        font-mono
                        leading-5
                        md:leading-7
                        transition-all
                        duration-500
                        ${
                        isSelected
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                        }
                        `}
                        >
                            {cap.desc}
                        </p>
                    </div>
                  </div>
                </div>  
              );
            })}

          {/* Ghost Cell for layout balance on 4-col XL screens */}
          {(() => {
            const isGhostActive = activeIndex === CAPABILITIES.length;
            return (
              <div className={`flex border-r-2 border-b-2 border-black p-5 md:p-8 lg:p-10 min-h-[180px] md:min-h-[300px] lg:min-h-[340px] bg-transparent flex-col justify-center items-center text-center group/ghost hover:bg-[#0A0A0A] transition-colors duration-500 cursor-pointer ${isGhostActive ? '!bg-[#0A0A0A]' : ''}`}>
                <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-black group-hover/ghost:border-lime-400 flex items-center justify-center mb-4 md:mb-6 animate-[spin_10s_linear_infinite] group-hover/ghost:animate-[spin_3s_linear_infinite] transition-all duration-500 ${isGhostActive ? '!border-lime-400 !animate-[spin_3s_linear_infinite]' : ''}`}>
                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-black group-hover/ghost:bg-lime-400 rounded-full transition-colors duration-500 ${isGhostActive ? '!bg-lime-400' : ''}`} />
                </div>
                <span className={`font-mono text-xs tracking-[0.14em] md:tracking-[0.2em] uppercase text-black font-bold group-hover/ghost:text-lime-400 transition-colors duration-500 ${isGhostActive ? '!text-lime-400' : ''}`}>
                  Continuously<br /> Learning & Evolving
                </span>
              </div>
            );
          })()}
        </Gsap.div>

      </div>
    </section>
  );
});

export default TechnicalCapabilities;
