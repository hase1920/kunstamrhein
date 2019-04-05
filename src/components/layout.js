import React from "react"
import { Link } from "gatsby"
import {Footer,Header2,Logo,Mach,Boxi} from './format'
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
        <h1>
          <Link style={{fontSize:'3.5rem',marginBottom:'10px',fontWeight:400,fontFamily:"'Roboto Slab',sans-serif"}}  to="/">
            {title}
          </Link>
        </h1>
        <Header2>  Netzwerk für <span style={{color:'#00BFFF'}}>&rarr;</span> Künstler &amp; temporäre <span style={{color:'#00BFFF'}}> &rarr; </span> Räume
          
          im UNESCO Welterbe Oberes Mittelrheintal </Header2>
        
        </div>
      )
    } else {
      header = (
        <div>
        <h1>
        <Link style={{fontSize:'3.5rem',marginBottom:'10px',fontWeight:400,fontFamily:"'Roboto Slab',sans-serif"}}  to="/">
            {title}
          </Link>
        </h1>
        
        <Header2>  
          Netzwerk für <span style={{color:'#00BFFF'}}>&rarr;</span> Künstler &amp; temporäre <span style={{color:'#00BFFF'}}> &rarr; </span> Räume
          im UNESCO Welterbe Oberes Mittelrheintal </Header2>
        </div>
      )
    }
    return (
      <div style={{
        display:'flex',
        flexDirection:'column',
        marginLeft: `auto`,
        marginRight: `auto`,
        marginTop:0,
        maxWidth: rhythm(44),
        padding: `0 ${rhythm(3 / 4)}`,
      }}>
      <Mach>
      
      <Boxi>
      <span style={{color:'#FFF'}}> &rarr; </span> <Link to="/mitmachen">Mitmachen</Link>
      </Boxi>
            
         </Mach>
      
     
        <header>{header}</header>
        <main>{children}</main>
       
        <Footer>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/kontakt">Kontakt</Link></li>
           <li> <Link to="/impressum">Impressum</Link></li>
           <li><Link to="/datenschutz">Datenschutz</Link></li>
           <li><Link to="/hilfe">Anleitung für die Selbstdarstellung</Link></li>
          </ul> 
      
      <img src="/z.svg" alt="Logo Zweckverband" />
          
         
          </Footer>
                 
          <Logo>
          <a target="_blank" rel="noopener noreferrer" href="http://www.zv-welterbe.de/"> <img src="/z.svg" alt="Logo Zweckverband" /></a>
            
          </Logo>
           
             
     
       </div>
     
    )
  }
}

export default Layout
