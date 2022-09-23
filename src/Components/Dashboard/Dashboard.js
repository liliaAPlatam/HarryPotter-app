import "./Dashboard.css";
import { Card } from "../Card/Card";
import Students from "../../JSON/hp.students.json";

console.log(Students.map((item) => item));
export const Dashboard = () => {
  return (
    <>
      <button>Estudiantes</button>
      <button>Staff</button>
      <div className="dashboard-content">
        {Students.map((item) => (
          <Card
            key={item.name}
            status={item.alive ? "vivo" : "finado"}
            degree={item.hogwartsStudent ? "Estudiante" : "Staff"}
            image={item.image}
            name={item.name}
            dateOfBirth={item.dateOfBirth}
            gender={item.gender}
            eyeColour={item.eyeColour}
            hairColour={item.hairColour}
          />
        ))}
      </div>
    </>
  );
};
