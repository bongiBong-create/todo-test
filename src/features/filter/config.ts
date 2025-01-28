import { Action } from "@reduxjs/toolkit";
import { filterAll, filterCompleted, filterPlanned } from "../../app/store/reducers/todosSlice";

export interface IFilter {
  id: number;
  title: string;
  handler: () => Action;
}

export const filters: IFilter[] = [
  {
    id: 1,
    title: "All",
    handler: filterAll,
  },
  {
    id: 2,
    title: "Planned",
    handler: filterPlanned,
  },
  {
    id: 3,
    title: "Completed",
    handler: filterCompleted,
  }
]