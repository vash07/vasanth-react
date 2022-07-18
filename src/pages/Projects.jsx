import { Link } from "react-router-dom";
import { getProjects } from "../data";

export default function Projects() {
  let projects = getProjects();
  return (
    <div class= "center" style={{ display: "flex" }}>
      <nav
        style={{
          padding: "5rem",
          alignItems: "center"
          
         }}

      >
        {projects.map((projects) => (
          <Link
            style={{ display: "block", margin: "5rem 0", alignItems:"center" }}
            to={`/invoices/${projects.number}`}
            key={projects.number}
          >
            {projects.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
