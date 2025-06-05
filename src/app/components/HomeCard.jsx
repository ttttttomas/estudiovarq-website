import Link from "next/link";

export default function HomeCard({house}) {
  return (
    <Link style={{ backgroundImage: `url('${house.images[0]}')` }} href={`casas/${house.id}`} className={`h-[50vh] md:w-[33vw] rounded-sm cursor-pointer hover:scale-105 transition-all w-full relative bg-cover bg-center`}>
        <p className="text-white absolute bottom-15 left-10 font-semibold text-4xl">{house.title}</p>
    </Link>
  )
}
