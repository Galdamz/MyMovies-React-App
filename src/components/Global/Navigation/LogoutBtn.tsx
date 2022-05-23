import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const LogoutBtn = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/auth/login', { replace: true })
    }

    return (
        <Button
            colorScheme={'blue'}
            onClick={handleLogOut}
            minW={'full'}>
            Log Out
        </Button>
    )
}

export default LogoutBtn;