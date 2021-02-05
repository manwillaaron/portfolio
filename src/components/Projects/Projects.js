import './Projects.css'
import rentops from '../../assets/rent-ops-pic.png'
import refactoredumbrella from '../../assets/refactoredumbrella-pic.png'


const Projects = () => (
    <div className='projects-container'>
        <container className='big-project'>
            <h1>Rent-ops</h1>
            <section>
                <img className='rent-ops-img' src={rentops} />
                <div>
                    <p>
                        this is my capstone project. It is a property management site.
                        That helps manage properties and renters in diffrent ways.
                        I used technologies including socket.io,
                        twilio, stipe, React, node, express, and others.
                        it took me about two weeks to build out the mvp and
                        I have been making improvements since then and
                        deploying new changes periodically.
                    </p>
                </div>
            </section>
            <a href='https://rent-ops.com'>RentOps.com</a>
        </container>
        <container className='big-project'>
            <h1>Refactored Umbrella</h1>
            <section>
                <img className='rent-ops-img' src={refactoredumbrella} alt='' />
                <div><p>
                    This is a dating website that a group of four students
                    and I created. I did tend to lead this group in building
                    this project just because I was a little more advanced
                    with web development. It was an incredably fun project
                    to work on with other developers.
                </p>
                </div>
            </section>
            <a href='https://refactoredumbrella.com'>RefactoredUmbrella.com</a>
        </container>
    </div>
)

export default Projects