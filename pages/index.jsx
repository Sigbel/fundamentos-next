import Link from 'next/link'
import Navegador from '@/src/components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            height: "100vh",
        }}>  
            <Navegador texto="Estiloso" destino="/estiloso" cor="#9400d3"></Navegador>
            <Navegador texto="Exemplo" destino="/exemplo" cor="crimson"></Navegador>
            <Navegador texto="JSX" destino="/jsx"></Navegador>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"></Navegador>
        </div>
    )
}

