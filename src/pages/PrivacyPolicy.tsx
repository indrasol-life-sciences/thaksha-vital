import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 sm:py-section">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Personal Information</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our LMS platform, contact us, or participate in surveys. This may include your name, 
                    email address, job title, company information, and learning preferences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Usage Information</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    We automatically collect information about your use of our platform, including course 
                    progress, learning activities, time spent on modules, quiz results, and interaction 
                    with course materials.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Technical Information</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    We collect device information, IP addresses, browser type, operating system, and 
                    other technical data to ensure platform functionality and security.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• Provide and maintain our LMS platform services</li>
                  <li>• Track learning progress and generate completion certificates</li>
                  <li>• Personalize your learning experience and recommend relevant content</li>
                  <li>• Communicate with you about your account, courses, and platform updates</li>
                  <li>• Analyze platform usage to improve our services and develop new features</li>
                  <li>• Ensure platform security and prevent fraudulent activities</li>
                  <li>• Comply with legal obligations and industry regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-muted-foreground text-sm sm:text-base">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• With your employer or organization for training compliance and reporting</li>
                  <li>• With service providers who assist us in operating our platform</li>
                  <li>• When required by law or to protect our rights and safety</li>
                  <li>• In connection with a business transfer or acquisition</li>
                  <li>• With your explicit consent for specific purposes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  This includes encryption, secure servers, regular security assessments, and staff training 
                  on data protection practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-muted-foreground text-sm sm:text-base">You have the right to:</p>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• Access and review your personal information</li>
                  <li>• Request correction of inaccurate or incomplete data</li>
                  <li>• Request deletion of your personal information (subject to legal requirements)</li>
                  <li>• Object to or restrict certain processing activities</li>
                  <li>• Data portability for information you provided to us</li>
                  <li>• Withdraw consent where processing is based on consent</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We use cookies and similar technologies to enhance your experience, remember your 
                  preferences, and analyze platform usage. You can control cookie settings through 
                  your browser, though this may affect platform functionality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="space-y-1 text-sm sm:text-base">
                  <p className="font-medium">Email: privacy@vital.com</p>
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