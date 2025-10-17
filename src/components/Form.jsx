import { useEffect, useRef } from "react"
import api from "../services/api"

export default function Form({ onCreateTransaction, transaction, onEdit }) {

    const descriptionRef = useRef(null)
    const valueRef = useRef(null)
    const typeRef = useRef(null)

    async function saveTransaction() {

        if (Object.keys(transaction).length === 0) {
            await api.post('/transaction', {
                description: descriptionRef.current.value,
                value: valueRef.current.value,
                type: typeRef.current.value
            })
        } else {
            await api.put(`/transaction/${transaction.id}`, {
                description: descriptionRef.current.value,
                value: valueRef.current.value,
                type: typeRef.current.value
            })

            onEdit()
        }

        descriptionRef.current.value = ''
        valueRef.current.value = ''
        typeRef.current.value = 'income'

        onCreateTransaction()
    }

    if (Object.keys(transaction).length !== 0) {
        descriptionRef.current.value = transaction.description
        valueRef.current.value = transaction.value
        typeRef.current.value = transaction.type
    }

    return (
        <form className="flex flex-col gap-3 mt-5">
            <input type="text" name="description" id="description" placeholder="Descrição" ref={descriptionRef} className="border border-gray-300 rounded-md px-2 py-1.5 text-gray-700" />
            <input type="number" name="value" id="value" placeholder="Valor (R$)" ref={valueRef} className="border border-gray-300 rounded-md px-2 py-1.5 text-gray-700" />
            <select name="type" id="type" ref={typeRef} className="border border-gray-300 rounded-md py-2 px-2 text-gray-700">
                <option value="income">Receita</option>
                <option value="expense">Despesa</option>
            </select>
            <button type="button" onClick={saveTransaction} className="bg-sky-500 p-2 mt-2 rounded-md cursor-pointer hover:bg-sky-400 transition text-white font-bold">{Object.keys(transaction).length === 0 ? 'Adicionar' : 'Atualizar'}</button>
        </form>
    )
}