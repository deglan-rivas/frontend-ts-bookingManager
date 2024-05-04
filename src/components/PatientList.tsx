import { Patient } from "@/types"

interface PatientItemProps {
  patient: Patient
  deletePatient: (id: Patient['id']) => void
}

interface PatientListProps {
  patients: Patient[]
  deletePatient: (id: Patient['id']) => void
}

function PatientItem({ patient, deletePatient }: PatientItemProps) {
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
          Email: {""}
          <span className="font-normal normal-case">
            {patient.email}
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

      <button className="bg-indigo-600 w-full rounded-md text-center py-2 uppercase text-white font-semibold hover:bg-indigo-700">
        Editar
      </button>

      <button className="bg-rose-600 w-full rounded-md text-center py-2 uppercase text-white  font-semibold hover:bg-rose-700"
        onClick={() => deletePatient(patient.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default function PatientList({ patients, deletePatient }: PatientListProps) {
  return (
    <div
      className="px-4 space-y-5 col-span-2
      md:col-span-1"
    >
      {
        patients.length === 0 ? (
          <>
            <h2 className="text-3xl font-semibold text-center">
              No hay pacientes
            </h2>

            <p className="text-center text-lg">
              Comienza agregando pacientes {""}
              <span className="text-indigo-700 font-semibold">
                y aparecerán en este lugar
              </span>
            </p>
          </>
        ) : (
          <>
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
                patients.map(patient => (
                  <PatientItem
                    key={patient.id}
                    patient={patient}
                    deletePatient={deletePatient}
                  />
                ))
              }
            </ul>
          </>
        )
      }

    </div>
  )
}