import React from "react";

import { useQuery } from "../../../../hooks";
import { ContentWrapperDinamic } from "../../../../layouts";
import { local } from "../../../../utils";
import { gatherMethodData } from "../../services";
import { SideBar, Menu, NavBar } from "../index";

interface Challenge {
  id: string;
  title: string;
}

export default function AssembledPage() {
  const query = useQuery();
  const [page, setPage] = React.useState<string>("");
  const [topics, setTopics] = React.useState([]);
  const [challenges, setChallenges] = React.useState<Challenge[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function gatherData() {
      const user = local.retrieve();
      const id = query.get("id");
      const response = await gatherMethodData(id, user.config);
      setPage(response.data.list[0].description);
      setTopics(response.data.list[0].topics);

      console.log(response.data.list[0].topics);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    gatherData();
  }, []);
  console.log(challenges);
  return (
    <>
      <NavBar />
      <ContentWrapperDinamic>
        <SideBar
          title={page}
          topics={topics}
          setChallenges={setChallenges}
          loading={loading}
        />
        <Menu challenges={challenges} loading={loading} />
      </ContentWrapperDinamic>
    </>
  );
}
