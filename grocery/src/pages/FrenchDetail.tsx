import  React from 'react';
import { french } from "../assets/dishes/assets"
import { useParams } from 'react-router-dom';

interface RouterParams {
  id: string
}

interface findid {
  id: number
  itemname: string
  content: string
}

const outline:  {[key: string]: string} = {
  margin: "62px 0 0 210px",
  textAlign: "left",
}

const french1:  {[key: string]: string} = {
  color: "white",
}

const french2:  {[key: string]: string} = {
  color: "white",
  margin: "31px 0 14px 21px",
}

const image:  {[key: string]: string} = {
  width: "420px",
  height: "310px",
  margin: "30px 0 50px 110px"
}

const FrenchDetail = () => {

  const { id } = useParams<RouterParams>();
  const intid = parseInt(id)
  const array = french.find((dish) => dish.id == intid);
    
    return(
      <div style={outline}>
        <h1 style={french1}>{array?.itemname}</h1>
        <h2 style={french2}>{array?.content}</h2>
        <img src={array?.image} style={image}/>
      </div>
    )
}
 
export default FrenchDetail ;