import { Footer, Navbar } from '.'


export const Layout = ({children}) => {

    return (
        <div>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}