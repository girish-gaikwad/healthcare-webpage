import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../images/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate';
import { useAuthStore } from '../store/store';

import styles from '../styles/Username.module.scss';
import bg from '../images/hero-bg.webp';

const Username = () => {
   const navigate = useNavigate();
   const setUsername = useAuthStore((state) => state.setUsername);
   console.log(useAuthStore((state) => state.setUsername));

   const formik = useFormik({
      initialValues: {
         username: 'example1235',
      },
      validate: usernameValidate,
      // validate only when click the submit button
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async (values) => {
         setUsername(values.username);
         navigate('/password');
      },
   });

   return (
      <div className="container-username">
         <Toaster position="top-center" reverseOrder={false}></Toaster>
         <div className="flex justify-center items-center h-screen">{/* <img src={bg} alt="bg" /> */}</div>

         <div className="flex justify-center items-center h-screen">
            <div /*className={styles.glass}*/>
               <div className="title flex flex-col items-center">
                  <h4 className="text-5xl font-bold">Hello Again!</h4>
                  <span className="py-4 text-xl w-2/3 text-center text-gray-500">Explore More by connecting with us.</span>
               </div>

               <form className="py-1" onSubmit={formik.handleSubmit}>
                  <div className="profile flex justify-center py-4">
                     <img src={avatar} /*className={styles.profile_img}*/ alt="avatar" />
                  </div>

                  <div className="textbox flex flex-col items-center gap-68">
                     <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder="Username" />
                     <button /*className={styles.btn}*/ type="submit">Let's Go</button>
                  </div>

                  <div className="text-center py-4">
                     <span className="text-gray-500">
                        Not a Member{' '}
                        <Link className="text-red-500" to="/register">
                           Register Now
                        </Link>
                     </span>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Username;
