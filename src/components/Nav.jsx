import '../styles/nav.css'

export function Nav(){



    return(
        <section id='side'>
            <nav id='nav'>
                <ul>
                    <li id='home'><a href="/">Home</a></li>
                    <li id='about'><a href="/about">About</a></li>
                    <li id='portfolio'><a href="/portfolio">Portfolio</a></li>
                    <li id='contact'><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </section>
    )
}