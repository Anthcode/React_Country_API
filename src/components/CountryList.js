import React, { useState } from 'react';
import { AnimatePresence } from "framer-motion";
import Modal from './Modal/Index'

export default function CountryList({ countries }) {
  const [addData, setAddData] = useState(32)
  const [countrySelect, setCountrySelect] = useState()
  const [modalOpen, setModalOpen] = useState(false)


  const open = () => setModalOpen(true)
  const close = () => setModalOpen(false)

  const handleCountry = (name) => {

    (modalOpen ? close() : open())
    setCountrySelect(name)
  }
  return (
    <>
      <div className="CountryList">
        <ul className="NameList">
          {countries.slice(0, addData).map((country) => (
            <li key={country.name.common} onClick={() => handleCountry(country)}>
              {country.flag} {country.name.common}
            </li>
          ))}
        </ul>

      </div>
      <button className="btn-next" onClick={() => setAddData(addData + 5)}>
        Add Next
      </button>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} countrySelect={countrySelect} setCountrySelect={setCountrySelect} />}
      </AnimatePresence>

    </>
  );
}