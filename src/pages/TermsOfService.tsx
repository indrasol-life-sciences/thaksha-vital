import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-section">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using the Thaksha Learning Management System ("LMS"), you accept and 
                  agree to be bound by the terms and provision of this agreement. If you do not agree to 
                  abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Use License</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Permission is granted to temporarily access the materials on Thaksha LMS for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                  of title, and under this license you may not:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose or for any public display</li>
                  <li>• Attempt to reverse engineer any software contained on the platform</li>
                  <li>• Remove any copyright or other proprietary notations from the materials</li>
                  <li>• Share your account credentials with unauthorized users</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Account Creation</h4>
                  <p className="text-muted-foreground">
                    You must provide accurate and complete information when creating an account. You are 
                    responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Account Responsibilities</h4>
                  <p className="text-muted-foreground">
                    You are responsible for all activities that occur under your account. You must notify 
                    us immediately of any unauthorized use of your account or any other breach of security.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Acceptable Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">You agree not to use the LMS to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Infringe upon intellectual property rights</li>
                  <li>• Transmit malicious code or engage in hacking activities</li>
                  <li>• Harass, abuse, or harm other users</li>
                  <li>• Distribute spam or unauthorized marketing materials</li>
                  <li>• Interfere with the platform's operation or security</li>
                  <li>• Access content or areas you are not authorized to access</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All content on the Thaksha LMS, including but not limited to text, graphics, logos, 
                  videos, audio, software, and course materials, is the property of Indrasol Life Sciences 
                  or its content suppliers and is protected by copyright, trademark, and other intellectual 
                  property laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Access and Completion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Access Period</h4>
                  <p className="text-muted-foreground">
                    Course access is typically provided for a specified period as determined by your 
                    organization or course enrollment terms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Certification</h4>
                  <p className="text-muted-foreground">
                    Completion certificates are awarded based on successful completion of course requirements. 
                    Certificates may have validity periods as required by industry regulations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The materials on Thaksha LMS are provided on an 'as is' basis. Indrasol Life Sciences 
                  makes no warranties, expressed or implied, and hereby disclaim and negate all other 
                  warranties including without limitation, implied warranties or conditions of merchantability, 
                  fitness for a particular purpose, or non-infringement of intellectual property or other 
                  violation of rights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In no event shall Indrasol Life Sciences or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to business 
                  interruption) arising out of the use or inability to use the materials on Thaksha LMS, 
                  even if authorized representative has been notified orally or in writing of the possibility 
                  of such damage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account and access to the LMS immediately, without prior 
                  notice or liability, for any reason whatsoever, including without limitation if you breach 
                  the Terms of Service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 space-y-1">
                  <p className="font-medium">Email: legal@vital.com</p>
                  <p className="font-medium">Phone: +91 9966636305</p>
                  <p className="font-medium">Address: Indrasol Life Sciences</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}