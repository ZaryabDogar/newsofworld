import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import Navbar2 from './Navbar2'
import LoadingBar from 'react-top-loading-bar'
export default function News2(props) {
    const [num, setnum] = useState(1)
    const [article, setarticle] = useState(0)
    const [load, setload] = useState(false)
    const [progress, setProgress] = useState(0)
  
  var yesterday = new Date(Date.now() - 86400000);
    // let key=`fc2eba4aeaf7409aa373335febff8f80`
    let key=`a35809aab2d54baa9ce84a77b143262d`
    function capitlizeText(word) 
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

    let datey=yesterday.toISOString().slice(0,10)
    const [news, setnews] = useState([])
    const newscomponent= async ()=>{
      setload(true)
      
      let url=`https://newsapi.org/v2/everything?q=${props.q}&from=${datey}&language=en&pageSize=20&page=${num}&apiKey=${key}`
      console.log("clicked")
      document.title=`News-Of-World-${capitlizeText(props.q)}`
      setProgress(20)
        try {
setProgress(50)
          let response= await fetch (url)
          setProgress(70)
          let data =await response.json()
          setload(false)
          if (data.status==="ok") {
            
          
          console.log(data)
          setnews(data.articles)
            setarticle(data.totalResults)
            setProgress(100)
          }else{
            setProgress(50)
          setProgress(100)
          
          console.log('failed to fetch news:'+data.status)
        }
      } catch (error) {
          setProgress(50)
        setProgress(100)
            setload(false)
          console.log("soorry cant get news")
        }
        
        
      }
      

        
               useEffect(() => {

    newscomponent()
   
        }, [])


const next=()=>{
        setnum(num+1)
        if(!(num>=(Math.ceil(article/20)))){
       
        console.log(num)
        newscomponent()
      }

    }
    const previous=()=>{
        setnum(num-1)
        console.log(num)
        newscomponent()
    }
    console.log(num)
    
  return (
    
   <><div id='ist'></div>
   
   <Navbar2/>
   <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
        shadow={true}
        onLoaderFinished={() => setProgress(0)}
      /> 
  {load &&<Spinner/>}
    <h1 className="flex justify-center text-center m-6 xl:text-2xl lg:text-xl text-sm txt font-semibold uppercase underline  mt-28" >Top headLines of {props.q} </h1>
    <h1 className="flex justify-center text-center m-6 xl:text-xl lg:text-sm text-sm txt font-semibold uppercase">Page: <span className='xl:text-xl lg:text-sm text-sm txt font-semibold uppercase text-red-600'>{num}&nbsp;</span><span className='xl:text-xl lg:text-sm text-sm txt font-semibold uppercase text-red-600 no-underline text-center'>({article})</span></h1>

    <div className='inline-flex  justify-center p-5  flex-wrap absolute'>
      
       {!load &&news.map((elem,i)=>{
          return  <div key={i} className="max-w-[15rem] md:max-w-[25rem] bg-white border m-5 border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-md hover:shadow-2xl hover:scale-y-110 ">
    <a href="#">
        <img className="rounded-lg ease-in-out md:h-[15rem] h-[10rem] w-full hover:scale-x-110  hover:ease-in-out" src={elem.urlToImage?elem.urlToImage:`https://placehold.co/600x400`
} alt="" />
    </a>
    <div className="p-5">
       
            <h5 className="mb-1 text-lg overflow-hidden font-bold tracking-tight text-gray-900 dark:text-white">{elem.title?elem.title.toUpperCase():"HEADLINES"}</h5>
        
        <p className="mb-2 font-normal text-lg text-gray-700 dark:text-gray-400">{elem.description?elem.description.slice(0,300):""}...</p>
        <div className='flex justify-between w-full'>
        <a href={elem.url}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-xl" target='_blank' rel="noreferrer" >
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
       </div> 
       <span className='text-sm font-bold my-5 flex '> Author:<span className="bg-red-600 text-white text-xs font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-blue-300">{elem.author?elem.author:"Unknown"}</span>
</span>
       <span className='text-sm font-bold my-5 flex '> Source:<span className="bg-red-600 text-white text-xs font-medium ml-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-blue-300">{elem.source
.name}</span>
</span>
<div className='flex justify-between'> <span className='font-semibold'>{new Date(elem.publishedAt).toDateString()}</span>
<p className='font-semibold'>{new Date(elem.publishedAt).toLocaleTimeString()}</p></div>
    </div>
</div>
      })}

<div className='flex w-[90vw] justify-between p-10 flex-wrap items-center content-center'> 
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" disabled={num<=1}onClick={previous}><span className='font-bold'>	&larr;</span> Previous</button>
<a href="#ist"><button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" ><span className='font-bold'>	&uarr;</span> To 1st News</button></a>
<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4  font-medium rounded-full text-sm lg:px-5 lg:py-2.5 lg:mr-2 lg:mb-2 px-3 py-1.5 mr-1 mb-1 dark:bg-gray-800  dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={next} disabled={num>=(Math.ceil(article/20))}>Next <span className='font-bold' >	&rarr;</span> </button>

</div>
</div>

</>
  )
}

