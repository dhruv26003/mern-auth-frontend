import API from "../services/api";

function Admin() {
    API.get("/admin").catch(() => alert("Access denied"));
    return <h2>Admin Dashboard</h2>;
}
export default Admin;
