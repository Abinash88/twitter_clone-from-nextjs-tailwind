
const News = ({ article }) => {
    return (
        <a href={article.url} target='_blank'>
            <div className="my-1 flex items-center justify-center px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
                <div className="space-y-0.5 ">
                    <h6 className="text-sm font-bold">{article.title}</h6>
                    <p className="text-xs pt-2 font-medium text-gray-500">{article.source.name}</p>

                </div>
                <img className=" rounded-lg" width='70' src={article.urlToImage} alt="" />
            </div>
        </a>
    )

}

export default News