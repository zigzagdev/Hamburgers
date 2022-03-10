import React from "react";
import { spanish } from "../assets/dishes/assets";
import Card from "@material-ui/core/Card";
import { limit } from "../components/common/commonfunction";

const outline = {
  margin: "38px 0 148px 78px",
};

const title = {
  color: "white",
  textAlign: "left",
  fontSize: "30px",
};

const titledetail = {
  fontSize: "27px",
  color: "snow",
  margin: "31px 0 0 66px",
  textAlign: "left",
};

const cardboss = {
  display: "flex",
  flexWrap: "wrap",
};

const card = {
  width: "16rem",
  height: "332px",
  backgroundColor: "white",
  tableLayout: "fixed",
  display: "flex",
  flexDirection: "column",
};

const cardcomponent = {
  margin: "32px 0 18px 62px",
  flexWrap: "wrap",
};

const sortby = spanish.sort(function (a, b) {
  if (a.price > b.price) return 1;
  if (a.price < b.price) return -1;
  return 0;
});

const dishobj = {
  fontSize: "20px",
  marginTop: "21px",
  color: "darkblue",
};

const dishnameobj = {
  fontSize: "20px",
  color: "darkblue",
  margin: "auto",
  maxWidth: "200px",
  display: "block",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

function Spanish() {
  return (
    <div style={outline}>
      <div style={title}>Spanish Page</div>
      <h1 style={titledetail}>Here are Spanish dishes Page .</h1>
      <div style={cardboss}>
        {sortby.map((food) => {
          return (
            <div style={cardcomponent}>
              <Card style={card}>
                <img
                  src={food.image}
                  alt={food.image}
                  width={260}
                  height={170}
                />
                <h1 style={dishnameobj}>
                  {limit}
                  {food.content}
                </h1>
                <h3 style={dishobj}>{food.price}</h3>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Spanish;
