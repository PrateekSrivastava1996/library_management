import React, { useState } from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const BuyModal = ({
  closeModal,
  show,
  handleBuy,
  bookingData,
  handleChange,
  daystorent,
  handleChangeDays,
  err
}) => {
  const { email, amount, days } = bookingData
  let subtitle
  const afterOpenModal = () => {
    subtitle.style.color = '#f00'
  }

  return (
    <Modal
      isOpen={show}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Books Modal'
    >
      <h2 ref={_subtitle => (subtitle = _subtitle)}>Buy on Rent</h2>
      <form>
        <label>Email: </label>
        <input type='text' name='email' value={email} onChange={handleChange} />
        <span style={{ color: 'red' }}>{err?.email}</span>
        <br />
        <label>Days: </label>
        <select value={days} onChange={handleChangeDays} name='days'>
          <option value='0'>Please Select days</option>
          {daystorent?.map(days => (
            <option value={days}>{days}</option>
          ))}
        </select>
        <span style={{ color: 'red' }}>{err?.days}</span>
        <br />
        <label>Total Amount: </label>
        <input type='text' name='amount' value={amount} disabled />
        <div>
          <button onClick={closeModal}>Close</button>
          <button onClick={handleBuy}>Book Now</button>
        </div>
      </form>
    </Modal>
  )
}
export default BuyModal
