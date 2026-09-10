import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | BiztelAI',
  description: 'How BiztelAI handles information provided through our website.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy">
      <p>BiztelAI Technologies Private Limited (“BiztelAI”, “we”, “us”, or “our”) respects your privacy. This Privacy Policy explains how we handle information provided through our website.</p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>When you contact us or request a demo through our website, we may collect information that you voluntarily provide, including:</p>
        <ul>
          <li>Name</li>
          <li>Company name</li>
          <li>Work email address</li>
          <li>Phone number, where provided</li>
          <li>Job title or role, where provided</li>
          <li>Information about your manufacturing workflow, process, or requirements</li>
          <li>Any other information you choose to provide to us</li>
        </ul>
        <p>We collect this information primarily to understand your requirements and respond to your enquiries.</p>
      </section>
      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We may use the information you provide to:</p>
        <ul>
          <li>Respond to enquiries and demo requests</li>
          <li>Understand your manufacturing requirements</li>
          <li>Communicate with you regarding BiztelAI and its products and services</li>
          <li>Provide information about our products and capabilities</li>
          <li>Improve our website, products, and services</li>
          <li>Maintain the security and proper functioning of our website</li>
        </ul>
      </section>
      <section>
        <h2>3. Sharing of Information</h2>
        <p>We do not sell your personal information.</p>
        <p>We may share information with service providers who support the operation of our website, communications, or other business activities, where reasonably necessary for those purposes.</p>
        <p>We may also disclose information where required by applicable law or legal process, or where necessary to protect our rights or security.</p>
      </section>
      <section>
        <h2>4. Data Security</h2>
        <p>We take reasonable measures to protect the information we collect from unauthorized access, misuse, loss, alteration, or disclosure.</p>
        <p>However, no method of transmission or storage over the internet can be guaranteed to be completely secure.</p>
      </section>
      <section>
        <h2>5. Data Retention</h2>
        <p>We retain information for as long as reasonably necessary to respond to enquiries, maintain relevant business records, and fulfill the purposes for which the information was collected.</p>
      </section>
      <section>
        <h2>6. Cookies</h2>
        <p>Our website may use essential cookies or similar technologies required for the website to function properly.</p>
        <p>If we introduce analytics, advertising, or other non-essential tracking technologies, we may update this Privacy Policy accordingly.</p>
      </section>
      <section>
        <h2>7. Third-Party Websites</h2>
        <p>Our website may contain links to third-party websites or services. BiztelAI is not responsible for the privacy practices, content, or security of those third-party websites.</p>
        <p>We encourage you to review the privacy policies of third-party websites before providing them with personal information.</p>
      </section>
      <section>
        <h2>8. Children's Privacy</h2>
        <p>Our website is intended for business and professional users and is not directed toward children.</p>
      </section>
      <section>
        <h2>9. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes to our website, business practices, or applicable requirements.</p>
        <p>Any updated version will be published on this page with a revised “Last Updated” date.</p>
      </section>
      <section>
        <h2>10. Company Information</h2>
        <p><strong>BiztelAI Technologies Private Limited</strong><br />Bengaluru, Karnataka, India</p>
      </section>
    </LegalPage>
  );
}
