import React,{useState, useEffect} from 'react'
import  { MenuItem, FormControl, Select } from '@material-ui/core'
import './home.css'
import WorldWideImg from '../assets/image/worldwide.png'
import CasesData from '../components/data/CasesData';


export default function Home() {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('Worldwide');

    const getCountries = async () =>{
        const response = await fetch('https://disease.sh/v3/covid-19/countries')
        const data = await response.json();

        const countriesData = data.map((country,index) =>{
            return(
                {
                    name:country.country,
                    value:country.countryInfo.iso2
                }
                
            )
        })
        setCountries(countriesData);
    }
    
    const selectChangeHandler = async(event)=>{
        const countryValue = event.target.value;

        setCountry(countryValue);
        
    }


    useEffect(() => {
        getCountries()     
    }, [])



    return (
        <section className='home'>
            <header className='home-header'>
                <div className='content-left'>
                    Coronavirus (COVID-19) 
                </div>
                <div className='content-right'>
                    <img  src={WorldWideImg} alt='WorldWide'/>
                    <FormControl className='dropdown'>
                        <Select variant="outlined" onChange={selectChangeHandler} value={country}>
                            <MenuItem value='Worldwide'>
                                Worldwide
                            </MenuItem>
                            {
                                countries.map((country)=>{
                                    return  (
                                    <MenuItem value={country.value} key={country.value}>
                                        {country.name}
                                    </MenuItem>
                                    )
                                })
                            } 
                        </Select>
                    </FormControl>
                </div>
            </header>
            <CasesData />
        </section>
    )
}
