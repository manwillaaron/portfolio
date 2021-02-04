import './Technologies.css'
import StackImg from '../StackImg'
import HTML from '../../assets/HTML.png'
import CSS from '../../assets/CSS.png'
import JAVASCRIPT from '../../assets/JAVASCRIPT.png'
import MONGO from '../../assets/MONGO.png'
import NEXT from '../../assets/NEXT.png'
import NODE from '../../assets/NODE.png'
import POSTGRES from '../../assets/POSTGRES.png'
import REACT from '../../assets/REACT.png'
import GIT from '../../assets/GIT.png'
import PYTHON from '../../assets/PYTHON.png'
import TYPESCRIPT from '../../assets/TYPESCRIPT.png'

const Technologies =()=>(
    <div className="Stack">
        <h1 className="section-label">Technologies</h1>
      <div className="stack-content">
        <StackImg img={HTML} name="HTML5" />
        <StackImg img={CSS} name="CSS3" />
        <StackImg img={JAVASCRIPT} name="Javascript" />
        <StackImg img={TYPESCRIPT} name="Typescript" />
        <StackImg img={REACT} name="React.js" />
        <StackImg img={NEXT} name="Next.js" />
        <StackImg img={NODE} name="Node.js" />
        <StackImg img={PYTHON} name="Python" />
        <StackImg img={REACT} name="React Native" />
        <StackImg img={POSTGRES} name="PostgreSQL" />
        <StackImg img={MONGO} name="MongoDB" />
        <StackImg img={GIT} name="Git" />
      </div>
    </div>
)

export default Technologies