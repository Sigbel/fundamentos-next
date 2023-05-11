import Cabecalho from "../src/components/Cabecalho"
import Layout from "@/src/components/Layout"

export default function Exemplo() {
    return (

        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprende Next na Prática"/>
        </Layout>
    )
}