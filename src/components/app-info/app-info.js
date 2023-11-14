import "./app-info.css";

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in company N</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>Prize will be received by: {increased}</h2>
        </div>
    )
}

export default AppInfo;