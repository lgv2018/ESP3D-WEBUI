import { h } from "preact"
import "../stylesheets/application.scss"
import { AlertTriangle } from "preact-feather"

export default () => {
    return (
    <div>
        <div className="alert alert-warning"><AlertTriangle size={18} />More to come soon</div>
    </div>
    );
}
