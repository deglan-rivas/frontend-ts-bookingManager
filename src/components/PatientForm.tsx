export default function PatientForm() {
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
      >
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm uppercase font-semibold">
            Paciente
          </label>
          <input type="text" id="name"
            className="block border border-gray-200 px-3 py-3 rounded-md w-full bg-gray-50"
            placeholder="Nombre del Paciente"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="owner" className="text-sm uppercase font-semibold">
            Propietario
          </label>
          <input type="text" id="owner"
            className="block border border-gray-200 px-3 py-3 rounded-md w-full bg-gray-50"
            placeholder="Nombre del Propietario"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm uppercase font-semibold">
            Email
          </label>
          <input type="text" id="email"
            className="block border border-gray-200 px-3 py-3 rounded-md w-full bg-gray-50"
            placeholder="Email de Registro"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="text-sm uppercase font-semibold">
            Fecha Alta
          </label>
          <input type="date" id="date"
            className="block border border-gray-200 px-3 py-3 rounded-md w-full bg-gray-50"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="synthomps" className="text-sm uppercase font-semibold">
            Síntomas
          </label>
          {/* <textarea name="synthomps" id="synthomps" cols="10" rows="10" */}
          <textarea name="synthomps" id="synthomps"
            className="block border border-gray-200 px-3 py-3 rounded-md w-full bg-gray-50"
            placeholder="Síntomas del paciente"
          >
          </textarea>
        </div>

        <input type="submit"
          className="py-2 bg-indigo-700 text-white uppercase font-semibold text-center w-full rounded-md cursor-pointer hover:bg-indigo-800"
          value={"Guardar Paciente"}
        />
      </form>
    </div>
  )
}