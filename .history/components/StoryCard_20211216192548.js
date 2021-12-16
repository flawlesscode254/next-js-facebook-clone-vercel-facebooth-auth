import Image from "next/image"

function StoryCard({ name, src, profile }) {
    return (
        <div>
            <Image 
                className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
                src={profile}
                layout="fixed"
                objectFit="cover"
                width={}
            />
        </div>
    )
}

export default StoryCard
