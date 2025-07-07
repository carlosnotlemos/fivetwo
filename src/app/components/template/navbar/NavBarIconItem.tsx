import Link from "next/link"

export interface NavBarIconItemProps {
  texto: string
  url: string
  imageUrl: string
}

export default function NavBarIconItem(props: NavBarIconItemProps){
  return (
    <Link href={props.url} className="flex flex-col items-center gap-1 text-center group">
      <div className="p-[3px] rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 hover:scale-105 transition-transform duration-200">
        <div className="w-[50px] h-[50px] sm:w-[112px] sm:h-[112px] rounded-full bg-white overflow-hidden">
          <img 
            src={props.imageUrl}
            alt={props.texto}
            width={80}
            height={80}
            className="w-full h-full object-cover group-hover:opacity-75"
          />
        </div>
      </div>
      <span className="text-center text-sm group-hover:font-semibold ">{props.texto}</span>
    </Link>
  )
}