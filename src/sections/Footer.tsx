import ArrowUpRightIcon from "@assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/farhan-haider-56b773244/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3B1QvJVUU2RDy0%2Ffx4lJq5Bg%3D%3D',
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100012806988697',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/farhanhaider999/',
  },
  {
    title: 'Github',
    href: 'https://github.com/FarhanHaider999',
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Move the background layer to a proper z-index */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-amber-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All Rights Reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map(link => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
