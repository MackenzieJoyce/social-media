import Link from 'next/link';

const Header = () => { 
    return(
        <>
            <h1>Social Media</h1>
            <Link href="/add-post">Create Post</Link>
        </>
    )
}

export default Header