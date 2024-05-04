import { Patient } from "@/types"

const patientList: Patient[] = [
  {
    id: "1",
    name: "Paciente 1",
    owner: "Owner 1",
    date: "2022-01-01",
    symptoms: "Sintomas 1"
  },
  {
    id: "2",
    name: "Paciente 2",
    owner: "Owner 2",
    date: "2022-02-02",
    symptoms: "Sintomas 2"
  }
]

interface PatientItemProps {
  patient: Patient
}

function PatientItem({ patient }: PatientItemProps) {
  return (
    <li className="px-5 py-10 bg-white shadow-md rounded-xl space-y-3">
      <div className="space-y-3 mb-2">
        <p className="text-sm uppercase font-semibold">
          Id: {""}
          <span className="font-normal normal-case">
            {patient.id}
          </span>
        </p>

        <p className="text-sm uppercase font-semibold">
          Nombre: {""}
          <span className="font-normal normal-case">
            {patient.name}
          </span>
        </p>

        <p className="text-sm uppercase font-semibold">
          Propietario: {""}
          <span className="font-normal normal-case">
            {patient.owner}
          </span>
        </p>

        <p className="text-sm uppercase font-semibold">
          Fecha alta: {""}
          <span className="font-normal normal-case">
            {patient.date}
          </span>
        </p>

        <p className="text-sm uppercase font-semibold">
          Síntomas: {""}
          <span className="font-normal normal-case">
            {patient.symptoms}
          </span>
        </p>
      </div>

      <button className="bg-indigo-600 w-full rounded-md text-center py-2 uppercase text-white hover:bg-indigo-700">
        Editar
      </button>

      <button className="bg-rose-600 w-full rounded-md text-center py-2 uppercase text-white hover:bg-rose-700">
        Editar
      </button>
    </li>
  )
}

export default function PatientList() {
  return (
    <div
      className="px-4 space-y-5 col-span-2
      md:col-span-1"
    >
      <h2 className="text-3xl font-semibold text-center">
        Listado de Pacientes
      </h2>

      <p className="text-center text-lg">
        Administra tus {""}
        <span className="text-indigo-700 font-semibold">
          Pacientes y Citas
        </span>
      </p>

      <ul className="space-y-5">
        {
          patientList.map(patient => (
            <PatientItem
              key={patient.id}
              patient={patient}
            />
          ))
        }
      </ul>
    </div>
  )
}