import React, {Fragment} from 'react';


const Italian1:  {[key: string]: string} = {
    color: "white",
    fontSize:'25px',
    marginTop: "auto",
    textAlign:"left",
    marginLeft: "122px"
}
const style: { [key: string]: string } = {
    marginTop: "43px",
    width: "100%",
    backgroundColor: "black",
};

function Italian () {
    const Spaghettis = [
        { "id": 0, "itemname": "Seafood Spaghetti", content:"This is typical Italian Seafood Spaghetti!!"},
        { "id": 1, "itemname": "Tomato Spaghetti" , content:"This is typical Italian Tomato Spaghetti!!"},
    ]
    return (
        <Fragment>
        <div>
            {
                Spaghettis.map((key,value) =>
                    <p style={Italian1}>{key.itemname}</p>
                )
            }
        </div>
            <div style={Italian1}>aaaaaaaaaaaaa</div>
        </Fragment>
    )
}
export default Italian ;

// class Italian extends React.Component {
//     render(){
//         const eachitem = Sspaghetti.map((output, index) => {
//             return `${index + 1}番目は${output}`;
//            <Fragment>
//              <div style={style}>
//                <h1 style={Italian1}>Here is Italian Menu Page </h1>
//              </div>
//                <div>
//                    console.log(Spaghetti[0]);
//                </div>
//            </Fragment>
//         );
//     }
// }
