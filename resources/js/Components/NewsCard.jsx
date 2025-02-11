export default function NewsCard({  image, title, date, description, link }) {
    return (
        <>
            <div className="max-w-sm bg-white  overflow-hidden">
                <img className=" w-full  object-cover" src={image || 'images.jpg'} alt={title} />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{title || "Lorem Ipsum Dolor Sit Amet"}</h3>
                    <p className="text-sm text-gray-500">{date || "10-12-2023"}</p>
                    <p className="mt-2 text-gray-700 text-sm line-clamp-3 text-justify">{description || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, asperiores laudantium accusantium fugiat ducimus, sed quia aspernatur sit tenetur voluptatem ex non nesciunt in temporibus nisi. Quas delectus quis suscipit!"}</p>
                    <a href={link} className="mt-2 text-blue-500 font-semibold inline-block">Baca Selengkapnya &gt;&gt;</a>
                </div>
            </div>
        </>
    )
}