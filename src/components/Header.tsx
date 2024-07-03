import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex'>
            <Link to={'/'}>
                <div className='bg-red-900 w-28 text-white h-8 flex items-center justify-center m-8'>Home</div>
            </Link>
            <Link to={'/counter'} className='flex justify-center cursor-pointer m-4'>
                <div >
                    <div className='bg-slate-300 w-28 h-14 text-center flex items-center justify-center rounded-sm font-bold'>Counter</div>
                </div>
                <Link to={''}  className='flex justify-center cursor-pointer ml-8'>
                <div>
                    <div className='bg-slate-300 w-28 h-14 text-center flex items-center justify-center rounded-sm font-bold'>Next</div>
                </div>
            </Link>
            </Link>
        </div>
    )
}

export default Header
