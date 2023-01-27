import { about } from '../../portfolio'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import './About.css'

function About() {
    const { name, role, description, resume, social } = about

    return (
        <div className='about center'>
          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}
    
          {role && <h2 className='about__role'>A {role}.</h2>}
          <p className='about__desc'>{description && description}</p>
    
          <div className='about__contact center'>
            {resume && (
              <a 
                href={resume}>
                <span type='button' className='btn btn--outline'>
                  Resume
                </span>
              </a>
            )}
    
            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label='github'
                    className='link link--icon'
                  >
                    <FaGithub />
                  </a>
                )}
    
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label='linkedin'
                    className='link link--icon'
                  >
                    <FaLinkedin />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      )
}

export default About;