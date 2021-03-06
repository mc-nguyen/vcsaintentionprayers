import React, {useState} from "react";
import {Col, Figure, ListGroup, Row} from "react-bootstrap";
import db from "../database/firebase";

export default function PrayerList() {
    const [prayers, setPrayers] = useState([]);
    window.addEventListener('load', () => {
        fetchData();
    });
    function fetchData() {
        db.collection("prayers").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                const data = element.data();
                const date = new Date(data.timeStamp);
                const today = new Date();
                if ((today - date) / (1000 * 3600 * 24) < 7) setPrayers(arr => [...arr ,
                    ((data.sender === "") ? "" : ("Từ " + data.sender))
                    + ((data.receiver === "") ? "" : ("gửi đến " + data.receiver))
                    + ((data.receiver === "" && data.sender === "") ? "" : ": ")
                    + data.message]);
            });
        });
    }

    const img = new Image();
    img.src = "images/list.jpg";
    img.width *= .1;
    img.height *= .1;
    console.log(img.src + " " + img.width + " " + img.height);

    const formStyle = {
        margin: "10px auto",
        borderRadius: 10,
        width: "49%",
        backgroundColor: "rebeccapurple"
    };
    const labelStyle = {
        fontFamily: "Lobster",
        fontSize: 20,
        textAlign: "center",
        backgroundColor: "purple",
        color: "white",
        padding: 10,
        borderRadius: 20
    };
    const paragraphStyle = {
        fontFamily: "Lora",
        fontSize: 15,
        fontWeight: "bold"
    };
    document.title = "VCSA Intentions"

    return (
        <div style={{backgroundColor: "rebeccapurple"}}>
            <Row className="g-2 justify-content-md-center" style={formStyle}>
                <Col className="my-2" md="auto">
                    <h1 style={labelStyle}>Lời cầu nguyện tuần này:</h1>
                    <ListGroup> {
                        prayers.map((prayer) => (
                            <ListGroup.Item style={paragraphStyle}>{prayer}</ListGroup.Item>
                        ))
                    }
                    </ListGroup>
                </Col>
                <Col>
                    <Figure.Image src={img.src}/>
                </Col>
            </Row>
        </div>
    );
};