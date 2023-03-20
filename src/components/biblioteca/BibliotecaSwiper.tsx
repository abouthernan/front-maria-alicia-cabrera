import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import styles from '../../styles/BibliotecaSwiper.module.css'
import data from '../../tmp/biblioteca.json'

export function BibliotecaSwiper (): JSX.Element {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop
      pagination={{ clickable: true, dynamicBullets: true }}
      grabCursor
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      effect='fade'
      navigation
      modules={[Pagination, Navigation, EffectFade, Autoplay]}
      className='bibliotecaSwiper'
    >
    {data.map(({ id, img, title, note, slug }) => (
        <SwiperSlide key={id}>
         <div className={styles.container}>
          <div className={styles.book}>
            <img className={styles.book__img} src={img} alt="puede ser una caratula de una portada de un libro" />
          </div>
          <article className={styles.description}>
            <h2 className={styles.title}>{title}</h2>
            <h3 className={styles.subtitle}>Nota de la autora</h3>
            <p className={styles.note}>{note}</p>
            <nav className={styles.nav}>
              <a href={slug}>Descargar</a>
              <a href="#more">Ver más libros</a>
            </nav>
          </article>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}
