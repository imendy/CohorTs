"use client"
import React, { FC, useState } from "react"
import Heading from "./utils/Heading"
import Header from "./components/Header"
import Hero from "./components/Route/Hero"

interface Props {}


const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(0)
  const [route, setRoute] = useState('Login')


  return (
    <div>
         <Heading 
           title="CohorTs" 
           description="Cohorts is an ELearning platform for students to learn and get help from teachers" 
           keywords="Programming, React, Redux, Next, MERN, Machine Learning, Typescript, Javascript, Phython, AI Programming, Graphic Design, Product Design, Project Management" 
           />

           <Header 
             open={open} 
             setOpen={setOpen} 
             activeItem={activeItem} 
             setRoute={setRoute}  
             route={route}
             />
             <Hero />
    </div>
  )
}

export default Page