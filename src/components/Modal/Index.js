import React from 'react';
import {motion} from 'framer-motion'
import Backdrop from '../Backdrop/index'
import Country from '../Country'


const Modal = ({handleClose, countrySelect, setCountrySelect})=>{

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const close = ()=>{
  setCountrySelect(null)
  handleClose();
}

  return(
    <Backdrop onClick={handleClose}>
         <motion.div
          onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
          className="modal purple-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
            <Country countrySelect={countrySelect}/>
            <button className="btn-close" onClick={close} label="Close" >Close</button>
        </motion.div>
       
      </Backdrop>
  )
}
export default Modal