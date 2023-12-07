export interface ISortOption {
  option: string;
  value: string;
}

export const gradeNumArr: ISortOption[] = [
  { option: "1학년", value: "1" },
  { option: "2학년", value: "2" },
  { option: "3학년", value: "3" },
];

export const classNumArr: ISortOption[] = [
  { option: "1반", value: "1" },
  { option: "2반", value: "2" },
  { option: "3반", value: "3" },
  { option: "4반", value: "4" },
];

export const bugReportOption: ISortOption[] = [
  { option: "ATTENDANCE", value: "출결 관리" },
  { option: "PICNIC", value: "외출" },
  { option: "ETC", value: "기타" },
];
