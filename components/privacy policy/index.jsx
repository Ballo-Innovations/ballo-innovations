// pages/privacy-policy.tsx

import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Ballo Innovations</title>
        <meta
          name="description"
          content="Privacy Policy for Ballo Innovations. We do not collect personal data on this site. Read our policy to understand how we handle third-party API integrations."
        />
      </Head>

      <main className="px-5 py-10 text-white blue-black-bg-grandient">
        <h1 className="text-3xl font-bold mb-6 px-5 md:px-[10rem] mt-[12rem]">
          Privacy Policy
        </h1>

        <div className="bg-white h-[1px] w-[80%] mb-[2rem] mx-5 md:mx-[10rem]" />
        <section className="mb-8 px-5 md:px-[10rem]">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Ballo Innovations Limited respects your privacy. This Privacy Policy
            explains how we handle personal data. Our website{" "}
            <a
              href="https://www.balloinnovations.com"
              className="text-blue-400 underline"
            >
              https://www.balloinnovations.com
            </a>{" "}
            is intended for informational purposes only.
          </p>
        </section>

        <section className="mb-8 px-5 md:px-[10rem]">
          <h2 className="text-xl font-semibold mb-2">
            2. No Personal Data Collected
          </h2>
          <p>
            We do <strong>not</strong> collect, store, or process any personal
            information through this website. There are no contact forms,
            cookies, user accounts, or tracking technologies in use at this
            time.
          </p>
        </section>

        <section className="mb-8 px-5 md:px-[10rem]">
          <h2 className="text-xl font-semibold mb-2">
            3. Use of External APIs and Services
          </h2>
          <p>
            We may develop applications that interact with third-party platforms
            or APIs (such as social media or analytics providers). Any data
            accessed through such integrations is:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Accessed only with proper user authorization and consent.</li>
            <li>
              Used solely for the purpose described during the authorization
              process.
            </li>
            <li>
              Never stored, shared, or sold unless explicitly required for the
              functionality you opt into.
            </li>
            <li>
              Handled in full compliance with the third-party platform’s
              policies and data protection regulations such as GDPR and CCPA.
            </li>
          </ul>
          <p className="mt-2">
            If you use a service we build that integrates with a third-party
            API, you will be clearly informed about what data is being accessed
            and how it will be used.
          </p>
        </section>

        <section className="mb-8 px-5 md:px-[10rem]">
          <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
          <p>
            We do not share any user data with third parties because we do not
            collect any data on this site. Any data accessed via authorized
            external integrations is used only as needed for that functionality
            and never disclosed to unauthorized parties.
          </p>
        </section>

        <section className="mb-8 px-5 md:px-[10rem]">
          <h2 className="text-xl font-semibold mb-2">5. Policy Updates</h2>
          <p>
            We may update this Privacy Policy in the future to reflect changes
            in our services, API integrations, or legal requirements. Any
            updates will be posted on this page with a revised effective date.
          </p>
        </section>

        <section className="mb-8 px-5 md:px-[10rem]">
          <h2 className="text-xl font-semibold mb-2">6. Contact Information</h2>
          <p>
            For questions about this Privacy Policy or our data handling
            practices, you may contact us:
          </p>
          <ul className="mt-2">
            <li>Ballo Innovations Limited</li>
            <li>Lusaka, Zambia</li>
            <li>Email: info@balloinnovations.com</li>
            <li>Website: https://www.balloinnovations.com</li>
          </ul>
        </section>
      </main>
    </>
  );
}
