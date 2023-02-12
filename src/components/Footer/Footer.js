import style from './Footer.module.css';
import { FaFacebookSquare, FaTwitterSquare, FaPlusSquare, FaInstagramSquare, FaLocationArrow, FaRegEnvelope, FaMobileAlt, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className='lg:pt-8'>
                <div className="md:grid grid-cols-5 lg:grid-cols-5 gap-4">
                    <div >

                        <h3 className={style.brandlogo}><FaPlusSquare className={style.plus} /> Moristan</h3>
                        <ul className='mt-6 mb-2'>
                            <li><a className={`${style.navlink}`} href="#"><FaRegEnvelope className={`${style.w30} text-2xl inline-block mr-2`} />fortis@email.com </a></li>
                            <li><a className={`${style.navlink}`} href="#"><FaMobileAlt className={`${style.w30} text-2xl inline-block mr-2`} />+ 230 394 3384 </a></li>
                            <li><a className={`${style.navlink}`} href="#"><FaLocationArrow className={`${style.w30} text-2xl inline-block mr-2`} /> Gladstone, Rose Hill</a></li>
                        </ul>

                        <div className="flex items-center">
                            <a href="#" className={style.navlink}>
                                <FaFacebookSquare className='text-3xl mr-3' />
                            </a>
                            <a href="#" className={style.navlink}>
                                <FaLinkedin className='text-3xl mr-3' />
                            </a>
                            <a href="#" className={style.navlink}>
                                <FaInstagramSquare className='text-3xl mr-3' />
                            </a>
                            <a href="#" className={style.navlink}>
                                <FaTwitterSquare className='text-3xl mr-3' />
                            </a>
                        </div>

                    </div>
                    <div >
                        <h6 className={style.linkHeader}>Talk to us</h6>
                        <ul>
                            <li><a className={style.navlink} href="#">About Us</a></li>
                            <li><a className={style.navlink} href="#">Registration</a></li>
                            <li><a className={style.navlink} href="#">Blog</a></li>
                            <li><a className={style.navlink} href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div >
                        <h6 className={style.linkHeader}>Support</h6>
                        <ul>
                            <li><a className={style.navlink} href="#">Documentation</a></li>
                            <li><a className={style.navlink} href="#">FAQs</a></li>
                            <li><a className={style.navlink} href="#">Condition</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 ...">
                        <h6 className={style.linkHeader}>Newsletter</h6>
                        <p className={style.newsP}>Get out offers & News in your inbox</p>
                        <div className={style.inputGroup}>
                            <input className={`w-full ${style.email}`} type="email" placeholder='Enter email' />
                            <button className={style.subButton} >Subscription</button>
                        </div>
                    </div>
                </div>
                <hr className='mt-6' />
            </div >
        </div>
    );
};

export default Footer;