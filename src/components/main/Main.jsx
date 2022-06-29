import {InstagramOutlined, YoutubeOutlined , LinkedinOutlined, StockOutlined} from '@ant-design/icons'
import sam from '../../images/samamg.jpg'
import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './main.scss'


const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>i am sammy {' '}<BsPatchCheckFill  className='verified'/> </h1>
                            <p>Forex Expert & Verified Coolkid.</p>

                            <div className="icons">
                              <InstagramOutlined className='icon'/>
                               <YoutubeOutlined className='icon'/>
                               <LinkedinOutlined className='icon'/>
                               <StockOutlined className='icon'/>
                            </div>


                    <div className="buttons">
                        <button>respected</button>
                        <button>influential</button>
                        
                    </div>


                  

                    </div>


                </div>


                <div className="main__img">
                    <img src={sam} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main