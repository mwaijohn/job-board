import Head from 'next/head'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
export interface Props {
    title?: string
}
export const Layout = ({ title, children }: PropsWithChildren<Props>) => {
    return (
        <>
            <Head>
                <title>{`${title ? `${title} · ` : ''}My job board`}</title>
            </Head>
            <nav>
                <Link href='/'>Home</Link> .  <Link href='/about'>About</Link>
            </nav>
            <main>{children}</main>
        </>
    )
}