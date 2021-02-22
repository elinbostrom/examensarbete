import React, { useState } from "react";
import NavigationDot from "../NavigationDot";
import NewsCard from "./NewsCard";
import style from "./NewsStartSection.module.scss";

export default function NewsStartSection({ data }) {
  const [activePost, setActivePost] = useState(0);
  const posts = data ?? null;

  return (
    <section className={style.wrapper}>
      <div className={style.main}>
        <h2>Stallnytt</h2>
        <NewsCard obj={posts} activePost={activePost} setActivePost={setActivePost} />
        <div className={style.navigation_dots}>
          {Array.isArray(posts) &&
            posts.map((post, index) => {
              if (index === activePost) {
                return <NavigationDot key={post.id} active={true} />;
              } else {
                return <NavigationDot key={post.id} active={false} />;
              }
            })}
        </div>
      </div>
    </section>
  );
}
