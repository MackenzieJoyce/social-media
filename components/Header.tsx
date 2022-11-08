import Link from 'next/link';
import Button from '@mui/material/Button';

const Header = () => { 
    return(
        <>
            <h1>Social Media</h1>
            <Link href="/add-post">
            <Button variant="contained">Create Post</Button>

                {/* Create Post */}
            </Link>
        </>
    )
}

export default Header