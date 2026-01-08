import API from "../services/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        API.get("/user")
            .then((res) => {
                console.log(res.data);
            })
            .catch(() => {
                alert("Unauthorized");
                navigate("/");
            });
    }, [navigate]);

    return <h2>User Dashboard</h2>;
}

export default Dashboard;
