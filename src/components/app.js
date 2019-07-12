import { h } from "preact"
import "../stylesheets/application.scss"
import { AlertTriangle } from "preact-feather"
import NavBar from "./nav-bar"

export default () => {
    return (
    <div>
        <NavBar />
        <br/>
        <br/>
        <br/>
        <div className="alert alert-warning"><AlertTriangle size={18} />More to come soon</div>
    </div>
    );
}
