import './about.css'
import MissionValues from './missionValues/MissionValues'

const About = () => {
  return (
    <section className='min-h-[105vh] -mt-[5vh] min-w[100vw] text-white flex flex-col' style={{ padding: 0 }}>
      <MissionValues />
    </section>
  )
}

export default About