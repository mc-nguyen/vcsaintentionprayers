import {Card, Row} from "react-bootstrap";
import React from "react";

export default function PopPrayer() {
    const paragraphStyle = {
        fontFamily: "Lora",
        fontSize: 15,
        color: "white"
    };
    const labelStyle = {
        fontFamily: "Lobster",
        fontSize: 20,
        textAlign: "center",
    };
    const popular = [
        {title: "DẤU THÁNH GIÁ (ĐƠN)", content: "Nhân danh Cha/ và Con/ và Thánh Thần . Amen.(hoặc) Nhân danh Chúa Cha/ và Chúa Con/ và Chúa Thánh Thần. Amen."},
        {title: "DẤU THÁNH GIÁ (ĐƠN)", content: "Nhân danh Cha/ và Con/ và Thánh Thần . Amen.(hoặc) Nhân danh Chúa Cha/ và Chúa Con/ và Chúa Thánh Thần. Amen."},
        {title: "DẤU THÁNH GIÁ (ĐƠN)", content: "Nhân danh Cha/ và Con/ và Thánh Thần . Amen.(hoặc) Nhân danh Chúa Cha/ và Chúa Con/ và Chúa Thánh Thần. Amen."},
        {title: "DẤU THÁNH GIÁ (ĐƠN)", content: "Nhân danh Cha/ và Con/ và Thánh Thần . Amen.(hoặc) Nhân danh Chúa Cha/ và Chúa Con/ và Chúa Thánh Thần. Amen."},
        {title: "DẤU THÁNH GIÁ (ĐƠN)", content: "Nhân danh Cha/ và Con/ và Thánh Thần . Amen.(hoặc) Nhân danh Chúa Cha/ và Chúa Con/ và Chúa Thánh Thần. Amen."},
        {title: "DẤU THÁNH GIÁ (KÉP)", content: "Lạy Chúa chúng con, vì dấu + Thánh Giá, xin chữa + chúng con, cho khỏi + kẻ thù. Nhân danh Cha + và Con và Thánh Thần. Amen."}
    ]
    document.title = "Các kinh thông dụng"
    return (
        <Row style={{ width: "70%", justifyContent:'center', margin: "auto", backgroundColor: 'rebeccapurple' }}>{
                popular.map((prayer) => (
                    <Card bg="danger" className="mb-2" style={{width: '18rem', margin: 5}}>
                        <Card.Header style={labelStyle}>{prayer.title}</Card.Header>
                        <Card.Body>
                            <Card.Text style={paragraphStyle}>{prayer.content}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
        }
        </Row>
    );
};