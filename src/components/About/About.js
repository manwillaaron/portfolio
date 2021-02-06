import './About.css'
import family from '../../assets/family.JPEG'

const About = () => (
    <div className='about-container'>
        <img className='family-img' src={family} />
        <p className='about-me'>
        Before learning web development, 
        most of my experience centered around sales. 
        I am very interested in sales psychology and 
        how the mind works which naturally drew me towards 
        selling. However, I eventually wanted to find a role 
        that I loved. Something that I woke up excited each 
        morning to do. Many of my sales roles required advanced 
        excel and reporting skills which helped guide me to web development. 
        I dove into coding while working through DevMountain and I have loved 
        every minute since then. Solving complex problems, inventing efficient 
        processes, and building something from the ground up is 
        has been extremely rewarding for me. When I am not coding, 
        I spend time woodworking, playing with my kids, 
        and watching movies with my wife. 
        <a href='https://www.yumpu.com/en/document/read/65280077/aaron-manwill-resume'>Click here&#xA0;</a>
        for my resume and contact information.
        </p>
    </div>
)

export default About