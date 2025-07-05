import Link from "next/link"

export interface NavBarIconItemProps {
  texto: string
  url: string
  imageUrl: string
}

export default function NavBarIconItem(props: NavBarIconItemProps){
  return (
    <Link href={props.url} className="flex flex-col items-center gap-1 text-center group">
      <div className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] rounded-full 
                      overflow-hidden bg-gray-100 shrink-0 hover:scale-105 transition-transform duration-200">
        <img 
          src={props.imageUrl}
          alt={props.texto}
          width={80}
          height={80}
          className="w-full h-full object-cover group-hover:opacity-75"
        />
      </div>
      <span className="text-center text-sm group-hover:font-semibold ">{props.texto}</span>
    </Link>
  )
}