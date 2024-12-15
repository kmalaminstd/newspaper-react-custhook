import { useParams } from "react-router-dom"
import useAllNewsData from "../customHooks/allNews"
import { PuffLoader } from "react-spinners"


function NewsDetails() {

    const { title } = useParams()

    const apiKey = import.meta.env.NEWS_API

    const { data : topNewsHeading , loading : topNewsHeadingLoading } = useAllNewsData(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)

    const { data : breakingNews , loading : breakingNewsLoading } = useAllNewsData(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)

    const news = topNewsHeading && topNewsHeading.articles.find(elm => elm.title === title) || breakingNews && breakingNews.articles.find(elm => elm.title === title)
    console.log(news);

    const dateString = news && news.publishedAt;

    // Convert to a Date object
    const date = new Date(dateString);

    // Extract components
    const dayOfWeek = date.toLocaleString('default', { weekday: 'long' }); // Full weekday name
    const day = date.getDate(); // Numeric day
    const month = date.toLocaleString('default', { month: 'long' }); // Full month name
    const year = date.getFullYear();
    
    
  return (
    <>

        {
            topNewsHeadingLoading || breakingNewsLoading ? 

            <div className="loadingMetre">
                <PuffLoader color="rgba(91, 183, 68, 1)" />
            </div> :

            <div className="fullNews">

                <div className="newsImg">
                    <img src={`${ news && (news.urlToImage || "placeholder-photo.png")}`} alt="" />
                </div>


                <div className="newsTitle">
                    <h2>{news && news.title}</h2>
                </div>

                <div className="publishDate">
                    <p><i>{dayOfWeek + " , " + day + " " + month + " " + year}</i></p>
                </div>

                <div className="newsContent">
                    <p>{news && news.description}</p>
                </div>

            </div> 
        }

    </>
  )
}

export default NewsDetails