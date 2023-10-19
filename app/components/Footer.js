export default function Footer () {
    const copy = String.fromCodePoint(0x00A9)

    return (
    <footer className="py-3 bg-indigo border-top text-white">
        <p className="text-center m-0">
           <strong>
                 
                <a className="nav-link" target="_blank" href="https://keinermendoza.pythonanywhere.com">
                {`${copy}`} website creado por Keiner Mendoza
                </a> 
            </strong> 
        </p>
    </footer>
    )
}