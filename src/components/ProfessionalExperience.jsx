import { useMemo, useState } from 'react';
import { Gsap, GsapPresence } from '../utils/gsapAnimate';
// Note: scroll-triggered entrance animations removed from this section intentionally
import { Plus, Calendar, Building2, Sparkles, ArrowUpRight } from 'lucide-react';

  const experiences = [
    {
    company: 'SanberCode',
    role: 'Quality Assurance Bootcamp',
    period: 'Apr 2026 - May 2026',
    impact:
      'Built foundational Quality Assurance skills through hands-on projects covering manual testing, API testing, test documentation, and test automation with Cypress.',
    stack: [
      'Software Development Life Cycle (SDLC)',
      'Software Testing Life Cycle (STLC)',
      'Manual Testing',
      'Automation Testing',
      'Test Planning',
      'Test Case Design',
      'Bug Reporting',
      'API Testing',
      'Postman',
      'Cypress',
    ],
    description: [
      'Learned Software Development Life Cycle (SDLC), Software Testing Life Cycle (STLC), and core software testing fundamentals.',
      'Created test plans, test cases, bug reports, and testing strategies using industry-standard QA documentation practices.',
      'Performed API testing using Postman to validate endpoints, request flows, and system responses.',
      'Developed automated web and API testing scripts using Cypress as an introduction to test automation.',
      'Completed practical portfolio projects involving manual testing, API validation, Agile testing approaches, and automation testing workflows.',
    ],
  },
  {
    company: 'BEKUP - Baparekraf for Startup',
    role: 'Flutter Developer Cohort',
    period: 'Jul 2025 - Nov 2025',
    impact:
      'Selected participant in BEKUP Create Bootcamp 2025, an intensive national Flutter upskilling program facilitated by Dicoding Indonesia and BEKUP.',
    stack: ['Flutter', 'Dart', 'Firebase', 'State Management', 'Mobile Development', 'GitHub', 'Teamwork'],
    description: [
      'Participated in a 5-month structured learning program focused on Flutter framework, Dart programming, and mobile application development best practices.',
      'Collaborated with peers through team-based projects using GitHub for source code management and project development.',
      'Built practical mobile applications while applying software engineering principles and development workflows.',
      'Strengthened technical expertise in Flutter development alongside professional communication and teamwork skills.',
    ],
  },

  {
    company: 'GDG on Campus Widyatama University',
    role: 'Lead of Event Organizer',
    period: 'Sep 2024 - Jul 2025',
    impact:
      'Led and successfully delivered 12+ technology and professional development events for students and community members.',
    stack: [
      'Leadership',
      'Event Management',
      'Team Coordination',
      'Project Planning',
    ],
    description: [
      'Led the planning and execution of 12+ events including Info Sessions, Soft Skill Workshops, Tech Talks, and StudyJams.',
      'Managed event timelines, scheduling, operational preparation, and event execution from concept to completion.',
      'Delegated responsibilities and guided event staff to ensure activities ran effectively and according to plan.',
      'Managed event resources and collaborated closely with Creative & Media and Public Relations divisions to maximize engagement.',
    ],
  },

  {
    company: 'GDG on Campus Widyatama University',
    role: 'Staff of Public Relations',
    period: 'Sep 2023 - Aug 2024',
    impact:
      'Selected as Best Staff of Public Relations while supporting community growth and external collaboration initiatives.',
    stack: [
      'Communication',
      'Community Management',
      'Partnership Building',
      'Organization',
    ],
    description: [
      'Managed communication channels for a community consisting of more than 300 members.',
      'Prepared and managed emails related to speakers, participants, and certificate distribution processes.',
      'Established relationships and collaborations with external communities, organizations, and partners.',
      'Contributed to community engagement activities and was recognized as Best Staff of Public Relations.',
    ],
  },
];

function getStartYear(period) {
  const match = period.match(/\b20\d{2}\b/);
  return match ? Number(match[0]) : null;
}

const ExperienceItem = ({ experience, isExpanded, onToggle, index }) => {
  const isCurrent = /present/i.test(experience.period);

  return (
    <article className="relative min-w-0">
      <div className="absolute left-[15px] top-0 h-full w-px bg-black/[0.08]" />

      <div className="relative pl-8 min-w-0">
        <span className={`absolute left-[10px] top-8 h-[11px] w-[11px] rounded-full border ${isExpanded ? 'border-lime-500 bg-lime-500' : 'border-black/25 bg-[#FAF9F6]'}`} />

        <button
          onClick={onToggle}
          type="button"
          className="w-full max-w-full rounded-[6px] border border-black/[0.08] bg-white text-left px-5 md:px-7 py-6 md:py-7 hover:border-black/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-black/45 border border-black/[0.1] px-2.5 py-1 rounded-[2px] inline-flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {experience.period}
                </span>
                {isCurrent && (
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] bg-lime-400 text-black px-2.5 py-1 rounded-[2px]">
                    Active Now
                  </span>
                )}
              </div>

              <h3 className="text-[24px] md:text-[30px] lg:text-[34px] font-black uppercase tracking-[-0.02em] leading-[0.95] text-black">
                {experience.role}
              </h3>

              <p className="mt-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-black/45 inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                {experience.company}
              </p>

              <p className="mt-5 text-sm md:text-[15px] font-light leading-relaxed text-black/60 max-w-3xl">
                {experience.impact}
              </p>
            </div>

            <Gsap.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-1 w-10 h-10 shrink-0 rounded-full border flex items-center justify-center ${isExpanded ? 'border-black bg-black text-white' : 'border-black/20 text-black/60'}`}
            >
              <Plus className="w-4.5 h-4.5" strokeWidth={1.8} />
            </Gsap.div>
          </div>
        </button>

        <GsapPresence>
          {isExpanded && (
            <Gsap.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.22, ease: 'easeOut' },
              }}
              className="overflow-hidden"
            >
              <div className="mt-2 ml-0 rounded-[6px] border border-black/[0.08] bg-[#F7F7F3] px-5 md:px-7 py-5 md:py-6">
                <ul className="space-y-3 max-w-3xl">
                  {experience.description.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-black/60 font-light text-sm md:text-[15px] leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-black/[0.08] flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.14em] text-black/68 border border-black/[0.1] bg-white px-2.5 py-1 rounded-[2px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Gsap.div>
          )}
        </GsapPresence>
      </div>
    </article>
  );
};

const ProfessionalExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const statCards = useMemo(() => {
    const roles = experiences.length;
    const activeNow = experiences.filter((item) => /present/i.test(item.period)).length;
    const organizations = new Set(experiences.map((item) => item.company)).size;
    const startYears = experiences.map((item) => getStartYear(item.period)).filter(Boolean);
    const firstYear = startYears.length ? Math.min(...startYears) : new Date().getFullYear();

    return [
      { label: 'Total Roles', value: String(roles).padStart(2, '0') },
      { label: 'Active Now', value: String(activeNow).padStart(2, '0') },
      { label: 'Since', value: String(firstYear) },
      { label: 'Organizations', value: String(organizations).padStart(2, '0') },
    ];
  }, []);

  return (
    <section id="experience-section" className="pt-20 md:pt-24 pb-24 md:pb-32 w-full relative bg-[#FAF9F6] overflow-hidden overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute right-0 top-20 w-[460px] h-[460px] bg-black/[0.025] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-3 mb-14 md:mb-16">
          <span className="w-[6px] h-[6px] rounded-full bg-lime-500 shrink-0" />
          <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-black/32">
            03 - Experience
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-14 items-start min-w-0">
          <aside className="lg:sticky lg:top-24 min-w-0">
            <h2 className="text-[34px] sm:text-[46px] lg:text-[56px] font-black uppercase tracking-[-0.03em] leading-[0.95] text-black">
              Professional
              <br />
              Experience
            </h2>

            <p className="mt-5 text-[14px] md:text-[15px] font-light leading-[1.8] text-black/60 max-w-[320px]">
              Selected roles across Flutter Cohorts, QA Cohorts, and IT Organization. Each step adds stronger delivery habits, leadership, and quality awareness.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2.5">
              {statCards.map((stat) => (
                <div key={stat.label} className="border border-black/[0.09] bg-white rounded-[4px] px-3.5 py-3.5">
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-black/38">{stat.label}</p>
                  <p className="mt-1.5 text-[22px] leading-none font-black tracking-tight text-black">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-black/42">
              <Sparkles className="w-3.5 h-3.5" />
              <p className="font-mono text-[9px] uppercase tracking-[0.16em]">Career timeline - expand each role</p>
            </div>
          </aside>

          <div className="relative space-y-3 min-w-0 overflow-x-clip">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.company + experience.role}
                experience={experience}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() => setExpandedIndex((current) => (current === index ? null : index))}
              />
            ))}

            <div className="pl-9 pt-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/28 inline-flex items-center gap-1.5">
                End of timeline
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
