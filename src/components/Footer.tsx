const Footer = () => {
  return (
    <footer className="footer footer-center p-4 text-sm text-base-content">
      <aside>
        <p>&copy; {new Date().getFullYear()} KB. All rights reserved.</p>
        <a
          href="https://www.flaticon.com/free-icons/subscription"
          title="subscription icons"
          className="hover:underline"
        >
          Subscription icons created by SBTS2018 - Flaticon
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
