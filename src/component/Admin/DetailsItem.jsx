import React from "react";

const Item = ({ label, children }) => (
  <>
    <dt className="font-medium text-gray-800">{label}</dt>
    <dd>{children}</dd>
  </>
);

export default Item;
