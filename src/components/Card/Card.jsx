import React from "react";

const Card = ({ news }) => {
  const { updated, title, abstract, media } = news;
  const mediaMetaData = media?.[0]?.["media-metadata"] || [];
  const mediaURL = mediaMetaData?.[0]?.url;
  const mediaCaption = media?.[0]?.caption || "Media src";

  return (
    <div>
      <div className="news-card | grid gap-30">
        <div className="new-card-date">{updated}</div>
        <article className="grid gap-40">
          <div className="news-card-content">
            <h3>{title}</h3>
            <p>{abstract}</p>
          </div>
          <div className="news-card-media">
            {mediaURL ? <img src={mediaURL} alt={mediaCaption} /> : "No media"}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card;
