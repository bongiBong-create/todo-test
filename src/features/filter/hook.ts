import { useState } from "react";
import { useAppDispatch } from "../../shared/hooks/useStore";
import { IFilter } from "./config";

export const useFilter = () => {
  const dispatch = useAppDispatch();
  const [active, setIsActive] = useState<number>(1);

  const handler = (filter: IFilter) => {
    setIsActive(filter.id);
    dispatch(filter.handler());
  };

  return {
    handler,
    active
  }
}