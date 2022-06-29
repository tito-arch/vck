import React, {useState} from 'react'
import './head.scss'
import {CloseCircleOutlined, MenuOutlined  } from '@ant-design/icons'
import {Link} from 'react-router-dom'
import Connect from '../connect/Connect'



const Header = () => {

   const [active, setActive] = useState(false)

   const showMenu = () => {
       setActive(!active)
   }

  return (
<div className="header">
  <div className="header__logo">
      <h1>Deriv</h1>
  </div>

  <nav className={ active ? 'navbar active' : 'navbar' }>
      <ul >
          <div className="closed">
             <  CloseCircleOutlined className='close' onClick={showMenu}/>
          </div>   
  
            <li>
                <Link to='/'> Home</Link>
            </li>
  
            <li>
                <Link to='/Connect' element={<Connect />}> #Connect</Link>
            </li>
  
            <li>
                <Link to='/'> Contacts</Link>
            </li>
  
            <li>
                <Link to='/'> Store</Link>
            </li>
  
            

        </ul>
  </nav>

         <div className="changer">
          
              <MenuOutlined className='menu' onClick={showMenu}/>
           
        </div>
  
</div>
  )
}

export default Header
