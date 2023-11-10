import Heading from "@/components/Heading"
import { getReviews } from "@/lib/reviews" 
import Link from "next/link"



export default async function HomePage() {
    const reviews = await getReviews(); 
    return (
        <>
            <Heading>Indie Gamer</Heading> 
            <p className="pb-3">
                Only the best indie games, reviewed for you.
            </p>

            <ul className="border bg-white hover:shadow-xl w-80 sm:w-full">
            {reviews.map((review) => (
                <li key={review.slug}>
                    <Link href={`/reviews/${review.slug}/`} className="flex flex-col sm:flex-row">
                    <img src={review.image} alt=""
                        width={320} height={180} 
                        className="rounded-t sm:rounded-l sm:rounded-r-none"
                    />
                    <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">
                        {review.title} <br/>
                    </h2>
                </Link>
                </li>
                ))}
            </ul>
            
            

        </>
 
    )
}