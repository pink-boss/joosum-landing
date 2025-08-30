import CompanyInfo from './FooterCompanyInfo';
import FooterLinks from './FooterLinks';

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <FooterLinks />
      <CompanyInfo />
    </footer>
  );
}
