const SECTIONS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Tools", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-40 bg-paper/85 backdrop-blur-sm border-b border-rule"
    >
      <ul className="flex items-center gap-6 px-6 md:px-12 lg:px-20 py-3 overflow-x-auto">
        {SECTIONS.map(({ label, href }) => (
          <li key={href}>
            <a href={href} className="link-rule caption hover:text-ink">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
