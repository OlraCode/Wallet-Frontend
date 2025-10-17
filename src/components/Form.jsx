export default function Form() {
    return (
        <form className="flex flex-col gap-3 mt-5">
            <input type="text" name="description" id="description" placeholder="Descrição" className="border border-gray-300 rounded-md px-2 py-1.5 text-gray-700" />
            <input type="text" name="value" id="value" placeholder="Valor (R$)" className="border border-gray-300 rounded-md px-2 py-1.5 text-gray-700" />
            <select name="type" id="type" className="border border-gray-300 rounded-md py-2 px-2 text-gray-700">
                <option value="income">Receita</option>
                <option value="expense">Despesa</option>
            </select>
            <button type="submit" className="bg-sky-500 p-2 mt-2 rounded-md cursor-pointer hover:bg-sky-400 transition text-white font-bold">Adicionar</button>
        </form>
    )
}