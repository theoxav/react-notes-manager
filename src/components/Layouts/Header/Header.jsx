import Logo from "@/components/UI/Logo/index";
import logo from "@/assets/images/logo.png";

import s from "./style.module.css";
import Button from "@/components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          title="Notomatic"
          subtitle="Manage your notes"
          image={logo}
          onClick={() => navigate("/")}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <Button onClick={() => navigate("/note/new")}>Add note +</Button>
      </div>
    </div>
  );
}
