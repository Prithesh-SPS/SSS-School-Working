import Layout from "@/components/Layout";

const Academics = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="/lovable-uploads/d3c4abd3-4f28-4de7-ae07-c1e334ef3c8a.png" alt="Academics at Springs Secondary School" className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Academics</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">Excellence in education through innovative curriculum and dedicated teaching</p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Curriculum</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive curriculum designed to prepare students for success in higher education and life beyond school.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Subjects */}
            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">English Home Language</h3>
              <p className="text-muted-foreground mb-4">
                Developing strong communication skills through literature, creative writing, and critical analysis.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Literature studies</li>
                <li>• Creative writing workshops</li>
                <li>• Public speaking and debate</li>
                <li>• Critical thinking skills</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">Mathematics</h3>
              <p className="text-muted-foreground mb-4">
                Building mathematical literacy and problem-solving skills essential for modern life.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Algebra and geometry</li>
                <li>• Statistics and probability</li>
                <li>• Mathematical modeling</li>
                <li>• Technology integration</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">Natural Sciences</h3>
              <p className="text-muted-foreground mb-4">
                Exploring the natural world through Physics, Chemistry, and Biology.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Laboratory investigations</li>
                <li>• Scientific method</li>
                <li>• Environmental studies</li>
                <li>• Technology applications</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">History</h3>
              <p className="text-muted-foreground mb-4">
                Understanding the past to shape a better future through critical historical analysis.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• South African history</li>
                <li>• World history perspectives</li>
                <li>• Primary source analysis</li>
                <li>• Heritage studies</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">Geography</h3>
              <p className="text-muted-foreground mb-4">
                Exploring the relationship between people and their environment.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Physical geography</li>
                <li>• Human settlements</li>
                <li>• Climate and weather</li>
                <li>• GIS technology</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">Business Studies</h3>
              <p className="text-muted-foreground mb-4">
                Preparing students for the world of business and entrepreneurship.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Business principles</li>
                <li>• Financial literacy</li>
                <li>• Marketing concepts</li>
                <li>• Entrepreneurship skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IEB Adult Education */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">IEB Adult Education & Training</h2>
            <p className="text-xl text-muted-foreground">
              Providing opportunities for adult learners to complete their secondary education.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Program Features</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Flexible Learning</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Evening and weekend classes</li>
                  <li>• Part-time study options</li>
                  <li>• Individualized support</li>
                  <li>• Work-friendly schedules</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">IEB Certification</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Nationally recognized qualification</li>
                  <li>• Quality assured assessment</li>
                  <li>• University entrance eligibility</li>
                  <li>• Career advancement opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessments & Homework */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Assessment & Learning Support</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Assessment Methods</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Continuous Assessment</h4>
                  <p className="text-muted-foreground">Regular evaluation through class activities, assignments, and projects to monitor progress.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Project-Based Learning</h4>
                  <p className="text-muted-foreground">Hands-on projects that develop critical thinking and real-world application skills.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Formal Examinations</h4>
                  <p className="text-muted-foreground">Structured assessments that prepare students for final examinations and beyond.</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Homework Policy</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Daily Assignments</h4>
                  <p className="text-muted-foreground">Structured homework designed to reinforce classroom learning and develop study habits.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Research Projects</h4>
                  <p className="text-muted-foreground">Independent research tasks that encourage deeper exploration of subjects.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Study Support</h4>
                  <p className="text-muted-foreground">After-school support sessions and peer tutoring programs for additional help.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;