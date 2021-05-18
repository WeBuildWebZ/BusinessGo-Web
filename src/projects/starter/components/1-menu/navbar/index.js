import Link from "next/link";

const Navbar = ({ links }) => (
  <div className="navbar">
    {links.map(({ text, href }, i) => (
      <Link href={href}>
        <a>{text}</a>
      </Link>
    ))}
    <style jsx>
      {`
        .navbar {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          margin: 0 1em;
          color: white;
          font-weight: bold;
          font-size: 1.5em;
        }
        // ================================================

        @media (max-width: 1080px) {
          .navbar {
            display: none;
          }
        }
      `}
    </style>
  </div>
);

export default Navbar;
