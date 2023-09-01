
import React from "react"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
console.log(data)
  const book = data.file.childrenJson
    return (
    <div>
      {book.map(e => (
        <div>
          <h2>{e.Title}</h2>
          <img src={e.ImageURL}></img>
          <p>価格：{e.Price}円、ポイント：{e.Points}</p>
          <p>{e.Contributor}、出版社：{e.Publisher}</p>
          <p>カテゴリー：{e.Category}</p>
        </div>
      ))}
    </div>
    )
}


export  const query = graphql`
query MyQuery($slug: String!)  {
  file(fields: {slug: { eq: $slug } }) {
    childrenJson {
      Asin
      Booktype
      Category
      Contributor
      ImageURL
      Points
      Price
      Publisher
      Title
      URL
    }
  }
}`