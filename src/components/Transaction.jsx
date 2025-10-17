export default function Transaction(props) {
    return (
        <div className="flex justify-between border border-gray-300 p-3 first:rounded-t-lg last:rounded-b-lg">
            <span className="truncate w-45" title={props.description}>{props.description}</span>
            <span className={'font-bold ' + `${props.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>R${props.value}</span>
            <span>{props.type === 'income' ? 'Receita' : 'Despesa'}</span>
            <div className="buttons">
                <button className="border border-sky-500 rounded py-0.5 px-1 mr-2 hover:opacity-75 cursor-pointer">✏️</button>
                <button className="bg-red-500 text-white font-bold rounded px-2.5 py-0.75 cursor-pointer hover:opacity-75">x</button>
            </div>
        </div>
    )
}