import api from "../services/api"

export default function Transaction(props) {

    async function deleteTransaction() {
        await api.delete(`/transaction/${props.id}`)
        props.onDelete()
    }

    function setTransactionEdit() {
        const transaction = {
            id: props.id,
            description: props.description,
            value: props.value,
            type: props.type
        }
        props.onEdit(transaction)
    }

    return (
        <div className="flex justify-between border border-gray-300 p-3 first:rounded-t-lg last:rounded-b-lg">
            <span className="truncate w-45" title={props.description}>{props.description}</span>
            <span className={'font-bold ' + `${props.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>R${props.value}</span>
            <span>{props.type === 'income' ? 'Receita' : 'Despesa'}</span>
            <div className="buttons">
                <button onClick={setTransactionEdit} className="border border-sky-500 rounded py-0.5 px-1 mr-2 hover:opacity-75 cursor-pointer">✏️</button>
                <button onClick={deleteTransaction} className="bg-red-500 text-white font-bold rounded px-2.5 py-0.75 cursor-pointer hover:opacity-75">x</button>
            </div>
        </div>
    )
}