import React, { useMemo, useState } from 'react'
import { useWindowSize } from '../../hooks'
import styles from './styles.module.css'

const ServicesSection = () => {
  const servicesList = useMemo(
    () => [
      {
        title: 'Innovation Hubs & Spaces',
        image:
          'https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1675269670/Innovation_Hubs_Spaces_kwiygr.png',
        description: [
          'We conceptualize, design and build Innovation hub and spaces.',
          'Innovation hubs and spaces provide a physical space for collaboration and idea generation, offering resources, networking and a sense of community for Individuals, entrepreneurs and businesses. We foster a culture of innovation, facilitate cross-industry collaborations, and provide a low-risk environment for testing and validating new ideas.',
        ],
      },
      {
        title: 'Incubator & Accelerator Programs',
        image:
          'https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1675269675/Incubator_Accelerator_Programs_ypuurw.png',
        description: [
          'We organize and facilitate incubator & accelerator programs for startups and corporate organizations.',
          'Incubator and accelerator programs provide organizations & startups with mentorship, resources, and networking opportunities to help them grow and succeed. Through these programs we offer a wide range of support, from office space and funding to industry-specific expertise and access to potential investors. We help Individuals, startups & corporate businesses to develop and validate their business models, and to scale quickly in a low-risk environment.',
        ],
      },
      {
        title: 'Digital for Development Programs',
        image:
          'https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1675269670/Digital_for_Development_Programs_gfspgp.png',
        description: [
          "We develop, manage & monitor digital for development programs.",
          "Digital for development programs are initiatives aimed at using technology and digital tools to improve social, economic and political conditions in developing countries.",
          "We understand that in today's digital age, access to technology and digital skills is crucial for economic and social development. Our programs aim to empower individuals, communities and organizations by providing them with digital skills, resources and opportunities to improve their lives and drive growth.",
        ],
      },
      {
        title: 'Advisory & Consulting services',
        image:
          'https://res.cloudinary.com/dscuc72dw/image/upload/q_auto:good/f_auto/v1675269673/Advisory_Consulting_services_tamvpi.png',
        description: [
          "We provide contemporary innovation advisory and consulting services to individuals, startups & corporate organizations.",
          "We provide expert guidance and support to help navigate the challenges of innovation. From strategy development to implementation, these services offer the expertise and resources needed to identify opportunities, overcome obstacles and achieve business objectives. With the help of Ubulu Africa, organizations can take the necessary steps to stay competitive and innovate effectively.",
        ],
      },
    ],
    [],
  )

  const [serviceInDisplay, setServiceInDisplay] = useState(servicesList[0])

  const updateServiceInDisplay = idx => setServiceInDisplay(servicesList[idx])
  const windowSize = useWindowSize()

  return (
    <section className={styles.container}>
      <div className={styles.services_wrapper}>
        {windowSize.width > 850 && (
          <React.Fragment>
            <section className={styles.current_service}>
              <img src={serviceInDisplay.image} alt="name" />
            </section>

            <ul className={styles.service_list}>
              {servicesList.map((service, idx) => {
                const isActive = service.title === serviceInDisplay.title

                return (
                  <li
                    className={`${styles.service_list__item} ${isActive ? styles.active : ''}`}
                    key={idx}
                    onClick={() => updateServiceInDisplay(idx)}
                  >
                    <div className={styles.title}>
                      <p>{service.title}</p>
                    </div>
                    <img src={service.image} alt={service.title} />
                  </li>
                )
              })}
            </ul>
          </React.Fragment>
        )}
      </div>

      {windowSize.width > 850 && (
        <React.Fragment>
          <article className={styles.service_info__content}>
            <h2>{serviceInDisplay.title}</h2>
            {serviceInDisplay.description.map(desc => (
              <p key={desc}>{desc}</p>
            ))}
          </article>
        </React.Fragment>
      )}

      {windowSize.width <= 850 &&
        servicesList.map((service, idx) => {
          return (
            <React.Fragment key={idx}>
              <section className={styles.current_service}>
                <img src={service.image} alt="name" />
              </section>
              <article className={styles.service_info__content}>
                <h2>{service.title}</h2>
                {service.description.map(desc => (
                  <p key={desc}>{desc}</p>
                ))}
              </article>
            </React.Fragment>
          )
        })}
    </section>
  )
}

export { ServicesSection }
