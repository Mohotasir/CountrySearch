import { useState } from 'react';
import  './country.css'
const Country = ({countrys,handleVisitedCountry}) => {
    const {name,flags,population,area,cca3}  = countrys;
    const [visited,setVisited] = useState(false);
    const isVisited = function(){
        setVisited(!visited);
    }
   const showVisited =(e)=>{
       isVisited();
       handleVisitedCountry(e)
   }
    return (
        <div className={`country-container ${visited && 'visited'} `}>
            <h2><span className='country-name'>Name:</span> {name?.common}</h2>
            <div className='image-div'><img className='country-image' src={flags?.png} alt="" /></div>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button  onClick={()=>showVisited(countrys)}>Visited</button>
        </div>
    );
};

export default Country;