import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ReferInfo({ id, title, desc, category, property, element, version }) {
  return (
    <li>
      <Link
        to={{
          pathname: "/reference-detail",
          state: { id, title, desc, category, property, element, version },
        }}
      >
        <span className="alpha">{id}</span>
        <span className="attr">{title}</span>
        <span className="desc">{desc}</span>
      </Link>
    </li>
  );
}
ReferInfo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default ReferInfo;