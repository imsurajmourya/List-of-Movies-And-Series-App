import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards"
import "./index.css";
import Datam from "./Datam";

console.log(Datam[0]);
ReactDOM.render(
   <> 
   <h1 className="heading_style"> List of top 6 netflix Series in 2021</h1>

    <Card 
    imgsrc={Datam[0].imgsrc}
        title={Datam[0].title}
        sname={Datam[0].sname}
        links={Datam[0].links}
    />
    <Card 
    imgsrc={Datam[1].imgsrc}
        title={Datam[1].title}
        sname={Datam[1].sname}
        links={Datam[1].links}
    />
    <Card 
    imgsrc={Datam[2].imgsrc}
        title={Datam[2].title}
        sname={Datam[2].sname}
        links={Datam[2].links}
    />
    <Card 
    imgsrc={Datam[3].imgsrc}
        title={Datam[3].title}
        sname={Datam[3].sname}
        links={Datam[3].links}
    />
    <Card 
    imgsrc={Datam[4].imgsrc}
        title={Datam[4].title}
        sname={Datam[4].sname}
        links={Datam[4].links}
    />
     <Card 
    imgsrc={Datam[5].imgsrc}
        title={Datam[5].title}
        sname={Datam[5].sname}
        links={Datam[5].links}
    />
</>,
document.getElementById('root')
);