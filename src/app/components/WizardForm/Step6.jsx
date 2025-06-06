function Step6({formData, setFormData, next, prev}) {
  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };

  return (
    <div className="space-y-4">
      <p className="text-center text-lg font-semibold">Living, ¿para cuántas personas?</p>
      <div className="flex justify-center gap-6">
        <div
          className={`flex w-96 cursor-pointer flex-col rounded-lg border p-4 text-center hover:bg-gray-100 ${
            formData.livingRoom === "" ? "border-gray-300" : ""
          }`}
        >
          <select name="livingRoom" onChange={handleChange}>
            <option value="Ninguno">Ninguno</option>
            <option value="6 personas">6 personas</option>
            <option value="12 personas">12 personas</option>
            <option value="10 personas">10 personas</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <button className="cursor-pointer rounded bg-gray-300 px-4 py-2" onClick={prev}>
          Anterior
        </button>
        <button className="cursor-pointer rounded bg-black px-4 py-2 text-white" onClick={next}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Step6;
