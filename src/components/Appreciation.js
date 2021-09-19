import {Card} from "react-bootstrap";

export default function Appreciation() {
    const formStyle = (window.innerWidth > 1040) ? {
        background: "white",
        padding: 10,
        width: "50%",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: 10
    } : {
        background: "white",
        padding: 10,
        margin: "20px",
        borderRadius: 10
    }
    const labelStyle = {
        fontFamily: "Lobster",
        fontSize: 40,
        textAlign: "center",
        backgroundColor: "purple",
        color: "white",
        padding: 10,
        borderRadius: 20
    };

    const paragraphStyle = {
        fontFamily: "Lora",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    };

    return (
        <Card style={formStyle}>
            <Card.Img src="../images/thank.jpg" height="500px"/>
            <Card.Body>
                <Card.Title style={labelStyle}>Cảm ơn!</Card.Title>
                <Card.Text style={paragraphStyle}>
                    Cảm ơn lời cầu nguyện của bạn hôm nay.<br/>
                    Hy vọng lời cầu nguyện sẽ thành hiện thực.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};