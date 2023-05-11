import styles from '../src/styles/Estiloso.module.css'
import Layout from '@/src/components/Layout'
import Link from 'next/link'

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de css modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}