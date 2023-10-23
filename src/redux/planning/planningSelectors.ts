import { RootState } from "../store";

export const planningBooks = (state: RootState) => state.planning;

export const currentPlanningSelector = (state: RootState) => state;
