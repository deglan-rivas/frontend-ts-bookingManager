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
    </div>
  )
}