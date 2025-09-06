import Layout from "@/components/Layout";

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="/lovable-uploads/65a0374b-bc21-4d50-8786-aad254f10eac.png" alt="About Springs Secondary School" className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Welcome to Springs Secondary School</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Springs Secondary School, where education meets excellence and dreams take flight. 
              For over two decades, we have been a beacon of learning in the Springs community, dedicated to 
              nurturing young minds and preparing them for the challenges of tomorrow. Our commitment to 
              academic excellence, character development, and holistic education has made us a trusted 
              institution where students thrive and achieve their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-3xl font-bold text-primary mb-6">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading educational institution that empowers learners to become confident, 
                creative, and responsible global citizens who contribute positively to society.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality education that develops the intellectual, physical, social, emotional, 
                and moral aspects of our learners, preparing them to be responsible citizens and lifelong 
                learners in an ever-changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & History */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">Our Growth & History</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              Springs Secondary School was established in 2000 with a vision to provide quality education 
              to the youth of Springs and surrounding areas. What began as a small institution with just 
              50 students has grown into a thriving educational community serving over 800 learners from 
              Grade 8 to Grade 12.
            </p>
            <p className="mb-6">
              Our journey has been marked by continuous growth, innovation, and a steadfast commitment to 
              educational excellence. Over the years, we have expanded our facilities, enhanced our curriculum, 
              and attracted dedicated educators who share our passion for teaching and learning.
            </p>
            <p>
              Today, Springs Secondary School stands as a testament to what can be achieved when a community 
              comes together with a shared vision of educational excellence. We are proud of our achievements 
              and remain committed to providing our learners with the best possible education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Culture & Values */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Culture & Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Respect</h3>
              <p className="text-sm opacity-90">We value and honor each individual's dignity and worth.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-sm opacity-90">We act with honesty, transparency, and moral courage.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-sm opacity-90">We strive for the highest standards in all we do.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-sm opacity-90">We foster a sense of belonging and shared responsibility.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;