import Card from '../Lasting_Figuers/Card';
import styles from './form.module.css'
import {useEffect, useRef, useState} from 'react';
import { addDataToLocalStorage, readDataFromLocalStorage } from '../../dummy_data';

function NewMeetupForm(props){
const nameInputRef=useRef();
const imageInputRef=useRef();
const birthInputRef=useRef();
const talentInputRef=useRef();
const [dummy_data , setDummyData] = useState([])

const descriptionInputRef=useRef();
    function SubmitHandler(e){
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const entereBirth = birthInputRef.current.value;
        const enteredTalent = talentInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const FigureData = {
            id:Date.now(),
            title: enteredName,
            image: enteredImage,
            birthday: entereBirth,
            face:enteredTalent,
            description: enteredDescription,
        };
       addDataToLocalStorage(FigureData , setDummyData)
    }


    useEffect(() => {
        readDataFromLocalStorage(setDummyData)
    } , [])
    return (
        <Card>
            <form className={styles.form} onSubmit={SubmitHandler} >
                <div className={styles.control}>
                    <label htmlFor='name'>نام و نام خانوادگی</label>
                    <input type='text' required id='name' ref={nameInputRef}/>
                </div>
                
                <div className={styles.control}>
                    <label htmlFor='image'>تصویر</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>
                
                <div className={styles.control}>
                    <label htmlFor='birth'>تاریخ تولد</label>
                    <input type='text' required id='birth' ref={birthInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='talent'>استعداد</label>
                    <input type='text' required id='talent' ref={talentInputRef}/>
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>توضیحات</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={styles.actions}>
                <button  type='submit'>اضافه کردن</button>
                </div>
            </form>
        </Card>

    );
}
export default NewMeetupForm;