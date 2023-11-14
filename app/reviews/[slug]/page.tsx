
import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButton"; 
import { getReview, getSlugs } from "@/lib/reviews";

// q: what is the purpose of this function?
// a: it generates the static paths for the dynamic pages
export async function generateStaticParams() {
    const slugs = await getSlugs()
    return slugs.map((slug) => ({slug}))
 
}

export async function generateMetadata({params: {slug}}){
    // console.log('generateMetadata', props)
    const review = await getReview(slug)
    return {
        title: review.title
    }
}

export default async function ReviewPage({params: {slug}}) {
    console.log(slug);
    const review = await getReview(slug);
    console.log('[ReviewPage] rendering', slug);
    return ( <>
        <Heading>{review.title}</Heading>
        <div className="flex gap-3 items-baseline">
        <div className="flex gap-3"></div>
        <p className='italic pb-2 px-2'>{review.date}</p>
        <ShareButtons/></div>
        <img src={ review.image } alt="" 
            width={640} height={360} className="rounded-lg shadow-lg mb-2"
        />
        <article dangerouslySetInnerHTML={{ __html:review.body}} 
        className='max-w-screen-sm prose prose-slate'
        />  
        
    </>
        
    )
}