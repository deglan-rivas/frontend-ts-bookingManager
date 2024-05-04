import { useState } from "react"
import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"
import { Patient } from "./types"

function App() {
  const initialPatient: Patient = {
    id: "",
    name: "",
    owner: "",
    email: "",
    date: "",
    symptoms: ""
  }

  const [patient, setPatient] = useState<Patient>(initialPatient)
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: "1",
      name: "Paciente 1",
      owner: "Owner 1",
      email: "email 1",
      date: "2022-01-01",
      symptoms: "Sintomas 1"
    },
    {
      id: "2",
      name: "Paciente 2",
      owner: "Owner 2",
      email: "email 2",
      date: "2022-02-02",
      symptoms: "Sintomas 2"
    }
  ])

  function deletePatient(id: Patient['id']) {
    setPatients(patients.filter(patient => patient.id !== id))
  }

  return (
    <main className="max-w-3xl mx-auto py-20">
      <h1 className="text-5xl text-center font-semibold max-w-xl mx-auto mb-12">
        Seguimiento de Pacientes {""}
        <span className="text-indigo-700">
          Veterinaria
        </span>
      </h1>

      <div className="grid grid-cols-2 gap-5 md:gap-0">
        <PatientForm />
        <PatientList
          patients={patients}
          deletePatient={deletePatient}
        />
      </div>
    </main>
  )
}

export default App
