import { TrainersCard } from "../components";
import { trainersInfoData } from "../data/trainersInfoData";

export const Trainers = () => {
  return (
    <>
     <TrainersCard trainer={trainersInfoData} />
    </>
  );
};