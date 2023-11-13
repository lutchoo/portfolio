import '../styles/about.css'
import { Card } from '../components/Card'


export function About(){

    return (

        <>
    <main id='main-about'>
    <h1>About Me</h1>
        <section id="containeur">
            <div id="motivation">
                <h2>Developpeur Full stack</h2>
                <p>Pendant mon parcours professionnel, j'ai eu l'opportunité d'explorer diverses facettes du monde du travail, et aujourd'hui, je suis ravi d'exercer une profession qui me correspond pleinement. Le domaine du web m'a toujours attiré</p>
                <p>Animé par ma passion, je m'investis pleinement dans mon travail et j'y prends un grand plaisir.</p>
                <div>Mes différentes expériences professionnelles et les formations que j'ai suivies m'ont permis d'acquérir des compétences en :
                    <div id='inline'><article id='html'></article><article id='css'></article><article id='java'></article><article id='php'></article><article id='wordpress'></article> <article id='symfony'></article> <article id='react'></article></div></div>  
                <p>Toutes ces expériences font de moi un jeune développeur web ambitieux. Je suis convaincu que mon sens des responsabilités, ma créativité, ma capacité à travailler en équipe, mon esprit d'initiative et mon autonomie dans la gestion du travail peuvent générer d'excellents résultats.</p>
                    
            </div>
            <div id='carde'><Card/></div>
            </section>
            <section id='about-bot'>
                <h2>Mes capacites</h2>
                <article id="capaciter">
                    <h5 id="front">Developpement front end</h5>
                    <h5 id="back">Developpement back end</h5>
                    <h5 id="responsive">Responsive design</h5>
                </article>
                
            </section>
    </main>
        </>
    )
}
