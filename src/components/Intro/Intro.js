import './Intro.css'
import me from '../../assets/me.png'
import Typing from 'react-typing-animation'

const AnimatedTypingComponent = () => (
  <Typing startDelay={1000}>
    <span className='intro'>movie lover</span>
    <Typing.Delay ms={1600} />
    <Typing.Backspace count={15} />
    <span className='intro'>dad of three</span>
    <Typing.Delay ms={1600} />
    <Typing.Backspace count={15} />
    <span className='intro'>video gamer</span>
    <Typing.Delay ms={1600} />
    <Typing.Backspace count={15} />
    <span className='intro' style={{textDecoration: 'underline'}}>web developer</span>
    <Typing.Delay ms={1000000000000}/>
  </Typing>
);


const Intro = () => (
    <div className='intro-container'>
        <h1>Hello! my name is Aaron Manwill</h1>
        <p>I am a&#xA0;</p><p><AnimatedTypingComponent /></p>
        <img src={me} alt=''/>
    </div>
)

export default Intro