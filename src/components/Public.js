import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">NotesApp</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Osaka Japan 〒543-0062: ZIP Code of Osaka, Oosakashitennojiku, OSAKA.</p>
                <address className="public__addr">
                    NotesApp<br />
                   Osaka Japan<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Ace</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public