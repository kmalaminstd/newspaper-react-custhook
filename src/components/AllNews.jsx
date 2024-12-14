
import { lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import useAllNewsData from '../customHooks/allNews'
import { HashLoader } from 'react-spinners';
const NewsCard = lazy(()=> import('./NewsCard'))

function AllNews() {

  const navigate = useNavigate()

    const apiKey = import.meta.env.VITE_NEWS_API

    const { data : topNewsHeading, loading : topNewsHeadingLoading } = useAllNewsData(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)

    const { data : breakingNews, loading : breakingNewsLoading } = useAllNewsData(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
    
    // console.log(breakingNews);

    const newsRedirect = (title)=>{
      navigate(`/news/${title}`)
    }
    
    
  return (
    <>

      {
        topNewsHeadingLoading || breakingNewsLoading ?
        <div className="loadingMetre">
          <HashLoader color="rgba(91, 183, 68, 1)" />
        </div>
         : 
      
        <> 

          <div className="topHeading">
            <marquee direction="">
              {
                topNewsHeading && topNewsHeading.articles.map((elm, i)=>{
                  return(
                  <span key={i} onClick={()=>newsRedirect(elm.title)}>
                    {elm.title + " | "}
                  </span>
                    
                  )
                })
              }
            </marquee>
          </div>
          <div className="displayNewsCard">
            { breakingNews && <NewsCard data={breakingNews} />}
          </div>
        </>
      }
    </>
  )
}

export default AllNews