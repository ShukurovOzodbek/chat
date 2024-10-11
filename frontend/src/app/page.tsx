import Link from "next/link";

export default function Home() {
    return (
        <div className="">
            <h1>This is home page</h1>
            <Link href="/login">Login</Link>
        </div>
    );
}
