import React, { useState } from 'react'
import NavigationDot from './NavigationDot';
import NewsCard from './NewsCard'
import style from './NewsStartSection.module.scss'

export default function NewsStartSection() {
  const [activePost, setActivePost] = useState(0);

  const arrObj = [
    {
      id: "hakhroit",
      title: "Nyhetstitel",
      text: "Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt ",
      date: "2020-11-22 15:30"
    },
    {
      id: "ao385y9f",
      title: "Hej och välkommen",
      text: "Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt ",
      date: "2020-11-22 15:30"
    },
    {
      id: "a289rfak",
      title: "Hejdå",
      text: "Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt ",
      date: "2020-11-22 15:30"
    },
    {
      id: "a289r35k",
      title: "Another one",
      text: "Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt ",
      date: "2020-11-22 15:30"
    },
    {
      id: "a289rffe",
      title: "YEEEAHH",
      text: "Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt Text från stallnytt ",
      date: "2020-11-22 15:30"
    }
  ];

  return (
    <section className={style.wrapper}>
      <div className={style.main}>
        <h2>Stallnytt</h2>
        <NewsCard
          obj={arrObj}
          activePost={activePost}
          setActivePost={setActivePost} />
        <div className={style.navigation_dots}>
          {Array.isArray(arrObj) && arrObj.map((post, index) => {
            if (index === activePost) {
              return <NavigationDot key={post.id} active={true} />
            }
            else {
              return <NavigationDot key={post.id} active={false} />
            }
          }
          )}
        </div>
      </div>
    </section>
  )
}
