// src/pages/index.js
import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/">トップページへ</Link>
    <Header headerText="ページが見つかりません" />
    <p>404 Not Found</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)