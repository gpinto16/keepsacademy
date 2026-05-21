import { KeepersCard } from "../components";
import { trainingDrillsData } from "../data/TrainingDrillsData"; 


export const Exercises = () => {


  return (
    <>
      <KeepersCard drills={trainingDrillsData} />
    </>
  )


};