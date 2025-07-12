import React from "react";
import Card from "./Card";

const ContactCard = ({ title, type, value }) => (
  <Card title={title}>
    <dl className="text-sm text-gray-600">
      <dt className="font-medium text-gray-800">{type}</dt>
      <dd className="truncate">{value}</dd>
    </dl>
  </Card>
);

export default ContactCard;
