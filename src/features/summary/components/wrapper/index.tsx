/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { local } from "../../../../utils";
import { gatherSummaryData } from "../../services";
import Section from "../section";
import { Container } from "./style";

interface Infos {
  title: string;
  methods: Methods[];
}
interface Methods {
  image: string;
  title: string;
  description: string;
  progress: number;
  id: string;
}

function Wrapper() {
  const [loading, setLoading] = React.useState(true);
  const [summary, setSummary] = React.useState<Infos[]>([]);

  React.useEffect(() => {
    async function gatherData() {
      const user = local.retrieve();
      const response = await gatherSummaryData(user.config);
      setSummary(response.data.list);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    gatherData();
  }, []);

  return (
    <Container>
      {loading && <h4>Loading</h4>}
      {!loading && (
        <>
          {summary.map((e: any) => (
            <Section title={e.title} methods={e.methods} key={e.id} />
          ))}
        </>
      )}
    </Container>
  );
}

export default Wrapper;
