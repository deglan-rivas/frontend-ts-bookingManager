import { useEffect, useState } from "react"
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

  const initialPatients: Patient[] = JSON.parse(localStorage.getItem("patients") || "[]")

  const [patient, setPatient] = useState<Patient>(initialPatient)
  const [patients, setPatients] = useState<Patient[]>(initialPatients)

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients))
  }, [patients])

  function deletePatient(id: Patient['id']) {
    setPatients(patients.filter(patient => patient.id !== id))
  }

  function savePatient(patient: Patient) {
    if (!patient.id) {
      setPatients([...patients, { ...patient, id: crypto.randomUUID() }])
      setPatient(initialPatient)
      return
    }

    setPatients(patients.map(p => p.id === patient.id ? patient : p))
    setPatient(initialPatient)
  }

  return (
    <main className="container mx-auto py-20">
      <h1 className="text-5xl text-center font-semibold md:w-2/3 md:mx-auto mb-12">
        Seguimiento de Pacientes {""}
        <span className="text-indigo-700">
          Veterinaria
        </span>
      </h1>

      <div className="grid grid-cols-2 gap-5 md:gap-0">
        <PatientForm
          savePatient={savePatient}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          deletePatient={deletePatient}
          setPatient={setPatient}
        />
      </div>

    </main>
  )
}

export default App
