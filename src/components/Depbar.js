import React from 'react'
import './Depbar.css'
import Logo from '../img/L2.png'
import Dep from './Dep.js'

import ComputerIcon from '@mui/icons-material/Computer';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessIcon from '@mui/icons-material/Business';
import AddBoxIcon from '@mui/icons-material/AddBox';

function Depbar() {

    // const user = useSelector(selectUser);
    // const departmentId = useSelector(selectDepartmentId);
    
    // useEffect(() => {
    //     if (departmentId) {
    //         db.collection("channels").doc(channelId).collection('messages').orderBy('timestamp','asc')
    //         .onSnapshot((snapshot) => 
    //             setMessages(snapshot.docs.map((doc) => doc.data()))
    //         ); 
    //     }
    // },[channelId]);





  // const handleAddDep = () => {
    //       const departmentName = prompt("Enter name of the new Department:");
      
    //       if(departmentName) {
    //         db.collection("departments").add({
    //           departmentName: departmentName,
    //         })
    //       }
    //     }

  return (
    <div className="depbar">
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="department">
            <ul className="dep-item">
                
                <li><Dep /></li> 
                {/* <li><AddBoxIcon fontSize='large'onClick={handleAddDep}/></li> */}
                
                {/* <li><ComputerIcon fontSize='large'/></li>
                <li><EngineeringIcon fontSize='large'/></li>
                <li><BusinessIcon fontSize='large'/></li> */}
                <li><AddBoxIcon fontSize='large'/></li>

            </ul>
        </div>
    </div>
  )
}

export default Depbar