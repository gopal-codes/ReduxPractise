import avtar from '../../avtar.jpg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Heading = () => {
  const navigate = useNavigate();
  const count = useSelector((state)=>state.counter.count);

  return (
    <div style={{position:"relative"}}>
      <div style={{width:"100%",textAlign:"center"}}>
        <img src={avtar} alt="avtar" />
        <div style={{fontSize:"40px"}} >Count:{count}</div>
      </div>
      <button onClick={()=>navigate('/apifetch', { replace: true })} style={{position:"absolute",right:"20px",top:"50%", fontSize:"35px"}}>
        Next Example
      </button>
    </div>
  )
}

export default Heading