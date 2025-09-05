import Layout from "@/components/Layout";

const StudentLife = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="/lovable-uploads/893bb058-f081-416e-9c12-9b9fdc98b63d.png" alt="Student Life at Springs Secondary School" className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Student Life</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">Building character, fostering friendships, and creating memories that last a lifetime</p>
          </div>
        </div>
      </section>

      {/* Sports Program */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Sports Program</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in developing well-rounded individuals through a comprehensive sports program that promotes physical fitness, teamwork, and healthy competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Sports Philosophy</h3>
              <p className="text-muted-foreground mb-4">
                At Springs Secondary School, we view sports as an integral part of education. Our sports program is designed to:
              </p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Promote physical fitness and healthy lifestyles</li>
                <li>• Develop teamwork and leadership skills</li>
                <li>• Build character and sportsmanship</li>
                <li>• Provide opportunities for competitive excellence</li>
                <li>• Foster school spirit and community pride</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Available Sports</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Team Sports</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Soccer</li>
                    <li>• Netball</li>
                    <li>• Rugby</li>
                    <li>• Basketball</li>
                    <li>• Cricket</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Individual Sports</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Athletics</li>
                    <li>• Swimming</li>
                    <li>• Tennis</li>
                    <li>• Cross Country</li>
                    <li>• Chess</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Sports Affiliations</h3>
            <p className="text-muted-foreground">
              Springs Secondary School is proudly affiliated with the East Rand Schools Sports Association and regularly participates in inter-school competitions, tournaments, and leagues across various sporting disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* Excursions & Events */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Excursions & Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learning extends beyond the classroom through educational excursions and memorable school events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Educational Tours</h3>
              <p className="text-muted-foreground text-sm">Historical sites, museums, and cultural centers that bring learning to life.</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Science Expeditions</h3>
              <p className="text-muted-foreground text-sm">Nature reserves, planetariums, and science centers for hands-on learning.</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Annual Events</h3>
              <p className="text-muted-foreground text-sm">School concerts, sports days, and graduation ceremonies that celebrate achievements.</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Community Service</h3>
              <p className="text-muted-foreground text-sm">Volunteer opportunities that develop social responsibility and leadership.</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Cultural Activities</h3>
              <p className="text-muted-foreground text-sm">Drama productions, music festivals, and art exhibitions showcasing student talents.</p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Special Celebrations</h3>
              <p className="text-muted-foreground text-sm">Heritage Day, Youth Day, and other cultural celebrations that honor diversity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Gallery</h2>
            <p className="text-xl text-muted-foreground">Capturing moments and memories from our vibrant school community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition duration-300">
              <img src="/lovable-uploads/65a0374b-bc21-4d50-8786-aad254f10eac.png" alt="School activities" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">School Events</h3>
                <p className="text-muted-foreground text-sm">Annual celebrations and special occasions</p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition duration-300">
              <img src="/lovable-uploads/d3c4abd3-4f28-4de7-ae07-c1e334ef3c8a.png" alt="Academic activities" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Academic Excellence</h3>
                <p className="text-muted-foreground text-sm">Students engaged in learning activities</p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition duration-300">
              <img src="/lovable-uploads/14539808-fa3c-4c8f-92ea-29d8e39f8798.png" alt="Sports activities" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Sports & Recreation</h3>
                <p className="text-muted-foreground text-sm">Athletic achievements and team spirit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Important Links</h2>
            <p className="text-xl text-muted-foreground">
              Stay connected with the latest news, updates, and important information from our school community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">School Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-4">Monthly updates on school activities, achievements, and important announcements.</p>
              <button className="text-primary font-semibold hover:text-accent transition duration-300">Read Latest Issue →</button>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Principal's Pen</h3>
              <p className="text-muted-foreground text-sm mb-4">Insights and messages from our principal about school vision and current initiatives.</p>
              <button className="text-primary font-semibold hover:text-accent transition duration-300">Read Messages →</button>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Code of Conduct</h3>
              <p className="text-muted-foreground text-sm mb-4">Our school policies, behavioral expectations, and disciplinary guidelines.</p>
              <button className="text-primary font-semibold hover:text-accent transition duration-300">View Document →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentLife;