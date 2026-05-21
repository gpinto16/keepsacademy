import { KeepersCard } from "../components";
import { trainingDrillsData } from "../data/trainingDrillsData"; 


export const Exercises = () => {


  return (
    <>
      <KeepersCard drills={trainingDrillsData} />
    </>
  )


};