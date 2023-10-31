import React from 'react'
import man from '../../../public/Images/person-svgrepo-com.svg'
const Subscription = () => {
  const subscriptions= [{logo:man,title:"إنشيء حسابك",paragraph:"سجل الدخول بالبريد الالكتروني و كلمة المرور الخاصة بك"}
,{logo:man,title:"إنشيء حسابك",paragraph:"سجل الدخول بالبريد الالكتروني و كلمة المرور الخاصة بك"},
{logo:man,title:"إنشيء حسابك",paragraph:"سجل الدخول بالبريد الالكتروني و كلمة المرور الخاصة بك"},{logo:man,title:"إنشيء حسابك",paragraph:"سجل الدخول بالبريد الالكتروني و كلمة المرور الخاصة بك"}
]
  return (
    <div className='container ' style={{ marginTop:'6rem' }}>
        <div className='text-center mb-5'>
          <h3 className='text-white fs-3 fw-bolder mb-4'> اشترك الآن بخطوات بسيطة</h3>
          <p className='text-light fs-4 fw-light'> أسهل طريقة للاشتراك و مشاهدة المحتوى المُفضل لديك</p>
        </div>
        <div className=' row gy-5  justify-content-center mt-5'>
          {subscriptions.map((subscription,idx)=>(
              <div key={idx} className='col-11 col-sm-5 col-md-4 col-lg-3  d-flex flex-sm-column '>
                <div className="mb-sm-3  ms-3 align-self-center align-self-sm-start"style={{ width:'30px', height:'30px' }}>
                  <img src={subscription.logo} alt='man' width={30} height={30}/>
                </div>
                <div>
                <h3 className='text-white  fs-5  fw-bold mb-3'>{subscription.title}  </h3>
                 <p className='text-light  fw-light' style={{ fontSize:'10px',margin:'0' }}> {subscription.paragraph} </p>
                </div>
              </div>
            )
          )}
        
        </div>
    </div>
  )
}

export default Subscription
