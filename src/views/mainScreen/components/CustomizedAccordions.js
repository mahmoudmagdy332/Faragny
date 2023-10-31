import  React,{useState } from 'react';
import Styles from '../../../public/css/mainScreen.module.css'

export default function CustomizedAccordions() {
  const Answers=[{question:"ماذا سأحصل في مقابل الاشتراك في WATCH IT؟",answer:"ستستمتع بمشاهدة المسلسلات و البرامج والأفلام والمسرحيات والأفلام الوثائقية المفضلة لديك على جهاز واحد أو عدة أجهزة بتجربة جديدة مكتبة مميزة من إنتاجات WATCH IT والمسلسلات والأفلام والبرامج التلفزيونية والأفلام الوثائقية الحصرية ومحتوى الأطفال وأيضاً جواهر ماسبيرو من أي مكان وفي أي وقت دون أي التزامات"},
  {question:"ماذا سأحصل في مقابل الاشتراك في WATCH IT؟",answer:"ستستمتع بمشاهدة المسلسلات و البرامج والأفلام والمسرحيات والأفلام الوثائقية المفضلة لديك على جهاز واحد أو عدة أجهزة بتجربة جديدة مكتبة مميزة من إنتاجات WATCH IT والمسلسلات والأفلام والبرامج التلفزيونية والأفلام الوثائقية الحصرية ومحتوى الأطفال وأيضاً جواهر ماسبيرو من أي مكان وفي أي وقت دون أي التزامات"},
  {question:"ماذا سأحصل في مقابل الاشتراك في WATCH IT؟",answer:"ستستمتع بمشاهدة المسلسلات و البرامج والأفلام والمسرحيات والأفلام الوثائقية المفضلة لديك على جهاز واحد أو عدة أجهزة بتجربة جديدة مكتبة مميزة من إنتاجات WATCH IT والمسلسلات والأفلام والبرامج التلفزيونية والأفلام الوثائقية الحصرية ومحتوى الأطفال وأيضاً جواهر ماسبيرو من أي مكان وفي أي وقت دون أي التزامات"}]
  const [flag,setFlag]=useState(null);
  const flageHandel=(idx)=>{
    flag===idx?setFlag(null):setFlag(idx)
  }
  return (
  <div>
    {Answers.map((answer,idx)=>(
      <div key={idx} onClick={()=>flageHandel(idx)} >
       <div className={Styles.accordion}>
          <p>{answer.question}</p>  
         <div className={Styles.arrow} style={{ borderColor:flag===idx&&'transparent transparent #5f7a90',transform:flag===idx&&' translateY(-70%)' }}></div>
       </div>
       <div className={Styles.answer} style={{ display:flag===idx&&'block'}}>
          <p>{answer.answer}</p>
       </div>
   </div>
    ))}
  </div>
  );
}