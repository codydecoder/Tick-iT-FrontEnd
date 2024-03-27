import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer-container">
      <div id="footer-words">Created by:</div>
      <nav id='footer-nav'>
        <a href="https://github.com/CV2Tre" className="footer-links">CV2Tre <br/> <span className='footer-github'>GitHub</span></a>
        <a href="https://github.com/codydecoder" className="footer-links">CodyDecoder<br/><span className='footer-github'>GitHub</span></a>
        <a href="https://github.com/toddlf705" className="footer-links">toddlf705<br/><span className='footer-github'>GitHub</span></a>
        <a href="https://github.com/aquaj0y" className="footer-links">aquaj0y<br/><span className='footer-github'>GitHub</span></a>
      </nav>
    </div>
      
  )
}