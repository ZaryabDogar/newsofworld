import React from 'react'
import News from "./components/News.jsx"
import News2 from "./components/News2.jsx"
import { BrowserRouter,Route ,Routes } from "react-router-dom"
export default function App() {


  return (
    <BrowserRouter>
 

 <Routes>
 <Route exact path="/pakistan" element={ <News key="general" catagory={"general"}/>}/>
 <Route exact path="/world" element={ <News key="world" catagory={"world"}/>}/>
 <Route exact path="/nation" element={ <News key="nation" catagory={"nation"}/>}/>
 <Route exact path="/business" element={ <News key="business" catagory={"business"}/>}/>
 <Route exact path="/technology" element={ <News key="technology" catagory={"technology"}/>}/>
 <Route exact path="/entertainment" element={ <News key="entertainment" catagory={"entertainment"}/>}/>
 <Route exact path="/sports" element={ <News key="sports" catagory={"sports"}/>}/>
 <Route exact path="/science" element={ <News key="science" catagory={"science"}/>}/>
 <Route exact path="/health" element={ <News key="health" catagory={"health"}/>}/>
 <Route exact path="/worldt" element={ <News2 key="world" q={"world"}/>}/>
 <Route exact path="/" element={ <News2 key="pakistan" q={"pakistan"}/>}/>
 <Route exact path="/politicst" element={ <News2 key="politicst" q={"politics"}/>}/>
 <Route exact path="/wart" element={ <News2 key="wart" q={"war"}/>}/>
 <Route exact path="/indiat" element={ <News2 key="indiat" q={"india"}/>}/>
 <Route exact path="/bussinesst" element={ <News2 key="bussinesst" q={"bussiness"}/>}/>
 <Route exact path="/technologyt" element={ <News2 key="technologyt" q={"technology"}/>}/>
 <Route exact path="/entertainmentt" element={ <News2 key="entertainmentt" q={"entertainment"}/>}/>
 <Route exact path="/sportst" element={ <News2 key="sportst" q={"sports"}/>}/>
 <Route exact path="/sciencet" element={ <News2 key="sciencet" q={"science"}/>}/>
 <Route exact path="/weaponst" element={ <News2 key="weaponst" q={"weapons"}/>}/>
</Routes>

  </BrowserRouter>
  )
}
