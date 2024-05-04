import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"

function App() {

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
        <PatientList />
      </div>
    </main>
  )
}

export default App
