import Link from "next/link";

export default function HomeCard({house}) {
    if (!house) return null;

  return (
    <Link style={{ backgroundImage: `url('${house.main_image}')` }} href={`casas/${house.slug}`} className={`h-[50vh] md:w-[33vw] rounded-sm cursor-pointer hover:scale-105 transition-all w-full relative bg-cover bg-center`}>
        <p className="text-white absolute bottom-15 left-10 font-semibold text-4xl">{house.title}</p>
    </Link>
  )
}
