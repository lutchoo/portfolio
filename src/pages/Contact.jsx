import '../styles/contact.css'
import { MyMap } from '../components/MyMap'
export function Contact(){
    return(
        <>
        <main id="main-contact">
            <h1>Contact</h1>
            <section id="containeur">
                <section id='contacte'>
                    <form action="">
                        <input type="text" placeholder='name'/>
                        <input type="mail" placeholder='Email'/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>    
                </section> 
            </section>
            <section id='map'>
                <MyMap/>
                </section>
        </main>
        </>
    )
}