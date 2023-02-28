import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { useDispatch,useSelector } from "react-redux";
import { addfav } from "../../redux/slice/CartFavslice";

const ApiFetching = () => {

    const dispatch = useDispatch();
    const team = useSelector((state)=>state.team.clubname)
    const navigate = useNavigate();
    const [data,setData]= useState([]);

    useEffect(()=>{
      function getRandomUsers() {
          const options = {
            method: 'GET',
            url: 'https://free-nba.p.rapidapi.com/players',
            params: {page: '0', per_page: '25'},
            headers: {
              'X-RapidAPI-Key': 'c04dd5bed7msh59ceaab9a12b6cep1fd9b7jsn2e23bd71202b',
              'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data.data);
            setData(response.data.data)
          });
      };
      getRandomUsers();
    },[]) 

  return (
    <div>
      <button
        onClick={() => navigate("/", { replace: true })}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          fontSize: "35px",
        }}
      >
        Previous Example
      </button>

      <div style={{ width: "100%", display:'flex',flexWrap:"wrap",justifyContent:"space-evenly" }}>
        {data.slice(0,14).map((data,index)=>(
        <div key={index} style={{width:"200px",overflow:"hidden"}}>
          <div style={{ fontSize: "25px" }}>{data.first_name}</div>
          <div style={{ fontSize: "25px" }}>{data.last_name}</div>
          <div style={{ fontSize: "25px" }}>{data.team.full_name}</div>
          <button onClick={()=>dispatch(addfav(data.team.full_name))} >Add players</button>
        </div>))}
      </div>

      <button
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          fontSize: "35px",
          color:"green"
        }}
      >
        Total players Added to fav:{team.length}
      </button>
    </div>
  );
};

export default ApiFetching;
