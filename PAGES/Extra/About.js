import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <SingleBanner
        heading="About Us"
        bannerimage= 'https://media.gettyimages.com/id/1208790371/photo/healthy-fresh-rainbow-colored-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=H04qVQPA3FG07EbfsCiiJbzLs6UHE9Nb48fWXn6Kwu4='
        />
        <div class="space1">
        </div>
        <section id="about-section">
            <div class="about-left">
                <img src="pexels-anna-shvets-3962285.jpg" alt="About Img"/>
            </div>

            <div class="about-right">
                <h4>My Story</h4>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis fugiat a dolorem at similique maxime dolorum dolore
                    enim dicta voluptatibus, illum recusandae, vel optio tempore
                    ipsum incidunt eum. Aspernatur, repellendus.
                </p>
                <div class="address">
                    <ul>
                        <li>
                            <span class="address-logo">
                                <i class="fas fa-paper-plane"></i>
                            </span>
                            <p>Address</p>
                            <span class="saprater">:</span>
                            <p>Jaipur, Rajasthan, India</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <i class="fas fa-phone-alt"></i>
                            </span>
                            <p>Phone No</p>
                            <span class="saprater">:</span>
                            <p>+91 987-654-4321</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <i class="far fa-envelope"></i>
                            </span>
                            <p>Email ID</p>
                            <span class="saprater">:</span>
                            <p>crowncoder@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div class="expertise">
                    <h3>My Expertise</h3>
                    <ul>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-html5"></i>
                            </span>
                            <p>HTML</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-css3-alt"></i>
                            </span>
                            <p>CSS</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-node-js"></i>
                            </span>
                            <p>Java Script</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                                <i class="fab fa-react"></i>
                            </span>
                            <p>React Js</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <div className='pgleft pgcommon'>
            <img src='https://media.gettyimages.com/id/519399792/photo/group-of-five-friends-walking-on-the-beach.jpg?s=612x612&w=0&k=20&c=Ifq2BXaz7BWAJH41KQlDwfTq10lOcflL3jDIQqETgys=' alt='noimg' />

            <div>
                <h1>Our Story</h1>
                <p>Veg Island is a startup started by 5 friends in their 4th year of Btech In the year 2023.It is an online store which provides farm fresh vegetables and fruits At your door step.</p>

            </div>

        </div>
        <div className='pgright pgcommon'>
            <img src='https://www.veganfirst.com/media/editorimages/VEGGIES.jpg' alt='noimg' />

            <div>
                <h1>Who are we</h1>
                <p>CURIOUS CODERS</p>

            </div>
        </div>
       
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About