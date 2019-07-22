import React from 'react'
import './Footer.css';


function Footer(props) {
    return (
        <>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5 style={{textDecoration:"underline"}}>Social Links</h5>
            <ul class="footer-links">
              <li style={{borderBottom:"1px dotted"}}>Facebook</li>
              <li style={{borderBottom:"1px dotted"}}>Instagram</li>
              <li style={{borderBottom:"1px dotted"}}>LinkedIn</li>
              <li style={{borderBottom:"1px dotted"}}>Google Plus</li>
            </ul>
          </div>

          <div class="col-md-4">
            <h5 style={{textDecoration:"underline"}}>About Us</h5>
            <ul class="footer-links">
              <li style={{borderBottom:"1px dotted"}}>MEDIA</li>
              <li style={{borderBottom:"1px dotted"}}>Investors</li>
              <li style={{borderBottom:"1px dotted"}}>Career</li>
              <li style={{borderBottom:"1px dotted"}}>Sustainability</li> 
            </ul>
          </div>

          <div class="col-md-4">
            <h5 style={{textDecoration:"underline"}}>Our Chocolates</h5>
            <ul class="footer-links">
                <li style={{borderBottom:"1px dotted"}}>Our Chocolates</li>
                <li style={{borderBottom:"1px dotted"}}>Creation</li>
                <li style={{borderBottom:"1px dotted"}}>Excellence</li>
                <li style={{borderBottom:"1px dotted"}}>Lindor</li>
                <li style={{borderBottom:"1px dotted"}}>Hello</li> 
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </>
            )
        }
        
        export default Footer
