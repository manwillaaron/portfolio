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

                        Rent Ops is my capstone project.
                        I developed this property management
                        side to help my dad manage his various
                        rental properties. I used the following
                        technologies to complete the site:
                        socket.io, twilio, stipe, react, node, 
                        express, and others.
                        The MVP took about two weeks and I
                        have deployed improvements periodically.
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
                    As a group, four other students and I
                    created this dating website. I often took
                    lead on this project since I was one of
                    the more proficient members of the team.
                    This project was a great learning
                    experience that taught me how to
                    collaborate with other developers
                    using agile practices
                    and bring new ideas together to a
                    finished, scalable project.
                </p>
                </div>
            </section>
            <a href='https://refactoredumbrella.com'>RefactoredUmbrella.com</a>
        </container>
    </div>
)

export default Projects