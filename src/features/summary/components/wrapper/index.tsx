import React from "react";

import Section from "../section";
import { Container } from "./style";

function Wrapper() {
  const infos = [
    {
      title: "This is a title",
      issues: [
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
      ],
    },
    {
      title: "This is a title",
      issues: [
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
      ],
    },
    {
      title: "This is a title",
      issues: [
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
        {
          image:
            "https://files.driven.com.br/images/algorithm-1-18c72d27-74a2e45e.svg",
          title: "Introdução à Programação",
          description: "Domine os fundamentos da construção de algoritmos",
        },
      ],
    },
  ];
  return (
    <Container>
      {infos.map((e) => (
        <Section title={e.title} issues={e.issues} />
      ))}
    </Container>
  );
}

export default Wrapper;
