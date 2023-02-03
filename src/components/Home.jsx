import React from 'react'
import vg from '../assets/2.webp'
import {
    AiFillAmazonCircle,
    AiFillGoogleCircle,
    AiFillYoutube,
    AiFillInstagram
} from 'react-icons/ai';

const Home = () => {
    return (
        <>
        <div className='home' id='home'>
            <main>
                <h1>Edutech</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>
        <div className="home2">
            <img src={vg} alt="Graphics"/>
            <div>
                <p>We are one of the fastest growing tech Solution company with aim is to solve you'r everyday problems.Our aim to increase the problem solving skills in childrens </p>
            </div>
        </div>
        <div className="home3" id='about'>
            <div>
                <h1>Who we Are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi molestiae animi dolor ex ut quas necessitatibus, quia voluptatum nostrum inventore alias facilis et impedit quidem sint libero obcaecati est fugiat?
                Earum atque beatae praesentium sint itaque totam molestias? Nostrum consequatur accusantium necessitatibus iusto officiis optio et dolorem ea veniam aspernatur aut assumenda itaque dolores commodi, numquam amet quam? Magni, hic.
                </p>
            </div>
        </div>
        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: "0.3s",
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay: "0.5s",
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay: "0.7s",
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay: "0.9s",
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
        <div className="home5">
            <div></div>
        </div>
        <div className="home6">
            <div></div>
        </div>
        </>
    )
}

export default Home
