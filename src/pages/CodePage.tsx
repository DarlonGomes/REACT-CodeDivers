import React from "react";

import {
  CodeEditor,
  QuestionStatement,
  CodeHeader,
  NavBar,
} from "../features/code_challenge/components";
import { Ambient, Box } from "../layouts";

function CodePage() {
  const statement = {
    title: "This supposed to be a exercise title",
    paragraphs: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia commodo sem non feugiat. Duis quis porta orci, eu ornare orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed mattis nisl. Integer id malesuada enim. Fusce id semper ligula. Nunc vulputate urna ac nisl ornare, vel porttitor magna interdum. Fusce condimentum aliquet mauris non imperdiet. Phasellus in ligula posuere, porttitor nisi ut, tincidunt est. Duis tempor urna fermentum sapien gravida placerat. Aliquam nec aliquam elit.",
      },
      {
        text: "Nullam urna magna, molestie quis arcu at, commodo euismod neque. Etiam ac placerat risus. Fusce enim elit, tristique ut nunc ut, molestie faucibus dolor. Praesent quam urna, rutrum non malesuada condimentum, eleifend et nunc. Mauris volutpat metus eget nunc fermentum, sit amet vehicula nunc molestie. Proin lectus nunc, porttitor quis velit vel, viverra posuere lorem. Donec id suscipit risus, a maximus nibh. Etiam a neque sapien. Duis pretium est sed sem luctus dictum. Vivamus ex nibh, pellentesque quis interdum sit amet, consequat eu neque. Fusce tempus leo non quam fringilla accumsan. Etiam ullamcorper eget magna euismod tristique. Praesent sagittis enim non mauris efficitur faucibus.      ",
      },
      {
        text: "Sed porttitor bibendum libero. Praesent vel enim laoreet, dictum felis eget, pretium velit. In efficitur sagittis hendrerit. Nullam ullamcorper aliquam risus sit amet auctor. Mauris sit amet rutrum leo. Fusce nec aliquam arcu, eu tincidunt mi. Etiam fringilla risus sit amet risus consequat commodo. Quisque finibus dapibus tortor, vel mollis neque pharetra non. Donec pulvinar nunc leo, at facilisis arcu cursus quis. Fusce eu nibh vitae mauris ullamcorper condimentum. Mauris luctus tortor ac lorem euismod, sed laoreet est aliquam. Ut sit amet gravida sem, ac varius urna. Praesent vestibulum ligula id lorem pretium blandit. Pellentesque mauris felis, elementum quis nisi ut, pharetra vehicula purus. Vivamus mi nunc, bibendum non turpis et, consectetur placerat enim. Etiam in lectus a neque tristique malesuada ullamcorper eget libero.",
      },
      {
        text: "Donec eu cursus purus, eget auctor mi. Donec rhoncus varius molestie. Nullam eget nunc eget justo suscipit congue nec sed nisi. Sed a fringilla est, vel malesuada libero. Vivamus interdum gravida ante, consectetur lacinia justo viverra nec. Pellentesque sed lorem eget enim semper mattis. Sed tincidunt tortor et diam semper, non tincidunt ipsum aliquam. Nunc aliquet volutpat bibendum. Phasellus malesuada, eros eget rutrum vestibulum, odio ipsum faucibus libero, sed vulputate orci odio a metus. Suspendisse et massa eget nisi egestas venenatis sed a nibh. Cras vel lectus justo. Vivamus nec euismod nibh. Mauris ut mollis diam, id laoreet nunc. Duis felis enim, maximus a sem a, tempor scelerisque ante. Phasellus vitae ipsum quis enim varius tincidunt in quis dolor. Ut posuere quam eu justo ultrices, non aliquet sapien lobortis.",
      },
      {
        text: "Praesent viverra est in tortor ultricies, eu ornare nunc hendrerit. Mauris sit amet ullamcorper magna, vitae euismod ligula. Vivamus lacus neque, tempus rutrum laoreet in, ornare quis libero. Nulla at diam consectetur, hendrerit sem nec, luctus mi. Aliquam quis gravida ex. Duis bibendum nulla neque, sed scelerisque nisl tincidunt vitae. Nam lacinia auctor urna, sed lobortis quam consectetur eu. Aenean sodales, risus a efficitur iaculis, leo sem vulputate metus, non rutrum nibh leo ut lorem. Nulla pulvinar sem porttitor, lacinia elit id, rhoncus neque. Nam pretium dignissim orci, ut volutpat arcu. Proin malesuada id magna ut pretium. Maecenas convallis sollicitudin nisl et congue. Phasellus faucibus tincidunt porttitor. Integer pulvinar eros eget malesuada eleifend. Suspendisse non erat nec elit auctor gravida a et lacus.      ",
      },
    ],
  };

  const solution = {
    code: `function modaTetragrama(str) {
      const tetragramas = [];
      for (let i = 0; i < str.length - 3; i++) {
        const tetragrama = str.slice(i, i + 4);
        tetragramas.push(tetragrama);
      }
      const hashtable = {};
      for (let i = 0; i < tetragramas.length; i++) {
        const tetragrama = tetragramas[i];
        if (!hashtable.hasOwnProperty(tetragrama)) {
          hashtable[tetragrama] = 0;
        }
        hashtable[tetragrama]++;
      }
      let contagemResposta = 0;
      let resposta = "";
      Object.keys(hashtable).forEach((tetragrama) => {
        if (
          hashtable[tetragrama] > contagemResposta ||
          (hashtable[tetragrama] === contagemResposta && tetragrama > resposta)
        ) {
          resposta = tetragrama;
          contagemResposta = hashtable[tetragrama];
        }
      });
      return resposta;
    }`,
  };
  return (
    <Ambient>
      <CodeHeader />
      <Box>
        <QuestionStatement
          title={statement.title}
          paragraphs={statement.paragraphs}
        />
        <CodeEditor solution={solution} />
      </Box>
      <NavBar />
    </Ambient>
  );
}

export default CodePage;
