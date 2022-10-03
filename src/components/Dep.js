import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';

function Dep({/*{id,departmentName}*/}) {

    // const dispatch = useDispatch()
  
    return (
      <div > 
      {/* //   onClick={() => dispatch(setDepartmentInfo({
      //   departmentId: id,
      //   departmentName: departmentName,
      // }))}  > */}
          <li><BusinessIcon fontSize='large'/></li>
      </div>
    );
  }

export default Dep