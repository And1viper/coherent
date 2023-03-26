import Button from './Button';
import { useState } from "react"
import ContactDataServices from '../services/ContactDataServices';
import { useForm } from "react-hook-form";

const ContactUs = () => {
    const [status, setStatus] = useState("Submit");

    const[button, setButton] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        setStatus("Sending...");
        
        const details = {
            name: data.name,
            email: data.email,
            message: data.message,
            city: data.city,
            phone: data.phone,
        };
        
        setButton(true);

        ContactDataServices.sendForm(details)
            .then(response => {
                setStatus("Submit");
                response = status;
                alert("Сообщение отправлено!");
                setButton(false);
                reset();
            })
            .catch(e => {
                console.log(e);
                setButton(false);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} id="contact-form" className="bg-light-grey contact-form">
            <p className="form-header"><strong>Сообщение.</strong> Обычно отвечаем в течение рабочего дня.</p>
            <textarea {...register("message", {required: true, maxLength: 500}) } placeholder="Сообщение"/>
            {errors.message?.type === 'required' && <h5 className="form-error">Это поле должно быть заполнено!</h5>}
            <p><strong>Контакты</strong></p>
            <input {...register("name", {required: true, maxLength: 150}) } type="text" placeholder="Фамилия и Имя"/>
            {errors.name?.type === 'required' && <h5 className="form-error">Это поле должно быть заполнено!</h5>}
            <input {...register("city", {maxLength: 150}) } type="text" placeholder="Город"/>
            <input {...register("email", {required: true, maxLength: 150}) } type="email" placeholder="Эл. почта"/>
            {errors.email?.type === 'required' && <h5 className="form-error">Это поле должно быть заполнено!</h5>}
            <input {...register("phone", {required: true, maxLength: 150}) } type="phone" placeholder="Телефон"/>
            {errors.phone?.type === 'required' && <h5 className="form-error">Это поле должно быть заполнено!</h5>}
            <div className="split">
                <Button type="submit" disabled={button} buttonStyle="btn-form" buttonSize="btn-large">{button ? 'Отправляем' : 'Отправить заявку'}</Button>
            </div>
        </form>
    )
}

export default ContactUs
