import React from "react";

import Section from "elements/Section";

import Client01 from "assets/images/clients-01.svg";
import Client02 from "assets/images/clients-02.svg";
import Client03 from "assets/images/clients-03.svg";
import Client04 from "assets/images/clients-04.svg";
import Client05 from "assets/images/clients-05.svg";

export default function Clients() {
  const clients = [Client01, Client02, Client03, Client04, Client05];

  return (
    <Section className="clients" aos="zoom-in">
      <div className="container">
        <div className="clients-inner section-inner has-top-divider has-bottom-divider">
          <ul className="list-reset">
            {clients.map((client, index) => (
              <li key={index}>
                <img src={client} alt={`Clients 0${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
