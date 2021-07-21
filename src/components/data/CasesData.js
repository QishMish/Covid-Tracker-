import React from 'react'
import './cases_data.css'
import Icon1 from '../../assets/image/new-cases.png'
import Icon2 from '../../assets/image/recoveries.png'
import Icon3 from '../../assets/image/death.png'
import Map from '../../assets/image/worldwide.png'

export default function CasesData() {
    return (
        <section className='first-page-data'>
            <div className='cases-boxes'>
                <div className='new-cases'>
                    <h2>New Corona Virus Cases</h2>
                    <div className='content'>
                        <img className='cases-icon' src={Icon1} alt='icon'/>
                        <div className='box-content red'>
                            <p>192,596</p>
                            <span>+3000</span>
                        </div>
                    </div>
                </div>
                <div className='recoveries'>
                    <h2>Recovered</h2>
                    <div className='content'>
                        <img className='cases-icon' src={Icon2} alt='icon'/>
                        <div className='box-content green'>
                            <p>192,596</p>
                            <span>+3000</span>
                        </div>
                    </div>
                </div>
                <div className='death'>
                    <h2>Death</h2>
                    <div className='content'>
                        <img className='cases-icon' src={Icon3} alt='icon'/>
                        <div className='box-content red'>
                            <p>192,596</p>
                            <span>+3000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='covid-map'>
                <img  src={Map} alt='icon'/>
            </div>
        </section>
    )
}
