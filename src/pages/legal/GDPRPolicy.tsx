import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GDPRPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            General Data Protection Regulation (GDPR) Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: January 1, 2025
          </p>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              DGenz Media ("we," "our," or "us") is committed to protecting and respecting your privacy in accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679. This GDPR Policy explains how we collect, use, store, and protect your personal data when you interact with our services, website, and platforms.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              As a B2B account-based marketing platform provider, we understand the critical importance of data protection and privacy. This policy is designed to ensure transparency about our data processing activities and to help you understand your rights under GDPR. We process personal data only where we have a valid legal basis to do so, and we implement appropriate technical and organizational measures to protect your information.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              This GDPR Policy applies to all individuals whose personal data we process, including our customers, prospects, website visitors, business partners, and employees. By using our services or providing us with your personal data, you acknowledge that you have read and understood this policy.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              We regularly review and update this policy to ensure it remains compliant with current regulations and reflects our data processing practices. Any significant changes will be communicated to you through appropriate channels, including email notifications and prominent notices on our website.
            </p>
          </section>

          {/* Data Controller Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">2. Data Controller Information</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              For the purposes of GDPR, DGenz Media is the data controller responsible for your personal data. Our contact details are as follows:
            </p>
            <div className="bg-secondary/20 p-6 rounded-lg mb-4">
              <p className="text-foreground/90 mb-2"><strong>Company Name:</strong> DGenz Media</p>
              <p className="text-foreground/90 mb-2"><strong>Email:</strong> contact@dgenzmedia.com</p>
              <p className="text-foreground/90 mb-2"><strong>India Office:</strong> WJ88+69V BMTC Complex, Outer Ring Rd, Old Madiwala, Kuvempu Nagar, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076, India</p>
              <p className="text-foreground/90"><strong>UAE Office:</strong> Street: 2, 17 Street, Dubai, United Arab Emirates</p>
            </div>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We have appointed a dedicated Data Protection Officer (DPO) who is responsible for overseeing questions in relation to this GDPR Policy and our data protection practices. If you have any questions about this policy or how we handle your personal data, you can contact our DPO at: dpo@dgenzmedia.com
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Our DPO works closely with supervisory authorities and is available to address any concerns or queries you may have regarding the processing of your personal data. We encourage you to contact our DPO first if you have any questions or concerns about how we process your personal data.
            </p>
          </section>

          {/* Types of Personal Data We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">3. Types of Personal Data We Collect</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We collect and process various categories of personal data depending on how you interact with our services. The specific data we collect may vary based on your relationship with us and the services you use. Below is a comprehensive list of the types of personal data we may collect:
            </p>
            
            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">3.1 Identity and Contact Information</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              This includes basic personal information such as your full name, job title, company name, business address, email address, telephone number, and other contact details. We collect this information when you create an account, subscribe to our services, contact us for support, or engage with our marketing materials. This data is essential for us to provide our services and communicate with you effectively.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">3.2 Account and Authentication Data</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              When you create an account with us, we collect username, password (stored in encrypted form), security questions and answers, and multi-factor authentication data. This information is crucial for securing your account and preventing unauthorized access. We implement industry-standard security measures to protect this sensitive authentication data.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">3.3 Professional and Employment Information</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              As a B2B platform, we collect professional information including your job function, seniority level, department, company size, industry sector, professional interests, and business needs. This information helps us tailor our services to your specific requirements and provide relevant marketing communications. We may also collect information about your professional certifications, skills, and areas of expertise.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">3.4 Technical and Usage Data</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We automatically collect technical information when you use our services, including IP address, browser type and version, device type and operating system, time zone settings, browser plug-in types and versions, geographical location data, and information about your visit to our website (including clickstream data, pages viewed, time spent on pages, navigation paths, and interaction with features). This data helps us understand how our services are used and allows us to improve user experience, troubleshoot technical issues, and detect security threats.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">3.5 Marketing and Communications Data</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              This includes your preferences for receiving marketing communications, communication history with us, responses to surveys and feedback requests, event attendance records, webinar participation, content downloads, and engagement with our marketing emails (such as open rates and click-through rates). We use this information to understand your interests and preferences and to provide you with relevant content and offers.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">3.6 Transaction and Financial Data</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              If you purchase our services, we collect payment card details (processed securely through our payment processors), billing address, transaction history, and invoice information. We do not store complete payment card details on our servers; instead, we use PCI-DSS compliant payment processors to handle this sensitive information securely.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">3.7 User-Generated Content</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              This includes any content you create, upload, or share through our platform, such as campaign data, target audience information, marketing materials, comments, feedback, and support tickets. We process this content to provide our services and may analyze it to improve our offerings and provide personalized recommendations.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">3.8 Special Categories of Personal Data</h3>
            <p className="text-foreground/90 leading-relaxed">
              We do not intentionally collect special categories of personal data (such as data revealing racial or ethnic origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data, health data, or data concerning sex life or sexual orientation) unless specifically required by law or with your explicit consent. If we need to process such data, we will obtain your explicit consent and implement additional safeguards as required by GDPR.
            </p>
          </section>

          {/* How We Collect Personal Data */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">4. How We Collect Personal Data</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We collect personal data through various channels and methods, each designed to provide you with optimal service while respecting your privacy rights. Understanding how we collect your data helps you make informed decisions about sharing information with us.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">4.1 Direct Interactions</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You provide us with personal data directly when you: create an account or register for our services; fill out forms on our website or applications; subscribe to our newsletters or publications; request marketing materials or information; participate in surveys, competitions, or promotional activities; attend our events, webinars, or conferences; contact our customer support team; provide feedback or report problems; or engage with our sales team during the sales process.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              These direct interactions are the primary way we collect personal data, and we always strive to be transparent about what information we're collecting and why. We typically collect only the information necessary to fulfill your request or provide the service you've requested.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">4.2 Automated Technologies and Interactions</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              As you interact with our website and services, we automatically collect technical data about your equipment, browsing actions, and usage patterns. We collect this data using cookies, server logs, and similar tracking technologies. This automated collection helps us understand how users interact with our services, identify technical issues, improve user experience, and detect security threats.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Our website uses various types of cookies, including strictly necessary cookies (required for the website to function), performance cookies (to analyze how visitors use the website), functionality cookies (to remember your preferences), and targeting cookies (to deliver relevant advertisements). You can control cookie settings through your browser preferences, although disabling certain cookies may affect the functionality of our website.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">4.3 Third-Party Sources</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We may receive personal data about you from various third-party sources, including: business partners and resellers who refer you to our services; publicly available sources such as LinkedIn, company websites, and business directories; data providers who supply business contact information and firmographic data; analytics providers who help us understand user behavior; advertising networks and platforms; and social media platforms when you interact with our content or advertisements.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              When we receive data from third parties, we ensure that these sources have obtained the data lawfully and have the right to share it with us. We also verify that our use of this data is consistent with the purposes for which it was originally collected or for which you have provided consent.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">4.4 Integration and API Data</h3>
            <p className="text-foreground/90 leading-relaxed">
              If you integrate our services with third-party applications or platforms (such as CRM systems, marketing automation tools, or analytics platforms), we may collect data through these integrations. This may include contact information, engagement data, and other relevant business information. We only collect data through integrations that you authorize, and we process this data in accordance with our agreements with you and applicable data protection laws.
            </p>
          </section>

          {/* Legal Basis for Processing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">5. Legal Basis for Processing Personal Data</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Under GDPR, we must have a valid legal basis for processing your personal data. We process personal data only where we have one or more of the following legal bases:
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">5.1 Performance of a Contract</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We process your personal data when it is necessary to perform a contract with you or to take steps at your request before entering into a contract. This includes: providing our B2B marketing services; managing your account and subscription; processing payments and transactions; delivering customer support; and fulfilling our contractual obligations. Without this processing, we would be unable to provide our services to you.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">5.2 Legitimate Interests</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We may process your personal data where it is necessary for our legitimate interests or those of a third party, provided your rights and interests do not override these legitimate interests. Our legitimate interests include: operating and improving our business and services; understanding how our services are used; developing new products and features; conducting market research and analysis; detecting and preventing fraud and security threats; managing our relationships with customers and partners; marketing our services to businesses; complying with legal and regulatory requirements; and exercising or defending legal claims.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Before relying on legitimate interests as a legal basis, we carefully balance our interests against your rights and freedoms. We conduct regular assessments to ensure that our processing remains necessary and proportionate. If you have concerns about our reliance on legitimate interests, you have the right to object to this processing.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">5.3 Consent</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              In certain circumstances, we rely on your consent to process your personal data. This typically applies to: marketing communications sent via email; use of certain types of cookies; processing special categories of personal data; and transferring data to countries outside the EEA without adequate safeguards. When we rely on consent, we ensure that it is freely given, specific, informed, and unambiguous. You have the right to withdraw your consent at any time, and we make it easy for you to do so through clear opt-out mechanisms.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">5.4 Legal Obligation</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We process personal data where necessary to comply with legal obligations to which we are subject. This includes: complying with tax and accounting requirements; responding to lawful requests from law enforcement and regulatory authorities; maintaining records as required by law; and fulfilling our obligations under employment and social security laws. When processing data for legal compliance, we limit the data collected and retained to what is strictly necessary.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">5.5 Vital Interests</h3>
            <p className="text-foreground/90 leading-relaxed">
              In rare circumstances, we may process personal data where necessary to protect your vital interests or those of another person. This legal basis is typically used in emergency situations where processing is necessary to protect life or physical safety. We only rely on this basis when other legal bases are not applicable.
            </p>
          </section>

          {/* How We Use Personal Data */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">6. How We Use Personal Data</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We use your personal data for various purposes related to our business operations and the provision of our services. The specific purposes for which we use your data depend on how you interact with us and the nature of our relationship with you.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">6.1 Service Delivery and Account Management</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We use your personal data to: create and manage your account; provide access to our B2B marketing platform; deliver the services you have purchased; process transactions and manage billing; provide customer support and respond to inquiries; send service-related communications; manage your subscription and renewals; and monitor and improve service quality. This processing is necessary to fulfill our contractual obligations to you and ensure you receive the full benefit of our services.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">6.2 Platform Functionality and Personalization</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We process your data to: customize your experience on our platform; provide personalized recommendations and insights; remember your preferences and settings; enable collaboration features; generate analytics and reporting for your campaigns; and optimize platform performance based on your usage patterns. These personalization efforts help us deliver more relevant and effective services tailored to your specific business needs.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">6.3 Marketing and Communications</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Subject to applicable law and your preferences, we use your data to: send you marketing communications about our products and services; inform you about updates, new features, and industry insights; invite you to events, webinars, and conferences; conduct market research and surveys; measure the effectiveness of our marketing campaigns; and develop targeted marketing strategies. You can opt out of marketing communications at any time through the unsubscribe link in our emails or by contacting us directly.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">6.4 Research and Development</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We analyze usage data and feedback to: develop new products and features; improve existing services; conduct research on industry trends and best practices; test and validate new technologies; enhance our AI and machine learning capabilities; and innovate our platform based on user needs. This processing typically involves aggregated or anonymized data, but may include personal data where necessary for specific development purposes.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">6.5 Security and Fraud Prevention</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We process personal data to: protect against and detect security threats; prevent and investigate fraud and unauthorized access; verify user identity; monitor for suspicious activities; enforce our terms and conditions; respond to security incidents; and maintain the integrity of our systems. These security measures are essential to protect both your data and our platform from malicious activities.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">6.6 Legal Compliance and Business Operations</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We use personal data to: comply with legal and regulatory requirements; respond to lawful requests from authorities; maintain business records; conduct financial and tax reporting; manage business relationships; perform business analytics; conduct audits; and exercise or defend legal rights. These uses are necessary for us to operate our business lawfully and responsibly.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">6.7 Business Transfers and Corporate Transactions</h3>
            <p className="text-foreground/90 leading-relaxed">
              In the event of a merger, acquisition, reorganization, or sale of assets, we may transfer personal data as part of the transaction. We will notify you of any such change in ownership or control of your personal data and ensure that the acquiring party agrees to protect your data in accordance with this GDPR Policy and applicable law.
            </p>
          </section>

          {/* Data Sharing and Disclosure */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">7. Data Sharing and Disclosure</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We may share your personal data with third parties in certain circumstances. We only share data when necessary for legitimate business purposes and with appropriate safeguards in place to protect your privacy.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">7.1 Service Providers and Processors</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We engage third-party service providers to perform functions on our behalf, including: cloud hosting and infrastructure services; payment processing and billing; customer relationship management; marketing automation and email delivery; analytics and data analysis; customer support tools; cybersecurity services; and IT support and maintenance. These service providers act as data processors and are contractually obligated to process personal data only as instructed by us and to implement appropriate security measures.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">7.2 Business Partners and Resellers</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We may share your data with authorized business partners and resellers who help us deliver our services or who jointly offer services with us. This sharing is governed by strict contractual agreements that require partners to protect your data and use it only for specified purposes. We carefully select our partners and regularly audit their data protection practices.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">7.3 Professional Advisors</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We may share personal data with professional advisors such as lawyers, accountants, auditors, and insurance providers when necessary for obtaining professional advice, managing risks, and conducting business operations. These advisors are bound by professional confidentiality obligations and data protection requirements.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">7.4 Legal and Regulatory Authorities</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We may disclose personal data to law enforcement, regulatory authorities, courts, and other government agencies when required by law or when necessary to: comply with legal obligations; enforce our terms and conditions; protect our rights, property, or safety; prevent or investigate fraud or security issues; or respond to lawful requests. We carefully review all such requests and provide only the data that is legally required.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">7.5 Corporate Transactions</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              In the event of a merger, acquisition, corporate restructuring, or sale of all or substantially all of our assets, personal data may be transferred to the acquiring entity. We will notify affected individuals and ensure that the acquiring party agrees to protect personal data in a manner consistent with this GDPR Policy.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">7.6 With Your Consent</h3>
            <p className="text-foreground/90 leading-relaxed">
              In circumstances not covered above, we will share your personal data only with your explicit consent. We will clearly explain the purpose of the sharing and the parties with whom your data will be shared before obtaining your consent. You may withdraw your consent at any time, although this may affect our ability to provide certain services.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              As a global organization with offices and service providers in multiple countries, we may transfer your personal data to countries outside the European Economic Area (EEA), including to India and the United Arab Emirates. These transfers are subject to appropriate safeguards to ensure your data remains protected in accordance with GDPR requirements.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">8.1 Adequacy Decisions</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Where possible, we transfer data to countries that have been recognized by the European Commission as providing adequate protection for personal data. These adequacy decisions ensure that the receiving country maintains data protection standards comparable to those within the EEA.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">8.2 Standard Contractual Clauses</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              For transfers to countries without adequacy decisions, we use Standard Contractual Clauses (SCCs) approved by the European Commission. These clauses impose data protection obligations on data recipients and provide enforceable rights for data subjects. We conduct transfer impact assessments to ensure that the SCCs provide effective protection in the specific context of each transfer.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">8.3 Additional Safeguards</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              In addition to legal transfer mechanisms, we implement supplementary measures to protect data during international transfers, including: encryption of data in transit and at rest; access controls and authentication measures; regular security audits and assessments; contractual provisions with specific security requirements; monitoring of data access and transfers; and incident response procedures. We continuously monitor legal developments and adjust our transfer mechanisms as necessary to maintain compliance.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">8.4 Your Rights Regarding International Transfers</h3>
            <p className="text-foreground/90 leading-relaxed">
              You have the right to receive information about international transfers of your data and to request copies of the safeguards we have in place. If you have concerns about international transfers of your data, please contact our Data Protection Officer. We will provide you with detailed information about the transfer, the safeguards applied, and any additional measures we have implemented.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">9. Data Retention</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal, regulatory, and business requirements. Our retention periods are based on various factors and criteria.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">9.1 Retention Criteria</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We determine retention periods based on: the nature and sensitivity of the data; the purposes for which the data was collected; applicable legal and regulatory requirements; legitimate business interests; contractual obligations; and the need to defend or establish legal claims. We regularly review our retention policies and delete or anonymize data that is no longer necessary.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">9.2 Specific Retention Periods</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Customer account data is retained for the duration of your account plus 7 years after account closure to comply with financial and legal requirements. Transaction and billing records are retained for 10 years for tax and accounting purposes. Marketing communications data is retained until you opt out or for 3 years from your last interaction with us. Technical and usage data is typically retained for 2 years for analytical purposes. Support tickets and communications are retained for 5 years to maintain service quality and resolve disputes. Website analytics data may be retained indefinitely in aggregated, anonymized form.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">9.3 Secure Deletion</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              When personal data reaches the end of its retention period, we securely delete or anonymize it using industry-standard methods. This includes: removing data from production systems; deleting backups containing the data; anonymizing data used for analytical purposes; and securely disposing of physical records. We maintain records of data deletion activities for audit purposes.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">9.4 Legal Holds</h3>
            <p className="text-foreground/90 leading-relaxed">
              In certain circumstances, we may need to retain data beyond normal retention periods, such as when data is subject to legal holds, litigation, investigations, or regulatory inquiries. In such cases, we will retain the relevant data only for as long as necessary to fulfill these obligations and will resume normal retention practices once the hold is lifted.
            </p>
          </section>

          {/* Your Rights Under GDPR */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">10. Your Rights Under GDPR</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              GDPR provides you with important rights regarding your personal data. We are committed to facilitating the exercise of these rights and will respond to requests promptly and in accordance with legal requirements.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">10.1 Right of Access</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You have the right to obtain confirmation of whether we process your personal data and, if so, to access that data along with information about how it is being used. This includes the right to receive a copy of your personal data. We will provide this information free of charge, although we may charge a reasonable fee for additional copies or for manifestly unfounded or excessive requests. We will respond to access requests within one month, extendable by two months for complex requests.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">10.2 Right to Rectification</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You have the right to have inaccurate personal data corrected and to have incomplete data completed. You can update many types of personal data directly through your account settings. For other corrections, please contact us and we will update your data promptly. We will also notify any third parties with whom we have shared your data about the rectification, unless this proves impossible or involves disproportionate effort.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">10.3 Right to Erasure (Right to be Forgotten)</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You have the right to request deletion of your personal data in certain circumstances, including when: the data is no longer necessary for the purposes for which it was collected; you withdraw consent on which processing is based; you object to processing and there are no overriding legitimate grounds; the data has been unlawfully processed; or deletion is required to comply with legal obligations. This right is not absolute and may be limited by legal obligations requiring us to retain certain data.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">10.4 Right to Restriction of Processing</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You have the right to restrict processing of your personal data in certain situations, such as when: you contest the accuracy of the data; the processing is unlawful but you prefer restriction to deletion; we no longer need the data but you need it for legal claims; or you have objected to processing pending verification of legitimate grounds. When processing is restricted, we may store the data but not further process it without your consent or for specific legal purposes.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">10.5 Right to Data Portability</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You have the right to receive personal data you provided to us in a structured, commonly used, and machine-readable format and to transmit that data to another controller. This right applies when processing is based on consent or contract and is carried out by automated means. We will provide data in JSON or CSV format and, where technically feasible, will transmit the data directly to another controller at your request.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">10.6 Right to Object</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You have the right to object to processing of your personal data based on legitimate interests or for direct marketing purposes. For direct marketing, we will stop processing immediately upon receiving your objection. For other objections, we will cease processing unless we can demonstrate compelling legitimate grounds that override your interests, rights, and freedoms, or the processing is necessary for legal claims.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">10.7 Rights Related to Automated Decision-Making</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You have the right not to be subject to decisions based solely on automated processing, including profiling, which produce legal effects or similarly significantly affect you. We do not typically make such automated decisions, but if we do, we will implement appropriate safeguards, including the right to obtain human intervention, express your point of view, and contest the decision.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">10.8 Right to Withdraw Consent</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Where we rely on your consent to process personal data, you have the right to withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal. You can withdraw consent through your account settings, by clicking unsubscribe links in our emails, or by contacting us directly.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">10.9 How to Exercise Your Rights</h3>
            <p className="text-foreground/90 leading-relaxed">
              To exercise any of these rights, please contact us at contact@dgenzmedia.com or write to our Data Protection Officer. We may need to verify your identity before fulfilling requests to ensure we are disclosing personal data only to the correct individual. We will respond to requests within one month, although this period may be extended by two additional months for complex requests. We will always inform you of any extensions and the reasons for the delay.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">11. Data Security</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We implement comprehensive technical and organizational security measures to protect personal data against unauthorized access, accidental loss, destruction, or damage. Our security program is regularly reviewed and updated to address evolving threats and maintain industry best practices.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">11.1 Technical Security Measures</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Our technical security measures include: encryption of data in transit using TLS 1.3 or higher; encryption of data at rest using AES-256 encryption; secure authentication mechanisms including multi-factor authentication; regular security patching and updates; network security controls including firewalls and intrusion detection systems; secure backup and disaster recovery procedures; vulnerability scanning and penetration testing; secure software development practices; and access logging and monitoring. We use industry-leading security technologies and regularly assess our security posture.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">11.2 Organizational Security Measures</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Our organizational measures include: strict access controls limiting data access to authorized personnel only; role-based access control ensuring employees access only the data necessary for their roles; mandatory security training for all employees; background checks for employees with access to sensitive data; confidentiality agreements with employees and contractors; incident response and data breach procedures; regular security audits and compliance assessments; vendor security assessments; data protection impact assessments for high-risk processing; and security governance and oversight by senior management.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">11.3 Infrastructure Security</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We host our services on secure cloud infrastructure provided by leading cloud service providers who maintain SOC 2 Type II, ISO 27001, and other relevant security certifications. Our infrastructure includes: geographically distributed data centers; redundant systems for high availability; automated failover capabilities; regular backups with secure offsite storage; environmental controls and physical security; and continuous monitoring and alerting. We regularly review our providers' security practices and certifications.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">11.4 Application Security</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Our application security measures include: secure coding practices following OWASP guidelines; regular code reviews and security testing; input validation and output encoding; protection against common web application vulnerabilities; secure session management; CSRF and XSS protection; rate limiting and DDoS protection; secure API design and authentication; and regular security assessments by third-party experts. We maintain a responsible disclosure program for security researchers.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">11.5 Incident Response</h3>
            <p className="text-foreground/90 leading-relaxed">
              We have established incident response procedures to detect, respond to, and recover from security incidents. In the event of a personal data breach that poses a risk to individuals' rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach. We will also notify affected individuals without undue delay when the breach poses a high risk to their rights and freedoms. Our incident response includes containment, investigation, remediation, and lessons learned to prevent future incidents.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">12. Children's Privacy</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Our services are designed for businesses and are not intended for individuals under the age of 16. We do not knowingly collect personal data from children under 16. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              If we become aware that we have collected personal data from a child under 16 without verification of parental consent, we will take steps to delete that information from our systems as soon as possible. We maintain age-appropriate controls and processes to prevent inadvertent collection of children's data.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Our compliance extends to regulations protecting children's privacy, including the Children's Online Privacy Protection Act (COPPA) in the United States and similar laws in other jurisdictions. We regularly review our practices to ensure continued compliance with evolving standards for protecting children's privacy.
            </p>
          </section>

          {/* Third-Party Links and Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">13. Third-Party Links and Services</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Our website and services may contain links to third-party websites, applications, and services that are not operated by us. This GDPR Policy applies only to our processing of personal data and does not cover the privacy practices of third parties.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              When you click on links to third-party sites or use third-party integrations, you leave our services and are subject to the privacy policies of those third parties. We encourage you to read the privacy policies of any third-party services you use. We are not responsible for the privacy practices or content of third-party websites and services.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              If you integrate our services with third-party applications (such as CRM systems or marketing tools), data may be shared between our services and these applications according to your configuration and the integration settings you choose. Please review the privacy policies of any third-party applications you integrate with our services and carefully configure sharing settings.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              We conduct due diligence on third-party service providers we work with and require them to maintain appropriate data protection standards through contractual agreements. However, we cannot guarantee the privacy practices of external parties beyond our contractual relationships with them.
            </p>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">14. Cookies and Tracking Technologies</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We use cookies and similar tracking technologies to collect and store information when you visit our website and use our services. These technologies help us provide, protect, and improve our services.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">14.1 What Are Cookies</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies can be "session" cookies (temporary, deleted when you close your browser) or "persistent" cookies (remain on your device for a set period or until you delete them).
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">14.2 Types of Cookies We Use</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Strictly Necessary Cookies: These cookies are essential for our website to function and cannot be disabled. They enable core functionality such as security, network management, and accessibility. Without these cookies, services you have requested cannot be provided. These cookies do not store personally identifiable information.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Performance and Analytics Cookies: These cookies collect information about how visitors use our website, such as which pages are visited most often and whether users receive error messages. This data is aggregated and anonymous and is used to improve website functionality and user experience. We use services like Google Analytics for this purpose.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Functionality Cookies: These cookies allow our website to remember choices you make (such as language preferences, region, or customized settings) and provide enhanced, personalized features. They may also be used to remember changes you have made to text size, fonts, and other customizable parts of web pages.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Targeting and Advertising Cookies: These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and to measure the effectiveness of advertising campaigns. These cookies are typically placed by advertising networks with our permission and remember that you have visited our website.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">14.3 Other Tracking Technologies</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              In addition to cookies, we use other tracking technologies including: web beacons (small graphic images embedded in web pages or emails to track user actions); pixels (code snippets that track user behavior and conversions); local storage (browser storage for session data and preferences); and fingerprinting techniques (collecting device and browser characteristics for security purposes). These technologies serve similar purposes to cookies and are governed by this policy.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6">14.4 Managing Cookies</h3>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and some functionality may not work as intended. Most browsers allow you to refuse cookies or to delete cookies already on your device. You can usually find these settings in the "options" or "preferences" menu of your browser.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              For more information about cookies and how to manage them, visit www.allaboutcookies.org. You can also opt out of interest-based advertising through the Digital Advertising Alliance (www.aboutads.info) or the Network Advertising Initiative (www.networkadvertising.org). For analytics cookies, you can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.
            </p>
          </section>

          {/* Data Protection Impact Assessments */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">15. Data Protection Impact Assessments</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We conduct Data Protection Impact Assessments (DPIAs) for processing activities that are likely to result in high risks to individuals' rights and freedoms. DPIAs help us identify and minimize data protection risks in our projects and business processes.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We perform DPIAs when: implementing new technologies; processing special categories of personal data; conducting large-scale profiling or automated decision-making; processing vulnerable individuals' data; or combining or matching datasets. Our DPIA process includes describing the processing, assessing necessity and proportionality, identifying and evaluating risks, and determining mitigation measures.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              When a DPIA indicates high residual risks that we cannot adequately mitigate, we consult with the relevant supervisory authority before proceeding with the processing. We document all DPIAs and their outcomes and regularly review them to ensure continued appropriateness of our risk mitigation measures.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Our DPIA process is integrated into our project management and development lifecycle, ensuring that privacy considerations are addressed from the earliest stages of new initiatives. This "privacy by design" approach helps us build data protection into our products and services rather than adding it as an afterthought.
            </p>
          </section>

          {/* Complaints and Supervisory Authority */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">16. Complaints and Supervisory Authority</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We are committed to resolving any complaints about our collection or use of your personal data. If you have concerns about how we handle your data, we encourage you to contact us first so we can work to resolve the issue.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You can submit a complaint to us by: emailing our Data Protection Officer at dpo@dgenzmedia.com; writing to us at our registered office addresses; or using the contact form on our website. We will acknowledge your complaint within 48 hours and provide a full response within 30 days. If your complaint requires more extensive investigation, we will keep you informed of our progress.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              You also have the right to lodge a complaint with a supervisory authority, particularly in the EU member state where you reside, work, or where an alleged infringement of data protection law occurred. The supervisory authority in your jurisdiction can investigate your complaint and take appropriate action against us if they find that we have violated data protection laws.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              For individuals in the European Union, you can find your local supervisory authority at: https://edpb.europa.eu/about-edpb/board/members_en. We cooperate fully with supervisory authorities and comply with their decisions and recommendations. However, we encourage you to contact us first, as we are often able to resolve concerns more quickly than through formal regulatory processes.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Lodging a complaint with a supervisory authority does not affect your ability to seek legal remedies through the courts. You may also have the right to an effective judicial remedy against us if you believe we have violated your data protection rights.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">17. Changes to This GDPR Policy</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We may update this GDPR Policy from time to time to reflect changes in our practices, technologies, legal requirements, or business operations. When we make changes, we will update the "Last Updated" date at the top of this policy.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              For significant changes that materially affect your rights or how we process your personal data, we will: provide prominent notice on our website; send email notifications to registered users; and, where required by law, obtain your consent to the changes. We encourage you to review this policy periodically to stay informed about how we protect your data.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              Previous versions of this policy are archived and available upon request. If you have questions about changes to this policy, please contact our Data Protection Officer. Your continued use of our services after changes become effective constitutes acceptance of the updated policy, unless the changes require your explicit consent.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              We maintain a change log documenting significant updates to this policy, including the nature of changes, the date they became effective, and the reasons for the updates. This transparency helps you understand how our data protection practices evolve over time.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">18. Contact Information</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              If you have any questions, concerns, or requests regarding this GDPR Policy or our data protection practices, please contact us:
            </p>
            <div className="bg-secondary/20 p-6 rounded-lg mb-6">
              <p className="text-foreground/90 mb-3"><strong>Data Protection Officer:</strong></p>
              <p className="text-foreground/90 mb-2">Email: dpo@dgenzmedia.com</p>
              <p className="text-foreground/90 mb-2">General Contact: contact@dgenzmedia.com</p>
              <p className="text-foreground/90 mb-4">Phone: Available upon request</p>
              
              <p className="text-foreground/90 mb-2"><strong>India Office:</strong></p>
              <p className="text-foreground/90 mb-4">WJ88+69V BMTC Complex, Outer Ring Rd, Old Madiwala, Kuvempu Nagar, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076, India</p>
              
              <p className="text-foreground/90 mb-2"><strong>UAE Office:</strong></p>
              <p className="text-foreground/90">Street: 2, 17 Street, Dubai, United Arab Emirates</p>
            </div>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We are committed to working with you to obtain a fair resolution of any complaint or concern about privacy. We will acknowledge your communication within 48 hours and provide a substantive response within 30 days. For complex matters requiring extended investigation, we will keep you informed of our progress and expected resolution timeline.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Our team is available during business hours (9:00 AM - 6:00 PM IST, Monday through Friday) to address your inquiries. For urgent security or privacy concerns, please mark your communication as "URGENT" in the subject line, and we will prioritize your request accordingly.
            </p>
          </section>

          {/* Definitions and Interpretation */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">19. Definitions and Interpretation</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              For the purposes of this GDPR Policy, the following terms have the meanings set out below:
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-foreground font-semibold mb-2">Personal Data:</p>
                <p className="text-foreground/90 leading-relaxed">Any information relating to an identified or identifiable natural person. An identifiable person is one who can be identified, directly or indirectly, by reference to an identifier such as a name, identification number, location data, online identifier, or factors specific to their identity.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold mb-2">Processing:</p>
                <p className="text-foreground/90 leading-relaxed">Any operation or set of operations performed on personal data, whether by automated means or not, including collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, dissemination, restriction, erasure, or destruction.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold mb-2">Data Controller:</p>
                <p className="text-foreground/90 leading-relaxed">The entity that determines the purposes and means of processing personal data. DGenz Media is the data controller for personal data processed through our services.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold mb-2">Data Processor:</p>
                <p className="text-foreground/90 leading-relaxed">An entity that processes personal data on behalf of the data controller. We engage data processors such as cloud hosting providers and analytics services.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold mb-2">Data Subject:</p>
                <p className="text-foreground/90 leading-relaxed">An identified or identifiable natural person whose personal data is processed. You are a data subject with respect to your personal data that we process.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold mb-2">Consent:</p>
                <p className="text-foreground/90 leading-relaxed">Any freely given, specific, informed, and unambiguous indication of the data subject's wishes by which they signify agreement to the processing of personal data relating to them.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold mb-2">Special Categories of Personal Data:</p>
                <p className="text-foreground/90 leading-relaxed">Personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data, health data, or data concerning sex life or sexual orientation. These categories receive additional protections under GDPR.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold mb-2">Supervisory Authority:</p>
                <p className="text-foreground/90 leading-relaxed">An independent public authority established by an EU member state to monitor application of GDPR, protect data subjects' rights, and investigate complaints.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">20. Conclusion</h2>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              At DGenz Media, we recognize that privacy and data protection are fundamental rights. This GDPR Policy reflects our commitment to transparency, accountability, and respect for your privacy rights. We continuously work to enhance our data protection practices and stay current with evolving regulations and best practices.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We believe that strong data protection is not only a legal requirement but also essential for building trust with our customers and partners. Our approach to data protection is guided by the principles of data minimization, purpose limitation, accuracy, storage limitation, integrity, confidentiality, and accountability.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We invest significantly in security technologies, employee training, and compliance programs to ensure that your personal data is protected at all times. Our data protection practices are regularly audited by internal and external experts to verify compliance and identify opportunities for improvement.
            </p>
            <p className="text-foreground/90 mb-4 leading-relaxed">
              We value your trust and are committed to being transparent about how we collect, use, and protect your personal data. If you have any questions or concerns about this policy or our data protection practices, please don't hesitate to contact us. We are here to help and to ensure that your privacy rights are respected.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Thank you for taking the time to read this GDPR Policy. By working together and maintaining open communication, we can ensure that your personal data is protected while delivering the high-quality services you expect from DGenz Media.
            </p>
          </section>

          {/* Acknowledgment */}
          <section className="mb-12">
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-foreground/90 leading-relaxed">
                <strong>Acknowledgment:</strong> By using our services and providing us with your personal data, you acknowledge that you have read, understood, and agree to be bound by this GDPR Policy. If you do not agree with this policy, please do not use our services or provide us with your personal data.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GDPRPolicy;