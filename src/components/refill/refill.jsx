import './refill.css'
import refill_bottle from '../../assets/refill_bottle.png'
import still_water from '../../assets/still_water.png'
import absolut from '../../assets/absolut.png'
import yellow_tail from '../../assets/yellow_tail.png'
import jack from '../../assets/jack.png'
import glen from '../../assets/glen.png'
import jameson from '../../assets/jameson.png'

const Refill = () => {
    return (
        <div className="refill">
            <div className="box">
                <div className="wrapper full">
                    <div className="refill-cont d-flex">
                        <h1>
                            <span>GET A </span>
                            <span>REFILL</span>
                        </h1>
                        <img src={refill_bottle} alt="" />
                    </div>
                    <div className="refill-cont2 d-flex">
                        <div className="row">
                            <div className="col-12 col-md-6 mb_4">
                                <div className='refill-imgs'>
                                    <div className='still-water'>
                                        <img src={still_water} alt="" />
                                    </div>
                                    <div className='absolut'>
                                        <img src={absolut} alt="" />
                                    </div>
                                    <div className='yellow_tail'>
                                        <img src={yellow_tail} alt="" />
                                    </div>
                                    <div className='jack'>
                                        <img src={jack} alt="" />
                                    </div>
                                    <div className='glen'>
                                        <img src={glen} alt="" />
                                    </div>
                                    <div className='jameson'>
                                        <img src={jameson} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className='refill-text'>
                                    <p>Now get exciting discount offers on 100+ brands  while you enjoy your drinks!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Refill