import { FooterCompanyInfo, FooterLinks } from './components';

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <FooterLinks />
      <FooterCompanyInfo />
    </footer>
  );
}
