import Link from "next/link";
import NextLink from "next/link";
type NavLinksProps = {
  mobile?: boolean;
  closeMenu?: () => void; // Function to close the menu
};

const NavLinks: React.FC<NavLinksProps> = ({ mobile, closeMenu }) => {
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/shop", text: "Shop" },
    { href: "/faq", text: "FAQ" },
    {
      text: "Services", // Dropdown for "Services"
      subLinks: [
        { href: "/workshop", text: "Workshops" },
        { href: "/investors", text: "Investors" },
        { href: "/bulk", text: "Bulk Orders" },
        { href: "/recipes", text: "Recipes" },
      ],
    },
    { href: "/contact-us", text: "Contact Us" },
  ];

  const handleLinkClick = () => {
    if (mobile && closeMenu) {
      closeMenu();
    }
  };

  return (
    <ul
      className={`${
        mobile
          ? "flex flex-col space-y-4 items-center"
          : "flex space-x-4 items-center"
      } ${mobile ? "md:hidden sm:hidden" : "md:flex sm:flex"}`}
      onClick={handleLinkClick}
    >
      {navLinks.map((link) => (
        <NavItems
          key={link.href || link.text} // Use href or text as the key
          href={link.href}
          text={link.text}
          subLinks={link.subLinks}
          mobile={mobile}
          closeMenu={closeMenu}
        />
      ))}
    </ul>
  );
};

export default NavLinks;

type NavItemsProps = {
  href?: string;
  text: string;
  subLinks?: { href: string; text: string }[];
  mobile?: boolean;
  closeMenu?: () => void; // Function to close the menu
};

const NavItems: React.FC<NavItemsProps> = ({
  href,
  text,
  subLinks,
  mobile,
  closeMenu,
}) => {
  const handleClick = () => {
    if (mobile && closeMenu) {
      closeMenu();
    }
  };

  return (
    <li>
      {subLinks ? (
        // If subLinks exist, render a dropdown menu
        <div className="relative group">
          <div
            className={`text-dark font-bold hover:text-orange-600 transition duration-300 cursor-pointer ${
              mobile ? "text-center" : ""
            }`}
            onClick={handleClick}
          >
            {text}
          </div>
          <ul
            className="hidden absolute z-10 space-y-2 bg-white rounded-lg p-2 group-hover:block"
            style={{ top: "100%" }}
          >
            {subLinks.map((subLink) => (
              <li key={subLink.href}>
                <Link href={subLink.href}>
                  <div
                    className="text-dark hover:text-orange-600"
                    onClick={handleClick}
                  >
                    {subLink.text}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // If no subLinks, render a regular link
        <div
          className={`text-dark font-bold hover:text-orange-600 transition duration-300 ${
            mobile ? "text-center" : ""
          }`}
          onClick={handleClick}
        >
          {href && (
            <NextLink href={href}>
              <div>{text}</div>
            </NextLink>
          )}
        </div>
      )}
    </li>
  );
};
