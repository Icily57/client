
import { Outlet } from 'react-router-dom'
import Card from './Card'
import AdminNav from '../components/AdminNavbar'

function AdminLayout() {
    return (
        <div className='bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950'>
            <AdminNav/>
                    <Card>
                        <Outlet />
                    </Card>
                </div>

    )
}

export default AdminLayout