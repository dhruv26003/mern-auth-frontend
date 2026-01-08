import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/login", {
                email,
                password,
            });

            // ✅ Store token & role
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);

            // ✅ Role based redirect
            if (res.data.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/dashboard");
            }

        } catch (err) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100" >
            <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleLogin}>
                <><h2 className="text-xl font-bold mb-4 text-center">Login</h2><input
                    className="w-full p-2 border mb-4"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required /><br /><input
                        className="w-full p-2 border mb-2"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required /><br /><button className="w-full bg-green-600 text-white p-2 rounded">
                        Login
                    </button></>
            </form>
        </div >
    );
}

export default Login;
