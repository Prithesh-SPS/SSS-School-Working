import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="/lovable-uploads/893bb058-f081-416e-9c12-9b9fdc98b63d.png" alt="Springs Secondary School" className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Springs Secondary School</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">"Knowledge Spreads Light" - Empowering minds, building futures</p>
            <div className="space-x-4">
              <Link to="/about" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition duration-300 inline-block">Learn More</Link>
              <Link to="/admissions" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition duration-300 inline-block">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Discover Springs Secondary School</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Excellence in education, nurturing young minds for a brighter tomorrow</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Us Preview */}
            <div className="bg-card rounded-lg p-8 hover:shadow-lg transition duration-300 border border-border">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">About Us</h3>
              <p className="text-muted-foreground mb-6">Discover our rich history, mission, and commitment to educational excellence that has shaped generations of learners.</p>
              <Link to="/about" className="text-primary font-semibold hover:text-accent transition duration-300">Learn More →</Link>
            </div>

            {/* Academics Preview */}
            <div className="bg-card rounded-lg p-8 hover:shadow-lg transition duration-300 border border-border">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Academics</h3>
              <p className="text-muted-foreground mb-6">Explore our comprehensive curriculum, advanced programs, and innovative teaching methods designed for student success.</p>
              <Link to="/academics" className="text-primary font-semibold hover:text-accent transition duration-300">Explore Programs →</Link>
            </div>

            {/* Admissions Preview */}
            <div className="bg-card rounded-lg p-8 hover:shadow-lg transition duration-300 border border-border">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Admissions</h3>
              <p className="text-muted-foreground mb-6">Start your journey with us. Learn about our enrollment process, requirements, and how to become part of our community.</p>
              <Link to="/admissions" className="text-primary font-semibold hover:text-accent transition duration-300">Apply Now →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl leading-relaxed">
            To provide quality education that develops the intellectual, physical, social, emotional, and moral aspects of our learners, preparing them to be responsible citizens and lifelong learners in an ever-changing world.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;