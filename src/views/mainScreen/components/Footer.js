import React from 'react'
import Styles from '../../../public/css/mainScreen.module.css'
import facebook from '../../../public/Images/facebook-svgrepo-com.svg'
import instagram from '../../../public/Images/instagram-1-svgrepo-com.svg'
import youtube from '../../../public/Images/youtube-color-svgrepo-com.svg'
import twitter from '../../../public/Images/twitter-color-svgrepo-com.svg'
const Footer = () => {
  return (
        <div>
            <div className="row ms-0 me-0 justify-content-center">
                <a className={`col-auto ${Styles.link}`} href="#/collection/home" >تصفح </a>
                <a className={`col-auto ${Styles.link}`} href="#/contact-us">تواصل معنا</a>
                <a  className={`col-auto ${Styles.link}`} href="#/help-center">الدعم و المساعدة</a>
                <a  className={`col-auto ${Styles.link}`} href="#/devices">التطبيقات</a>
                <a  className={`col-auto ${Styles.link}`} href="#/terms-and-conditions">الشروط والأحكام</a>
                <a  className={`col-auto ${Styles.link}`} href="#/privacy-and-policy">سياسة الخصوصية</a>
                <a  className={`col-auto ${Styles.link}`} href="#/intellectual-property-rights">حقوق الملكية الفكرية</a>
                </div>
                <div className="mt-3 mt-xxl-5 d-flex justify-content-center">
                            <a  href="https://www.facebook.com/"  target="_blank" title="facebook" className={`${Styles.social_icon} mb-sm-2`}>
                            <img  src={facebook} alt="" width={25} height={25} className="rounded-circle"/>
                            </a>
                            <a href="https://mobile.twitter.com/" target="_blank" title="twitter" className={`${Styles.social_icon} mb-sm-2`}>
                            <img  src={twitter} alt="" width={25} height={25} className="rounded-circle"/>
                            </a>
                            <a  href="https://youtube.com/" target="_blank" title="youtube"  className={`${Styles.social_icon} mb-sm-2`}>
                            <img  src={youtube} alt="" width={25} height={25} className="rounded-circle"/>
                            </a><a  href="https://www.instagram.com/" target="_blank" title="instagram" className={`${Styles.social_icon} mb-sm-2`}>
                            <img  src={instagram} alt="" width={25} height={25} className="rounded-circle"/></a>
                </div>    
        </div>
  )
}

export default Footer
 