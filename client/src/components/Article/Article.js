import React from "react";
import { ListItem } from "../List";

const Article = ({ title, url, _id, date, handleClick, buttonText, saved }) => (
  <ListItem>
    <h3>
      <em>{title}</em>{" "}
      <span className="btn-group pull-right">
        <a className="btn btn-default" href={url} rel="noopener noreferrer" target="_blank">
          View Article
        </a>
      </span>
    </h3>
  </ListItem>
);

export default Article;
