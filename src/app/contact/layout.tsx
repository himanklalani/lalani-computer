import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.lalanicomputers.com/contact' },
  title: 'Contact Us | Request an IT Quote',
  description: 'Get in touch with Lalani Computers for custom IT hardware quotes, bulk corporate orders, turnkey networking setups, and AMC support.',
  openGraph: {
    title: 'Contact Us | Request an IT Quote',
    description: 'Get in touch with Lalani Computers for custom IT hardware quotes, bulk corporate orders, turnkey networking setups, and AMC support.',
    url: 'https://www.lalanicomputers.com/contact',
    siteName: 'Lalani Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Request an IT Quote',
    description: 'Get in touch with Lalani Computers for custom IT hardware quotes, bulk corporate orders, turnkey networking setups, and AMC support.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
