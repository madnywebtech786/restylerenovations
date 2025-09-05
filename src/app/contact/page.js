import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ContactForm from '../sections/ContactForm'

export default function page() {
  return (
    <div>
        <Breadcrumb name={'Contact Us'} />
        <ContactForm />
    </div>
  )
}
