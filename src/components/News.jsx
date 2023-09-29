import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Spinner from './Spinner'
import LoadingBar from 'react-top-loading-bar'
// import 'flowbite'
export default function News(props) {
    const [news, setnews] = useState([])
    const [load, setload] = useState(false)
    const [twe, settwe] = useState(false)
    const [progress, setProgress] = useState(0)
//  
    
const key="955e407e8dcde5d39bc98232bf911796"
function capitlizeText(word) 
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}
    const newscomponent= async ()=>{
      setload(true)
        let url=`https://gnews.io/api/v4/top-headlines?category=${props.catagory}&lang=en&country=pk&max=20&apikey=${key}`
        console.log("clicked")
        document.title=`News-Of-World-${capitlizeText(props.catagory)}`
        setProgress(20)

        try {
          let response= await fetch (url)
          setProgress(50)
          let data =await response.json()
          setload(false)
          setProgress(70)
          console.log(data.articles)
          setnews(data.articles)
          settwe(true)
          setProgress(100)
        } catch (error) {
          setProgress(50)
          setload(false)
          console.log("soorry cant get news")
          setProgress(100)
        }
        
        
      }
      
      useEffect(() => {
newscomponent()
    }, [])


    
  return (
    
   <> <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
        shadow={true}
        onLoaderFinished={() => setProgress(0)}
      /> 
     {load &&<Spinner/>}
   <h1 className="flex justify-center text-center m-6 xl:text-2xl lg:text-xl text-sm txt font-semibold uppercase underline mt-28">Top headLines of {props.catagory} <span className='xl:text-xl lg:text-sm text-sm txt font-semibold uppercase text-red-600 no-underline text-center'>{twe?"(20)":"(0)"}</span></h1>
    <div className='inline-flex  justify-center p-5  flex-wrap absolute'>
      
        {!load &&news.map((elem,i)=>{
          return  <div key={i} className="max-w-[15rem] md:max-w-[25rem] bg-white border m-5 border-gray-200 rounded-lg hover:shadow-2xl hover:scale-y-110 dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <img className="rounded-lg md:h-[15rem] h-[10rem] w-full hover:scale-x-110  hover:ease-in-out hover:shadow-2xl" src={elem.image?elem.image:`https://placehold.co/600x400`
} alt="" />
    </a>
    <div className="p-5">
       
            <h5 className="mb-1 text-lg overflow-hidden font-bold tracking-tight text-gray-900 dark:text-white">{elem.title?elem.title.toUpperCase():"HEADLINES"}</h5>
        
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400 text-lg">{elem.description?elem.description.slice(0,200):""}...</p>
        <div className='flex justify-between w-full'>
        <a href={elem.url}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-xl" target='_blank' rel="noopener noreferrer">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
       </div> 
      
       <span className='text-sm font-bold my-5 flex '> Source:<span className="bg-red-600 text-white text-xs font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-blue-300">{elem.source
.name}</span>
</span>
<div className='flex justify-between'> <span className='font-semibold'>{new Date(elem.publishedAt).toDateString()}</span>
<p className='font-semibold'>{new Date(elem.publishedAt).toLocaleTimeString()}</p></div>
    </div>
</div>
      })}

</div></>
  )
}

