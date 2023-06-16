import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>Alura case - home</h1>
            <Link href="/faq">
                ir para o FAQ
            </Link>
        </div>
    )
}