
import "./Sidebar.css"
import Logo from "../../imgs/logo.png"
import  {UilSignOutAlt}  from "@iconscout/react-unicons";
import { SidebarData } from '../../Data/Data';
import { useState } from 'react';
const Sidebar = () => {
    const [selected,setSelected] = useState(0);
  return (
    <div className="sidebar">
        {/* logo */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
                Sh<span>o</span>ps
            </span>
        </div>
        {/* menu */}
        <div className="menu">
          {SidebarData.map((item,index)=>{
            return(
                <div className={selected===index?'menuItem active':'menuItem'}
                key={index}
                onClick={()=>setSelected(index)}

                >
                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>
                </div>
            )
          })}
           {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
        </div>
    </div>
  )
}

export default Sidebar
