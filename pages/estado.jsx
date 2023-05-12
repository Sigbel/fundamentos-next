import Layout from "@/src/components/Layout";
import { useState } from "react";

export default function Estado() {
    
    const [numero, alteraNumero] = useState(0)

    function incrementar() {
        alteraNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementando</button>
        </Layout>
    )
}