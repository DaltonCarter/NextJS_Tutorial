import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {

    const router = useRouter()

    const handleClick = () => {
        console.log('Order button pressed.')
        router.push('/product')
        //you can also use .replace and it will work like it does when used for a Link *See Product index.js line: 12
    }

    return(
        <div>
            <h1>Home page</h1>
            <Link href= '/blog'>
                Blog
            </Link>
            <Link href= '/product'>
                Products
            </Link>
            <button onClick={handleClick}>Place Order</button>
        </div>    
    )
}