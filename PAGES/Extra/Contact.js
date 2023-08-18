import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const Contact = () => {
    const [rating, setrating] = React.useState(0)

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
    return (
        <div className='extrapage'>
            <Navbar reloadnavbar={false}/>
            <SingleBanner
                bannerimage='https://st4.depositphotos.com/1011549/38164/i/950/depositphotos_381649610-stock-photo-fresh-tasty-vegetables-fruits-berries.jpg'
                heading="Contact Us"
            />
            <div class="space">
            </div>
          
            <section class='contact-section'>
    
            <div class="section-header">
              <div class="container">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos eaque doloremque, nulla mollitia facilis temporibus ullam voluptas nostrum consequatur? Fugiat vitae sint quo est eveniet perspiciatis eum asperiores ipsam.</p>
              </div>
            </div>
            
            <div class="container">
              <div class="row">
                
                <div class="contact-info">
                  <div class="contact-info-item">
                    <div class="contact-info-icon">
                      <i class="fas fa-home"></i>
                    </div>
                    
                    <div class="contact-info-content">
                      <h4>Address</h4>
                      <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
                    </div>
                  </div>
                  
                  <div class="contact-info-item">
                    <div class="contact-info-icon">
                      <i class="fas fa-phone"></i>
                    </div>
                    
                    <div class="contact-info-content">
                      <h4>Phone</h4>
                      <p>561-456-2321</p>
                    </div>
                  </div>
                  
                  <div class="contact-info-item">
                    <div class="contact-info-icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    
                    <div class="contact-info-content">
                      <h4>Email</h4>
                     <p>example@email.com</p>
                    </div>
                  </div>
                </div>
                
                <div class="contact-form">
                  <form action="" id="contact-form">
                    <h2>Send Message</h2>
                    <div class="input-box">
                      <input type="text" required="true" name=""></input>
                      <span>Full Name</span>
                    </div>
                    
                    <div class="input-box">
                      <input type="email" required="true" name=""></input>
                      <span>Email</span>
                    </div>
                    
                    <div class="input-box">
                      <textarea required="true" name=""></textarea>
                      <span>Type your Message...</span>
                    </div>
                    
                    <div class="input-box">
                      <input type="submit" value="Send" name=""></input>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </section>

            <Footer1 />
            <Footer2 />
            Contact</div>
    )
}

export default Contact