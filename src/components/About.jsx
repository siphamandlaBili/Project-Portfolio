import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' style={{paddingLeft:"30px"}} id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
          Web Dev enthusiast, who"s currently an IT student at the University of Johannesburg. Skilled in building websites, business analysis,Management, and Leadership.Strong analytical skills and love working with small business to build their online presence. Also a chilled guy to be around ,always game for a movie marathon (lol).
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;