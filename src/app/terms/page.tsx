import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Nelio.",
  alternates: {
    canonical: "/terms",
  },
};

const SECTIONS = [
  {
    heading: "1. Acceptance of Terms",
    body: (
      <p>
        By joining Nelio&apos;s waitlist or using Nelio&apos;s review
        management software, you agree to these Terms of Service. If you
        are using Nelio on behalf of a business, you confirm you have the
        authority to bind that business to these terms.
      </p>
    ),
  },
  {
    heading: "2. What Nelio Is",
    body: (
      <p>
        Nelio is review management software for HVAC, plumbing, and
        electrical contractors. Once connected to your Jobber or Housecall
        Pro account, Nelio sends a review request when a job is marked
        complete and attributes the review that results to the technician
        who completed the job. Nelio is not yet generally available; joining
        the waitlist reserves your place for a free 30-day pilot when it
        launches.
      </p>
    ),
  },
  {
    heading: "3. Eligibility & Waitlist",
    body: (
      <p>
        You must be at least 18 years old and able to enter into a binding
        contract to join the waitlist. Joining the waitlist does not
        guarantee access to the pilot or to any specific launch date, and
        we may prioritize or limit signups at our discretion.
      </p>
    ),
  },
  {
    heading: "4. Your Responsibilities",
    body: (
      <>
        <p>When you connect a Jobber or Housecall Pro account, you agree to:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Only submit information you have the right to submit, including customer contact details used for review requests</li>
          <li>Comply with applicable law, including consent and messaging requirements (such as TCPA and CAN-SPAM) for any customer you contact through Nelio</li>
          <li>Not use Nelio to send unsolicited messages to anyone who has not consented to be contacted</li>
          <li>Not attempt to gate, filter, or selectively suppress review requests based on expected outcome</li>
        </ul>
      </>
    ),
  },
  {
    heading: "5. Third-Party Integrations",
    body: (
      <p>
        Nelio&apos;s core functionality depends on your connected Jobber or
        Housecall Pro account and on the review platforms your customers
        are directed to. We are not responsible for outages, API changes,
        or policy changes made by these third parties, though we will make
        reasonable efforts to keep the integration working.
      </p>
    ),
  },
  {
    heading: "6. Fees",
    body: (
      <p>
        The pilot described on this site is free for 30 days from your
        first connected job, with no credit card required. Pricing after
        the pilot period will be communicated before any charge applies,
        and we will never bill you without clear advance notice.
      </p>
    ),
  },
  {
    heading: "7. Intellectual Property",
    body: (
      <p>
        Nelio and its logo, product, and content are owned by us or our
        licensors. These terms do not grant you any rights to our
        trademarks or branding beyond what is necessary to use the
        service as intended.
      </p>
    ),
  },
  {
    heading: "8. Disclaimers",
    body: (
      <p>
        Nelio is provided &quot;as is&quot; during this pre-launch and pilot
        stage, without warranties of any kind, express or implied,
        including fitness for a particular purpose or uninterrupted
        availability.
      </p>
    ),
  },
  {
    heading: "9. Limitation of Liability",
    body: (
      <p>
        To the fullest extent permitted by law, Nelio will not be liable
        for indirect, incidental, or consequential damages arising from
        your use of the service. Our total liability for any claim will
        not exceed the amount you paid us in the preceding 12 months, or
        $100 if you have not paid us anything.
      </p>
    ),
  },
  {
    heading: "10. Termination",
    body: (
      <p>
        You may stop using Nelio and disconnect your integration at any
        time. We may suspend or terminate access for violation of these
        terms, misuse of customer contact data, or abuse of the service.
      </p>
    ),
  },
  {
    heading: "11. Changes to These Terms",
    body: (
      <p>
        We may update these terms as Nelio moves toward general
        availability. We will post the revised version here with an
        updated date, and for material changes, notify waitlisted users
        by email.
      </p>
    ),
  },
  {
    heading: "12. Governing Law",
    body: (
      <p>
        These terms are governed by the laws of the United States and the
        state in which Nelio is incorporated, without regard to conflict
        of law principles.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-muted">
        Legal
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
        Terms of Service
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
        Questions about these terms? Email{" "}
        <a href="mailto:hello@nelioapp.com" className="font-semibold text-moss-800 underline">
          hello@nelioapp.com
        </a>
        .
      </p>
    </section>
  );
}
