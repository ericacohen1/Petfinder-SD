import React from "react";
import { ListItem } from "../List";

const Article = ({ title, url, _id, date, handleClick, buttonText, saved }) => (
  <ListItem>
    <h3>
      <em>{title}</em>{" "}
      <span className="btn-group">
      {/* fix pull right */}
        <a className="btn btn-default pull-right" href={url} rel="noopener noreferrer" target="_blank">
          View Article
        </a>
      </span>
    </h3>
  </ListItem>
);

export default Article;
