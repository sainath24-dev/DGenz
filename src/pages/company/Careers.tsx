import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, MapPin, Clock, DollarSign, Users, Award, Heart, Briefcase } from 'lucide-react';
import Lightfall from '@/components/ui/Lightfall';
import ContactForm from '@/components/ContactForm';
import careersHero from '@/assets/careers-hero.jpg';

const Careers = () => {
  const benefits = [
    {
      badge: 'Compensation',
      title: 'Competitive Pay & Equity',
      description: 'Top-of-market compensation packages with equity options, performance bonuses, and annual merit increases.',
      proof: 'Comprehensive equity ownership'
    },
    {
      badge: 'Wellness',
      title: 'Full Health & Insurance',
      description: 'Comprehensive health, dental, and vision coverage for you and your dependents with premium wellness stipends.',
      proof: '100% premium coverage'
    },
    {
      badge: 'Flexibility',
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible schedules, home office setup stipends, and an unlimited PTO policy.',
      proof: 'True work-life balance'
    },
    {
      badge: 'Development',
      title: 'Continuous Learning Budget',
      description: 'Dedicated annual stipend for conferences, technical certifications, books, and executive coaching programs.',
      proof: '$3,000 annual education grant'
    },
    {
      badge: 'Hardware',
      title: 'Top-Tier Tech Setup',
      description: 'Latest MacBook Pro or high-spec workstation, 4K monitors, and all software tooling necessary for peak productivity.',
      proof: 'Custom hardware choices'
    },
    {
      badge: 'Community',
      title: 'Global Team Offsites',
      description: 'Annual international company retreats and regional team gatherings to celebrate milestones and build bonds.',
      proof: 'Fully funded team travel'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Full-Stack Engineer',
      department: 'Engineering',
      location: 'Bengaluru / Remote',
      type: 'Full-Time',
      description: 'Architect scalable web applications, real-time analytics dashboards, and campaign automation pipelines.',
      requirements: [
        '5+ years React, TypeScript, and Node.js experience',
        'Expertise with high-throughput distributed database architectures',
        'Experience building enterprise B2B SaaS or MarTech solutions'
      ]
    },
    {
      title: 'Machine Learning & NLP Engineer',
      department: 'Data Science',
      location: 'Bengaluru / Remote',
      type: 'Full-Time',
      description: 'Develop proprietary intent classification models and graph algorithms that identify buying committee surges.',
      requirements: [
        'Strong background in Python, PyTorch/TensorFlow, and predictive modeling',
        'Experience with large-scale graph databases and entity resolution',
        'Demonstrated ability to deploy ML models into production pipelines'
      ]
    },
    {
      title: 'Director of Growth & Performance Media',
      department: 'Paid Acquisition',
      location: 'Bengaluru / Remote',
      type: 'Full-Time',
      description: 'Lead multi-channel performance advertising campaigns across Google, LinkedIn, and programmatic networks for enterprise clients.',
      requirements: [
        '6+ years managing large-scale B2B paid media budgets',
        'Deep expertise in LinkedIn Campaign Manager & Google Ads',
        'Proven track record of delivering measurable ROAS and pipeline'
      ]
    },
    {
      title: 'Senior Outbound Campaign Strategist',
      department: 'Outbound Operations',
      location: 'Bengaluru / Remote',
      type: 'Full-Time',
      description: 'Design and execute multi-touch cold email, LinkedIn, and SDR cadences that generate qualified sales opportunities.',
      requirements: [
        '4+ years executing B2B outbound and SDR programs',
        'Technical mastery of domain warming, deliverability, and CRM routing',
        'Exceptional copywriting skills tailored to C-suite personas'
      ]
    },
    {
      title: 'Enterprise Customer Success Director',
      department: 'Client Strategy',
      location: 'Bengaluru / Remote',
      type: 'Full-Time',
      description: 'Serve as a strategic partner to enterprise marketing leaders, ensuring campaign goals, retention, and ARR expansion.',
      requirements: [
        '5+ years in B2B SaaS or Agency account leadership',
        'Strong analytical fluency in marketing attribution and pipeline metrics',
        'High-trust executive communication and relationship management'
      ]
    },
    {
      title: 'Senior Product Designer (UI/UX)',
      department: 'Product Design',
      location: 'Bengaluru / Remote',
      type: 'Full-Time',
      description: 'Craft intuitive interfaces, data visualization telemetry dashboards, and modern component design systems.',
      requirements: [
        '4+ years designing complex data-heavy enterprise web applications',
        'Mastery of Figma, interactive prototyping, and design tokens',
        'Strong user research mindset and eye for modern aesthetics'
      ]
    }
  ];

  const values = [
    {
      title: 'Intellectual Rigor & High Standards',
      description: 'We believe in precision over guesswork, relying on empirical data and deterministic insights to drive every campaign decision.'
    },
    {
      title: 'Radical Ownership & Speed',
      description: 'We empower every team member to make bold decisions, move quickly, and take full accountability for client outcomes.'
    },
    {
      title: 'Client Value Obsession',
      description: 'Our success is tied strictly to our clients winning. Every strategy and workflow is built to generate measurable revenue.'
    },
    {
      title: 'Collaborative Excellence',
      description: 'We celebrate diverse perspectives, foster continuous mutual learning, and operate as a united global team.'
    }
  ];

  const hiringSteps = [
    { step: '01', title: 'Application Review', desc: 'Our recruiting team reviews your profile and experience within 48 hours.' },
    { step: '02', title: 'Initial Conversation', desc: 'A 30-minute discovery call to discuss your aspirations, experience, and role alignment.' },
    { step: '03', title: 'Practical Deep-Dive', desc: 'A role-specific practical case study or technical challenge reflecting real work.' },
    { step: '04', title: 'Executive Offer', desc: 'Meet leadership team members, receive a transparent offer, and begin onboarding.' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with Lightfall WebGL Simulation */}
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-slate-50 via-slate-100/60 to-white py-20 lg:py-28 overflow-hidden text-slate-900 border-b border-slate-200">
          
          {/* Subtle Geometric Dot Mesh Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

          {/* Dynamic Lightfall WebGL Simulation */}
          <div className="absolute inset-0 pointer-events-auto z-0 opacity-80 overflow-hidden">
            <Lightfall
              colors={['#059669', '#10b981', '#0284c7', '#06b6d4', '#6366f1']}
              speed={0.4}
              streakCount={10}
              streakWidth={1.8}
              streakLength={1.6}
              glow={1.3}
              density={1.1}
              twinkle={0.35}
              zoom={1.0}
              backgroundGlow={0.15}
              opacity={0.85}
              mouseInteraction={true}
              mixBlendMode="normal"
              className="w-full h-full"
            />
          </div>

          {/* Soft Bottom Transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 pointer-events-none z-1" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider shadow-xs">
                  Careers at DGenz Media
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
                  Build the Future of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                    Account-Based Growth
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Join a high-caliber team of engineers, data scientists, and growth strategists transforming how B2B companies acquire their most valuable customers.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a 
                    href="#open-positions"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 hover:scale-102 cursor-pointer"
                  >
                    <span>Explore Open Roles</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>

                  <ContactForm 
                    type="general"
                    trigger={
                      <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-sm sm:text-base transition-all duration-200 shadow-xs cursor-pointer">
                        <span>Contact Talent Team</span>
                      </button>
                    }
                  />
                </div>
                
                {/* Trust Proof Badges */}
                <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Remote-First & Flexible Hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>Top-Tier Compensation & Equity</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (5 cols): Photo Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={careersHero} 
                      alt="DGenz Media collaborative team culture" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Perks & Benefits (Clean White Cards) */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Perks & Benefits
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Why Work at DGenz <span className="text-emerald-700">Media</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We believe exceptional work happens when high-performing individuals are supported with comprehensive benefits and autonomy.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item) => (
                <div 
                  key={item.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-5">
                      {item.badge}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item.proof}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 3: Open Positions (Clean White Cards) */}
        <section id="open-positions" className="py-24 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Current Opportunities
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Open Positions
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Explore our current openings across engineering, growth marketing, data science, and account leadership.
              </p>
            </div>

            {/* Position Cards List */}
            <div className="space-y-6 max-w-5xl mx-auto">
              {openPositions.map((position) => (
                <div 
                  key={position.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold rounded-full">
                        {position.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 mb-4">
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {position.description}
                    </p>

                    {/* Requirements Checklist */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Requirements:</span>
                      {position.requirements.map((req, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-48 flex-shrink-0">
                    <ContactForm 
                      type="general"
                      trigger={
                        <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                          <span>Apply Now</span>
                          <ArrowRight className="w-4 h-4 text-white" />
                        </button>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: Culture & Values (Clean White Cards) */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                How We Operate
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our Core Culture Values
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                These principles define our team ethos and guide how we collaborate every single day.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {values.map((item) => (
                <div 
                  key={item.title}
                  className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 5: Transparent Hiring Process (Clean White Process Cards) */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                Hiring Journey
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                Our Interview & Hiring Process
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A respectful, transparent 4-step process designed to help you showcase your strengths and learn about our team.
              </p>
            </div>

            {/* Hiring Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {hiringSteps.map((item) => (
                <div 
                  key={item.step}
                  className="rounded-3xl bg-white border border-slate-200 p-7 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-black text-base flex items-center justify-center mb-5 border border-emerald-200">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 6: Grand Finale CTA Card (Clean White) */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-slate-900 shadow-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Don't See the Perfect Open Role?
              </h2>
              <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
                We are always seeking exceptional talent in engineering, data intelligence, and growth marketing. Send us your resume.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <ContactForm 
                  type="general"
                  trigger={
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:scale-102 cursor-pointer">
                      <span>Submit General Application</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  }
                />

                <a 
                  href="mailto:careers@dgenzmedia.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer border border-slate-200"
                >
                  <span>Email Recruiting Directly</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;