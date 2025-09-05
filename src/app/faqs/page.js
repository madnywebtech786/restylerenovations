import React from 'react'
import FAQsSection from '../components/FAQsSection'
import Breadcrumb from '../components/Breadcrumb'

export default function page() {
  return (
    <div>
        <Breadcrumb name={'FAQs'} />
        <FAQsSection />
    </div>
  )
}
