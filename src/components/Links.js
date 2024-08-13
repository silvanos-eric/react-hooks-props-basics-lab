import React from "react";

function Links(props) {
  console.log(props);
  return (
    <>
      <h3>Links</h3>
      <a href={props.links}>{props.github}</a>
      <a href={props.links}>{props.linkedin}</a>
    </>
  );
}

export default Links;
