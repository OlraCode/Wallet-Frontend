import { useEffect, useState } from "react"
import Form from "./components/Form"
import Transaction from "./components/Transaction"
import api from "./services/api"

function App() {

  const [transactions, setTransactions] = useState([])
  const [transactionEdit, setTransactionEdit] = useState({})

  async function getTransactions() {
    let transactions = await api.get('/transaction')
    setTransactions(transactions.data)
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
      <div className="bg-white w-screen max-w-150 mt-3 m-auto rounded-md shadow-md px-8 py-4">
        <h1 className="text-3xl text-center font-semibold">Wallet</h1>

        <Form onCreateTransaction={getTransactions} transaction={transactionEdit} onEdit={() => setTransactionEdit({})}/>

        <div className="mt-8">
          {transactions.map((item) => (
            <Transaction value={item.value} type={item.type} description={item.description} id={item.id} key={item.id} onDelete={getTransactions} onEdit={setTransactionEdit} />
          ))}
        </div>
      </div>

  )
}

export default App
