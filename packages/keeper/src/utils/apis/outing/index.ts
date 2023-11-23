import { OutingApplyListType } from "../../../models/outing/response";
import instance from "../../axios";

interface OutingStudentList {
  outing: OutingApplyListType[];
}

export const getOutingStudentList = async () => {
  const outingStudentList = await instance.get<OutingStudentList>(
    `/pick/applications`
  );
  return outingStudentList;
};
