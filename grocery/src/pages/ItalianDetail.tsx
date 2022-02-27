import  React from 'react';
import { italian } from "../assets/dishes/assets"
import { useParams } from 'react-router-dom';


interface findid {
    id: number;
    itemname: string;
    content: string;
}

const Italian1:  {[key: string]: string} = {
    color: "white"
}

function ItalianDetail() {

    const strid = useParams();
    console.log(strid);
    var id = Number(strid);
    console.log(id)
    const findid = italian.find((v) => v.id === id);
    console.log(findid)
    return (
        <h1 style={Italian1}>{findid}</h1>
    )
}


export default ItalianDetail;