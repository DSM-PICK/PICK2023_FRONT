import { useQuery } from "react-query";
import { useState } from "react";
import { getOutingStudentList } from "../../utils/apis/outing";
import OutList from "../../components/outing";

const MainPage = () => {
  const { data: outing } = useQuery(["outing"], () => getOutingStudentList());

  return <OutList outing={outing?.data.outing || []} />;
};

export default MainPage;
