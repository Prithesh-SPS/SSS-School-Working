import Layout from "@/components/Layout";

const Admissions = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary/80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="/lovable-uploads/14539808-fa3c-4c8f-92ea-29d8e39f8798.png" alt="Admissions at Springs Secondary School" className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Admissions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">Join our community of learners and begin your journey to excellence</p>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Enrollment Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We welcome new students and make the enrollment process as smooth as possible for families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">New Students</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Application Form</h4>
                    <p className="text-muted-foreground text-sm">Complete and submit the application form with required documents.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">School Interview</h4>
                    <p className="text-muted-foreground text-sm">Meet with our admissions team to discuss your child's needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Placement Assessment</h4>
                    <p className="text-muted-foreground text-sm">Academic assessment to ensure appropriate grade placement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Enrollment Confirmation</h4>
                    <p className="text-muted-foreground text-sm">Receive admission decision and complete enrollment process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Required Documents</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-foreground">Birth certificate (certified copy)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-foreground">Previous school reports (2 years)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-foreground">Transfer letter from previous school</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-foreground">Immunization certificate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-foreground">Parent/Guardian ID copies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-foreground">Proof of residence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-foreground">Recent passport-size photographs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Fees */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">School Fees & Payment</h2>
            <p className="text-xl text-muted-foreground">
              Affordable quality education with flexible payment options.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Fee Structure</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-foreground">Annual School Fees</span>
                    <span className="font-semibold text-primary">R 15,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-foreground">Registration Fee</span>
                    <span className="font-semibold text-primary">R 500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-foreground">Stationery Pack</span>
                    <span className="font-semibold text-primary">R 800</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-foreground">Building Fund</span>
                    <span className="font-semibold text-primary">R 1,200</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Payment Options</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Annual payment (5% discount)</li>
                  <li>• Quarterly payments</li>
                  <li>• Monthly installments</li>
                  <li>• Online payment portal</li>
                  <li>• EFT/Bank transfer</li>
                  <li>• Cash payments (office only)</li>
                </ul>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Banking Details</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Bank: Standard Bank</p>
                    <p>Account: Springs Secondary School</p>
                    <p>Account Number: 123456789</p>
                    <p>Branch Code: 051001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uniform Requirements */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Uniform Requirements</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Summer Uniform</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• White short-sleeve shirt</p>
                <p>• Navy blue shorts/skirt</p>
                <p>• Navy blue school tie</p>
                <p>• Black school shoes</p>
                <p>• White ankle socks</p>
                <p>• School blazer (optional)</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Winter Uniform</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• White long-sleeve shirt</p>
                <p>• Navy blue long pants/skirt</p>
                <p>• Navy blue school tie</p>
                <p>• Black school shoes</p>
                <p>• Navy blue school jersey</p>
                <p>• School blazer (compulsory)</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">Sports Uniform</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• School sports shirt</p>
                <p>• Navy blue sports shorts</p>
                <p>• White sports socks</p>
                <p>• Sports shoes (white)</p>
                <p>• Navy blue tracksuit</p>
                <p>• School sports cap</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Grooming Standards</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">General Guidelines</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Neat and well-groomed appearance</li>
                  <li>• Hair should be neat and tidy</li>
                  <li>• Natural hair colors only</li>
                  <li>• Minimal, appropriate makeup</li>
                  <li>• School-approved jewelry only</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Not Permitted</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Extreme hairstyles or colors</li>
                  <li>• Excessive jewelry or piercings</li>
                  <li>• Visible tattoos</li>
                  <li>• Non-school branded items</li>
                  <li>• Inappropriate footwear</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admissions;