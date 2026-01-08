import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.get("/users").then(res => setUsers(res.data));
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            {users.map(u => (
                <p key={u._id}>{u.email} - {u.role}</p>
            ))}
        </div>
    );
}
