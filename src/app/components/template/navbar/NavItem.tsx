import Link from "next/link";

export interface NavItemProps {
  texto: string;
  url?: string;
  subitens?: { texto: string; url: string }[];
}

export default function NavItem({ texto, url = "#", subitens }: NavItemProps) {
  return (
    <div className="relative group">
      <Link
        href={url}
        className="text-white hover:text-indigo-300 text-sm font-medium px-4 py-2 inline-block transition"
      >
        {texto}
      </Link>

      {subitens && (
        <div className="absolute left-0 top-full mt-2 w-48 bg-white text-gray-800 rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
          <ul className="py-2">
            {subitens.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                >
                  {item.texto}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
