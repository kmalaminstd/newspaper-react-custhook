/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";


function NewsCard({data}) {
  // console.log(data);

  const navigate = useNavigate()

  const showFullNews = (title)=>{
    navigate(`/news/${title}`)
  }
  
  return (
    <>
    {
      data && data.articles.map((elm, i) => {
        return(

          <>
            <div key={i} className="newsCard" onClick={()=>showFullNews(elm.title)}>
              <div className="newsCardImg">
                <img src={`${elm.urlToImage || "placeholder-photo.png"}`} alt="" />
              </div>
              <div className="newsCardTitle">
                <h2>{elm.title}</h2>
              </div>
            </div>
          </>

        )
      })
      
    }
    </>
  )
}

export default NewsCard