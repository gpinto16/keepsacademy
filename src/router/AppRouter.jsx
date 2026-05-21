import { Navigate, Route, Routes } from "react-router"
import { Navbar, Footer } from "../ui/components"
import { AboutPage, ContactPage, HomePage, Trainers, Exercises } from "../keepers"
import { LoginPage } from "../auth/pages/LoginPage"


export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="home" element={ <HomePage/> }/>
        <Route path="about" element={ <AboutPage/> }/>
        <Route path="trainers" element={ <Trainers/> }/>
        <Route path="exercises" element={ <Exercises/> }/>
        <Route path="contact" element={ <ContactPage/> }/>
        <Route path="login" element={ <LoginPage/> }/>
        <Route path="/" element={ <Navigate to="/home" /> }/>
      </Routes>

      <Footer />
    </>
  )
}
