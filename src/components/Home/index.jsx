import React from "react";
import "./style.css";
import { data } from "../../utils/mock";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigation = useNavigate();
  return (
    <div className="wrapper">
    {
        data.map(({id, path,title,hidden}) => !hidden &&(
            <div exact key={id} className="card" onClick={()=> navigation(path)}>{title}</div>
        ))
    }
    </div>
  )
}

export default Home
