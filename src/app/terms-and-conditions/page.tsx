import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions | BiztelAI',
  description: 'Terms and conditions for accessing and using the BiztelAI website.',
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage title="Terms & Conditions" path="/terms-and-conditions">
      <p>Welcome to the website of <strong>BiztelAI Technologies Private Limited</strong> (“BiztelAI”, “we”, “us”, or “our”).</p>
      <p>By accessing or using this website, you agree to these Terms &amp; Conditions. If you do not agree with these terms, please do not use the website.</p>

      <section>
        <h2>1. Use of the Website</h2>
        <p>This website is provided for general informational and business purposes.</p>
        <p>You agree to use the website only for lawful purposes and in a manner that does not interfere with its operation, security, or availability.</p>
      </section>
      <section>
        <h2>2. Website Information</h2>
        <p>We make reasonable efforts to ensure that the information presented on this website is accurate and current.</p>
        <p>However, product descriptions, capabilities, features, integrations, availability, and other information may change as our products and services evolve.</p>
        <p>Information provided on this website is for general informational purposes and should not be considered a binding offer, commitment, or guarantee.</p>
      </section>
      <section>
        <h2>3. Products and Services</h2>
        <p>BiztelAI develops AI-based technology and solutions for manufacturing, including process monitoring, visual inspection, and manufacturing intelligence.</p>
        <p>Actual product capabilities, performance, configurations, integrations, and deployment requirements may vary depending on the customer's environment, hardware, processes, data, and other factors.</p>
        <p>Any commercial engagement, implementation, deployment, subscription, or professional service provided by BiztelAI will be governed by separate agreements where applicable.</p>
      </section>
      <section>
        <h2>4. Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, product names, designs, images, videos, software, and other materials, is owned by or licensed to BiztelAI unless otherwise stated.</p>
        <p>You may not reproduce, modify, distribute, publish, transmit, sell, or commercially exploit website content without prior written permission from BiztelAI.</p>
      </section>
      <section>
        <h2>5. Trademarks</h2>
        <p>BiztelAI, its logos, product names, and related marks are trademarks or proprietary marks of BiztelAI or their respective owners.</p>
        <p>Unauthorized use of such marks is prohibited.</p>
      </section>
      <section>
        <h2>6. User Submissions</h2>
        <p>If you submit information, feedback, enquiries, or other materials through the website, you represent that you have the right to provide such information.</p>
        <p>You should not submit confidential, proprietary, or sensitive information through a general website form unless specifically requested by BiztelAI.</p>
        <p>Any confidential information exchanged as part of a business engagement may be subject to a separate confidentiality or non-disclosure agreement.</p>
      </section>
      <section>
        <h2>7. Third-Party Links</h2>
        <p>The website may contain links to third-party websites or services.</p>
        <p>These links are provided for convenience. BiztelAI does not control and is not responsible for the content, availability, security, or practices of third-party websites.</p>
      </section>
      <section>
        <h2>8. Website Availability</h2>
        <p>We do not guarantee that the website will always be available, uninterrupted, secure, or free from errors.</p>
        <p>BiztelAI may modify, suspend, or discontinue any part of the website at any time without prior notice.</p>
      </section>
      <section>
        <h2>9. Disclaimer</h2>
        <p>To the maximum extent permitted by applicable law, the website and its content are provided on an “as is” and “as available” basis.</p>
        <p>BiztelAI does not guarantee that the website or its content will meet every user's requirements or that all information provided will always be complete, accurate, or error-free.</p>
      </section>
      <section>
        <h2>10. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, BiztelAI will not be liable for any indirect, incidental, consequential, or special loss arising from or related to your use of the website.</p>
        <p>Nothing in these Terms &amp; Conditions limits any liability that cannot lawfully be excluded or limited under applicable law.</p>
      </section>
      <section>
        <h2>11. Indemnification</h2>
        <p>You agree to indemnify and hold harmless BiztelAI, its directors, employees, and representatives from claims, losses, or liabilities arising from your unlawful use of the website or violation of these Terms &amp; Conditions, to the extent permitted by applicable law.</p>
      </section>
      <section>
        <h2>12. Governing Law</h2>
        <p>These Terms &amp; Conditions shall be governed by the laws of India.</p>
        <p>Subject to applicable law, courts having jurisdiction in <strong>Bengaluru, Karnataka</strong> shall have jurisdiction over disputes arising from these Terms &amp; Conditions.</p>
      </section>
      <section>
        <h2>13. Changes to These Terms</h2>
        <p>BiztelAI may update these Terms &amp; Conditions from time to time.</p>
        <p>Any updated version will be published on this page with a revised “Last Updated” date.</p>
      </section>
      <section>
        <h2>14. Company Information</h2>
        <p><strong>BiztelAI Technologies Private Limited</strong><br />Bengaluru, Karnataka, India</p>
      </section>
    </LegalPage>
  );
}
