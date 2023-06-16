import Link from "next/link";

export default function erro404() {
    return (
        <div>
            <h1>Você se perdeu 404</h1>
            <Link href='/'>
                ir para HOME
            </Link>
        </div>
    )
}