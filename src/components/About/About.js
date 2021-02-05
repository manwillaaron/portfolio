import './About.css'
import family from '../../assets/family.JPEG'

const About = () => (
    <div className='about-container'>
        <img className='family-img' src={family} />
        <p className='about-me'>
            As my sales career progressed, I
            realized that field was not where
            I would work for the rest of my Career.
            I do enjoy sales psycology and how the 
            mind works, Its just I didn't love what 
            I was doing. I finally decided to dive
            in and have loved every minute of my
            time as a developer. I love finding
            solutions to complex problems, coming
            up with the most efficient way to do
            things, and building effective and
            efficient apps. When I'm not coding I
            love to wood work, spending time with 
            my family, and watch movies with my wife.
            If you have any questions please don't
            hesitate to get in touch!
        <a href='https://www.yumpu.com/en/document/read/65276041/aaronmanwillresume2021-2'>Click here&#xA0;</a>
        for my resume and contact information.
        </p>
    </div>
)

export default About