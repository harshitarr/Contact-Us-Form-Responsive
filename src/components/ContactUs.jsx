import React ,{useState} from 'react'
import ContactImg from '../assets/contact-image3.svg'

const ContactUs = () => {

    const [formData , setFormData]= useState({
        name:'',
        company:'',
        contact:'',
        email:'',
        subject:'',
        message:'',
    })

    const [error , setError] = useState('')

    const handleChange = (e) =>{

        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const validatecontact = (contact) =>{

        const pattern = /^\+\d{1,3}\d{10}$/
        return pattern.test(contact)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const {name , company , contact , email , subject , message} = formData

        if(!name||!company||!contact||!email||!subject||!message){

            setError('Please fill all the fields !')
            return
        }

        if(!validatecontact(contact)){

            setError('Please enter a valid contact no with country code')
            return
        }

        console.log('Form Submitted !',formData)

        setError('')
        alert('Message Sent Successfully !')

        setFormData({

            name: '',
            company:'',
            contact:'',
            email:'',
            subject:'',
            message:'',

        })
    }


  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 flex items-center justify-center p-2'>

        <div className='bg-white shadow-lg rounded-lg flex w-100 max-w-4xl '>

            <div className='w-1/2 p-8 bg-white flex flex-col justify-center items-center rounded-l-lg border-2-89b6d9'>
               
               <img src={ContactImg} alt='contactimg' width={500} className='mb-6'/>
                
            </div>

            <div className='w-1/2 bg-[#89b6d9] text-white p-8 rounded-r-lg'>

              <form className='flex flex-col space-y-4' autoComplete='off' onSubmit={handleSubmit}>

                {error && <p className='text-red-500 font-medium'>{error}</p>}

                <div>

                    <label className='text-base font-semibold '>NAME</label>
                    <input type='text' name='name' value={formData.name} onChange={handleChange} autoComplete='off' placeholder='Full Name' className='w-full p-2 rounded text-black '/>

                </div>

                <div>

                    <label className='text-base font-semibold '>COMPANY NAME</label>
                    <input type='text'name='company' value={formData.company} onChange={handleChange}  placeholder='Company Name' autoComplete='off' className='w-full p-2 rounded text-black '/>

                </div>

                <div>

                    <label className='text-base font-semibold '>CONTACT NUMBER</label>
                    <input type='text' name='contact' value={formData.contact} onChange={handleChange}  placeholder='Eg: +91...' autoComplete='off' className='w-full p-2 rounded text-black '/>

                </div>

                <div>

                    <label className='text-base font-semibold '>EMAIL ADDRESS</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange}  placeholder='Enter a valid email' autoComplete='off' className='w-full p-2 rounded text-black '/>

                </div>

                <div>

                    <label className='text-base font-semibold '>MESSAGE SUBJECT</label>
                    <textarea name='subject' value={formData.subject} onChange={handleChange}  autoComplete='off' placeholder='Briefly describe the subject' className='w-full p-2 rounded text-black resize-none '/>

                </div>

                <div>

                    <label className='text-base font-semibold '>MESSAGE</label>
                    <textarea name='message' value={formData.message} onChange={handleChange}  autoComplete='off' placeholder='Write your message here' className='w-full p-2 rounded text-black resize-none h-28'/>

                </div>

                <button type='submit' className=' text-white  bg-[oklch(39.1%_0.09_240.876)] font-bold py-2 px-4 rounded hover:bg-[oklch(29.3%_0.066_243.157)] transition'>Send Message</button>

                


              </form>

             
            </div>

        </div>

    </div>
  )
}

export default ContactUs