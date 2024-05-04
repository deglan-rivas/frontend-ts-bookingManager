import { Patient } from "@/types"
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react"
import { ToastDescription } from "./ui/toast"
import { useToast } from "./ui/use-toast"

interface PatientFormProps {
  savePatient: (data: Patient) => void
  patient: Patient
  setPatient: Dispatch<SetStateAction<Patient>>
}

export default function PatientForm({ savePatient, patient, setPatient }: PatientFormProps) {
  const { toast } = useToast()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    savePatient(patient)
    toast({
      className: "",
      variant: `${!patient.id ? "addedPatient" : "updatedPatient"}`,
      description: <ToastDescription className="">
        {!patient.id ? "Paciente Agregado" : "Paciente Actualizado"}
        {/* <p className="inline-block">
          Paciente agregado
        </p> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-app inline-block" viewBox="0 0 16 16">
          <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z" />
        </svg> */}
      </ToastDescription>,
      // variant: "destructive",
      // action: <ToastAction altText="Try again">Try again</ToastAction>,
    })
  }

  function handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    setPatient({ ...patient, [e.target.id]: e.target.value })
  }

  return (
    <div
      className="px-4 space-y-5 col-span-2
      md:col-span-1"
    >
      <h2 className="text-3xl font-semibold text-center">
        Seguimiento Pacientes
      </h2>

      <p className="text-center text-lg">
        Añade Pacientes y {""}
        <span className="text-indigo-700 font-semibold">
          Adminístralos
        </span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 space-y-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm uppercase font-semibold">
            Paciente
          </label>
          <input type="text" id="name"
            className="block border border-gray-200 px-3 py-3 rounded-md w-full bg-gray-50"
            placeholder="Nombre del Paciente"
            onChange={(e) => handleChange(e)}
            value={patient.name}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="owner" className="text-sm uppercase font-semibold">
            Propietario
          </label>
          <input type="text" id="owner"
            className="block border border-gray-200 px-3 py-3 rounded-md w-full bg-gray-50"
            placeholder="Nombre del Propietario"
            onChange={(e) => handleChange(e)}
            value={patient.owner}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm uppercase font-semibold">
            Email
          </label>
          <input type="text" id="email"
            className="block border border-gray-200 px-3 py-3 rounded-md w-full bg-gray-50"
            placeholder="Email de Registro"
            onChange={(e) => handleChange(e)}
            value={patient.email}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="text-sm uppercase font-semibold">
            Fecha Alta
          </label>
          <input type="date" id="date"
            className="block border border-gray-200 px-3 py-3 rounded-md w-full bg-gray-50"
            onChange={(e) => handleChange(e)}
            value={patient.date}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="symptoms" className="text-sm uppercase font-semibold">
            Síntomas
          </label>
          {/* <textarea name="symptoms" id="symptoms" cols="10" rows="10" */}
          <textarea name="symptoms" id="symptoms"
            className="block border border-gray-200 px-3 py-3 rounded-md w-full bg-gray-50"
            placeholder="Síntomas del paciente"
            onChange={(e) => handleChange(e)}
            value={patient.symptoms}
          >
          </textarea>
        </div>

        <input type="submit"
          className="py-2 bg-indigo-700 text-white uppercase font-semibold text-center w-full rounded-md cursor-pointer hover:bg-indigo-800"
          value={!patient.id ? "Agregar Paciente" : "Actualizar Paciente"}
        />
      </form>
    </div>
  )
}