
import React from "react"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
console.log(data)
var book = data.file.childrenJson
var image_m
var image_s
for (let i = 0; i < book.length; i++) {
image_m=book[i].ImageURL.replace(/_SL500_/, '_SL160_');
image_s=book[i].ImageURL.replace(/_SL500_/, '_SL75_');
book[i].image_m=image_m;
book[i].image_s=image_s;
}
    return (
    <div>
      {book.map(e => (
     <div key={e.Asin}>
        <a className="amazon-card-container" href={e.URL}>
          <div className="amazon-card-body">
            <div className="amazon-card-title">{e.Title}</div>
            <div className="amazon-card-domain">価格：{e.Price}円、ポイント：{e.Points}、{e.Contributor}、出版社：{e.Publisher}、カテゴリー：{e.Category}</div>
          </div>
          <div className="amazon-card-image-container">
          <img className="amazon-card-image"
           srcSet={`${e.image_s} 320w, ${e.image_m} 640w, ${e.ImageURL} `}
     src={e.image_s}
     sizes="(max-width:1280px) 50vw, 1280px"
      loading="lazy" alt={e.Title}/>
          </div>
        </a>
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