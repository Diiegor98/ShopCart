const Layout = ({ children }) => {
    return(
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
    )
}

export default Layout;

//Layout funciona como encapsulador
//Se le pasa children como props para preparar los elementos que vayan por dentro 