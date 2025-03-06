import React from 'react'
import "./SearchPage.css"
import Card from './Card';

const cards =[
  {
    title : "Invitation",
    text : "You are invited",
  },
  {
    title : "Notice",
    text : "Please have a look on it",
  },

] 





const SearchPage = () => {
  return (
    <div className='search-page'> 
      <header>Logo</header>
      <main>
        <h2>Search Here...</h2>
        <input />
        <button>search</button>
        <div>
          <div>
           {
             cards.map((ele)=>{
              return (
                <Card key={ele.title} title={ele.title} text={ele.text}></Card>
              )
            })
           }
          </div>
          {/* <div>
            <h2>{cards[1].title}</h2>
            <label>{cards[1].text}</label>
          </div> */}
        </div>
      </main>
    </div>
  )
}

export default SearchPage
