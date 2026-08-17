import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Nelio collects, uses, and protects your information.",
  alternates: {
    canonical: "/privacy",
  },
};

const SECTIONS = [
  {
    heading: "1. Overview",
    body: (
      <>
        <p>
          This policy explains what information Nelio (&quot;Nelio,&quot;
          &quot;we,&quot; &quot;us&quot;) collects when you join our waitlist
          or use our review management software, and how we use, share, and
          protect it. Nelio is currently in a pre-launch, waitlist stage;
          this policy will be reviewed by counsel and updated before general
          availability.
        </p>
      </>
    ),
  },
  {
    heading: "2. Information We Collect",
    body: (
      <>
        <p>When you join the waitlist, we collect:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Your business name</li>
          <li>Your work email address</li>
          <li>The field service management tool you use, if any (Jobber, Housecall Pro, another tool, or none)</li>
        </ul>
        <p className="mt-4">
          Once Nelio launches and you connect a Jobber or Housecall Pro
          account, we additionally collect job and customer contact data
          from that integration (such as job completion status, technician
          name, job type, and the customer&apos;s email or phone number)
          solely to send review requests on your behalf and attribute the
          reviews that result. We also collect standard technical data
          (IP address, browser type, pages visited) via server logs.
        </p>
      </>
    ),
  },
  {
    heading: "3. How We Use Information",
    body: (
      <>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>To notify you when Nelio launches and manage your pilot signup</li>
          <li>To operate the review-request service once connected (sending requests, attributing reviews to techs)</li>
          <li>To respond to support requests sent to hello@nelioapp.com</li>
          <li>To improve and secure the product</li>
          <li>To meet legal obligations</li>
        </ul>
        <p className="mt-4">
          We do not use waitlist or job data to train third-party AI models,
          and we do not sell personal information.
        </p>
      </>
    ),
  },
  {
    heading: "4. How We Share Information",
    body: (
      <>
        <p>We share information only with:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>
            <span className="font-semibold text-ink">Jobber and Housecall Pro</span>, to read job-completion events for accounts you explicitly connect
          </li>
          <li>
            <span className="font-semibold text-ink">Service providers</span> we use to operate Nelio, such as our transactional email provider, under contracts that limit their use of your data to providing that service
          </li>
          <li>
            <span className="font-semibold text-ink">Authorities</span>, if required to comply with a legal obligation
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "5. Data Retention",
    body: (
      <>
        <p>
          We keep waitlist information until you ask us to delete it or
          until a reasonable period after general availability launches.
          Once connected, job and review data is retained only as long as
          your account is active, plus a limited period afterward for
          support and legal purposes.
        </p>
      </>
    ),
  },
  {
    heading: "6. Your Rights",
    body: (
      <>
        <p>
          You can ask us to access, correct, or delete the information we
          hold about you, or to remove yourself from the waitlist, at any
          time by emailing{" "}
          <a href="mailto:hello@nelioapp.com" className="font-semibold text-moss-800 underline">
            hello@nelioapp.com
          </a>
          . We will respond within a reasonable timeframe.
        </p>
      </>
    ),
  },
  {
    heading: "7. Security",
    body: (
      <>
        <p>
          We use industry-standard safeguards, including encryption in
          transit, to protect the information we hold. No method of
          transmission or storage is fully secure, so we cannot guarantee
          absolute security.
        </p>
      </>
    ),
  },
  {
    heading: "8. Children's Privacy",
    body: (
      <p>
        Nelio is a business tool intended for use by contractors and their
        staff. It is not directed at children, and we do not knowingly
        collect information from anyone under 16.
      </p>
    ),
  },
  {
    heading: "9. Changes to This Policy",
    body: (
      <p>
        We may update this policy as Nelio moves toward general
        availability. We will post the revised version here with an
        updated date, and for material changes, notify waitlisted users
        by email.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
        Legal
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm font-medium text-ink-muted">
        Last updated August 17, 2026
      </p>

      <div className="mt-10 space-y-9">
        {SECTIONS.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-lg font-bold text-ink sm:text-xl">
              {section.heading}
            </h2>
            <div className="mt-2.5 text-base leading-relaxed text-ink-muted [&_a]:break-words">
              {section.body}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 border-t border-paper-line pt-6 text-base leading-relaxed text-ink-muted">
        Questions about this policy? Email{" "}
        <a href="mailto:hello@nelioapp.com" className="font-semibold text-moss-800 underline">
          hello@nelioapp.com
        </a>
        .
      </p>
    </section>
  );
}
