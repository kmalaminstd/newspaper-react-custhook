/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewsCard({data}) {
  // console.log(data);
  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage = 10

  const navigate = useNavigate()

  const indexOfLastNews = currentPage * newsPerPage
  const indexofFirstNews = indexOfLastNews - newsPerPage
  const currenNews = data && data.articles.slice(indexofFirstNews, indexOfLastNews)
  

  const totalPages = data && Math.ceil(data.articles.length / newsPerPage)

  // console.log([...Array(totalPages)]);
  

  const showFullNews = (title)=>{
    navigate(`/news/${title}`)
  }

  const paginate = (pageNumber)=>{
    setCurrentPage(pageNumber)
  }
  
  return (
    <>
      {
        currenNews && currenNews.map((elm, i) => {
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

      <div className="paginationControl">
        <button onClick={()=>paginate(currentPage-1)}
          disabled={currentPage === 1}
          >
          Previous
        </button>

        {
          [...Array(totalPages)].map( (_, i) => {
            return(
              <button key={i+1} onClick={()=>paginate(i+1)} 
                className={currentPage == i + 1 ? "activePageBtn" : ""}
              >
                {i + 1}
              </button>
            )
          } )
        }

        <button onClick={()=>paginate(currentPage+1)}
          disabled={currentPage === totalPages}
          >
          Next
        </button>
      </div>
    </>
  )
}

export default NewsCard