import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/loginform.css";
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [hospital, setHospital] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // For simplicity, consider any email/password combination as valid
    if (email == "admin@gmail.com" || password == "admin123") {
      navigate("/opdform");
    } else {
      // Handle incorrect credentials if needed
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      <div>
        <div>
          <div className="wrapper">
            <form action="#" onSubmit={handleLogin}>
              <h2>Login</h2>
              <div className="custom-select" style={{ marginLeft: "-7px" }}>
                <select>
                  <option value="">Select Hospitals</option>
                  <option value="">shakuntla</option>
                  <option value="">medicore</option>
                  <option value="">narak</option>
                  <option value="">shri ram</option>
                </select>
              </div>
              <div className="form-control">
                <input
                  type="value"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>
                  <span style={{ transitionDelay: "50ms" }}>E</span>
                  <span style={{ transitionDelay: "50ms" }}>m</span>
                  <span style={{ transitionDelay: "100ms" }}>a</span>
                  <span style={{ transitionDelay: "150ms" }}>i</span>
                  <span style={{ transitionDelay: "200ms" }}>l</span>
                </label>
              </div>
              <div className="form-control">
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />

                <label>
                  <span style={{ transitionDelay: "50ms" }}>P</span>
                  <span style={{ transitionDelay: "50ms" }}>a</span>
                  <span style={{ transitionDelay: "100ms" }}>s</span>
                  <span style={{ transitionDelay: "150ms" }}>s</span>
                  <span style={{ transitionDelay: "200ms" }}>w</span>
                  <span style={{ transitionDelay: "250ms" }}>o</span>
                  <span style={{ transitionDelay: "300ms" }}>r</span>
                  <span style={{ transitionDelay: "350ms" }}>d</span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
