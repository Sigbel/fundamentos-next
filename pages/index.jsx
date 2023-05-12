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
            <Navegador texto="Navegação #02" destino="/cliente/123" cor="blue"></Navegador>
            <Navegador texto="Componenete com Estado" destino="/estado" cor="#a45b71"></Navegador>
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#42a9a9"></Navegador>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a"></Navegador>
        </div>
    )
}

