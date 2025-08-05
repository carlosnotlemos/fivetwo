'use client'
import useCategoria from "@/hooks/useCategoria";
import CategoryItem from "./CategoryItem";

export default function CategoryNav() {
  const {categorias} = useCategoria()
  
  return (
    <nav className="overflow-x-auto px-4">
      <ul className="flex gap-6 sm:gap-7 py-7 mb-5 lg:mb-10 w-fit min-w-max mx-auto">
        {categorias.slice(0,6).map( categoria => (
          <li key={categoria.id}><CategoryItem categoria={categoria}/></li>
        ))}
      </ul>
    </nav>
  );
}

