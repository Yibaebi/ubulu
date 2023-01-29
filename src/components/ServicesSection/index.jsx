import React, { useState } from 'react'
import styles from './styles.module.css'
import {
  advisoryAndConsultingImage,
  digitalForDevImage,
  hubsAndSpacesImage,
  incubatorAndAcceleratorImage,
} from '../../assets'

import { EyeIcon } from '../../assets'

const ServicesSection = () => {
  const [serviceInDisplay, setServiceInDisplay] = useState({
    title: 'Innovation Hubs & Spaces',
    image: hubsAndSpacesImage,
    isActive: false,
    description: [
      'We conceptualize, design and build Innovation hub and spaces.',
      'Innovation hubs and spaces provide a physical space for collaboration and idea generation, offering resources, networking and a sense of community for Individuals, entrepreneurs and businesses. We foster a culture of innovation, facilitate cross-industry collaborations, and provide a low-risk environment for testing and validating new ideas.',
    ],
  })

  const [servicesList, setServicesList] = useState(
    () => [
      {
        title: 'Incubator & Accelerator Programs',
        image: incubatorAndAcceleratorImage,
        isActive: false,
        description: [
          'We organize and facilitate incubator & accelerator programs for startups and coperate organizations.',
          'Incubator and accelerator programs provide startups with mentorship, resources, and networking opportunities to help them grow and succeed. Through these programs we offer a wide range of support, from office space and funding to industry-specific expertise and access to potential investors. We help Individuals, startups & coperate business to develop and validate their business models, and to scale quickly in a low-risk environment.',
        ],
      },
      {
        title: 'Digital Development Programs',
        image: digitalForDevImage,
        isActive: false,
        description: [
          'We develop, manage & monitor digital for development programs, improve healthcare, food, agriculture, education and general wellbeing. We value using technology for development, providing digital skills and resources to drive growth and improve lives.',
          "We understand that in today's digital age, access to technology and digital skills is crucial for economic and social development. Our programs aim to empower individuals, communities and organizations by providing them with digital skills, resources and opportunities to improve their lives and drive growth.",
        ],
      },
      {
        title: 'Advisory & Consulting services',
        image: advisoryAndConsultingImage,
        isActive: false,
        description: [
          'We provide contemporary advisory and consulting services to individuals, startups & coperate organizations.',
          'We provide expert guidance and support to help navigate the challenges of innovation. From strategy development to implementation, these services offer the expertise and resources needed to identify opportunities, overcome obstacles and achieve business objectives. With the help of an advisory or consulting firm, organizations can take the necessary steps to stay competitive and innovate effectively.',
        ],
      },
    ],
    [],
  )

  const updateServiceInDisplay = idx => {
    const currentServiceInDisplay = { ...serviceInDisplay }
    setServiceInDisplay(servicesList[idx])
    setServicesList(list => {
      list[idx] = currentServiceInDisplay
      return list
    })
  }

  return (
    <section className={styles.container}>
      <div className={styles.services_wrapper}>
        <section className={styles.current_service}>
          <img src={serviceInDisplay.image} alt="name" />
        </section>

        <ul className={styles.service_list}>
          {servicesList.map((service, idx) => {
            return (
              <li className={styles.service_list__item} key={idx}>
                <div className={styles.title}>
                  <EyeIcon className={styles.eye_icon} onClick={() => updateServiceInDisplay(idx)} />
                  <p>{service.title}</p>
                </div>
                <img src={service.image} alt={service.title} />
              </li>
            )
          })}
        </ul>
      </div>
      <article className={styles.service_info__content}>
        <h2>{serviceInDisplay.title}</h2>
        {serviceInDisplay.description.map(desc => (
          <p key={desc}>{desc}</p>
        ))}
      </article>
    </section>
  )
}

export { ServicesSection }
