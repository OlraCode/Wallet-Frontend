import Form from "./components/Form"
import Transaction from "./components/Transaction"

function App() {

  return (
      <div className="bg-white w-screen max-w-150 mt-3 m-auto rounded-md shadow-md px-8 py-4">
        <h1 className="text-3xl text-center font-semibold">Wallet</h1>

        <Form />

        <div className="mt-8">
          <Transaction description="Testeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" value="40,89" type="income"/>
          <Transaction description="Compra de uma televisão 80 polegadas das Casas Bahia" value="89,00" type="income"/>
          <Transaction description="Outro" value="50,00" type="expense"/>
          <Transaction description="Outro" value="40,00" type="expense"/>
        </div>
      </div>

  )
}

export default App
