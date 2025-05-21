import {createRoot} from "react-dom/client"
import HelloSekai from "./HelloSekai";
import Container from "./Container";
import './custom.css';

createRoot(document.getElementById("root"))
    .render (
        <div>
            <Container>
                <HelloSekai/>
            </Container>
        </div>
    )