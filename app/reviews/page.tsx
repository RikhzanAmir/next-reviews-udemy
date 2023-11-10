import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
export const metadata = { //for seo 
    title : "Review", 
} 
export default async function ReviewsPage() {
    const reviews = await getReviews();   
    return (<>
        <Heading>Reviews </Heading>
        <nav>
            <ul className="flex flex-row flex-wrap gap-3">
                {reviews.map((review) => (
                    <li key={review.slug} 
                    className="border rounded w-80 bg-white hover:shadow-xl">
                    <Link href={`/reviews/${review.slug}/`}>
                        <img src={review.image} alt=""
                            width={320} height={180} className="rounded-lg shadow-lg mb-2"
                        />
                        <h2 className="py-1 text-center font-orbitron font-semibold">{review.title}</h2></Link>
                </li> 
                ))}
                
                 
            </ul>
        </nav>

    </>

    )
}