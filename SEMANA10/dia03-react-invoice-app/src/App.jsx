import { useEffect, useState } from "react"
import { fetchInvoices } from "./services/invoices"

export default function App() {
  const [invoices, setInvoices] = useState([])

  useEffect(() =>{
    //console.log('Me ejecuto por primera vez')

   

    fetchInvoices()
    .then((invoices) => setInvoices(invoices))
  },[])

  return (
<>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    {JSON.stringify(invoices)}

</>
  )
}