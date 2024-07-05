import styles from "./../app/page.module.css";


const AboutMe = () => {
  return (
    <section className={styles.aboutMeContainer} >
        <h2 className={styles.aboutMeTitle}>
            Sobre mí
        </h2>
        <article className={styles.aboutMe}>
            <div>
                <p>
                    Me llamo David, tengo 23 años y soy de Argentina. Realicé mis estudios de desarrollo web en <strong>CoderHouse y SoyHenry</strong>. También, estoy en segundo año de la<strong> Lic. en Ciencias de la Computación.</strong>
                </p>

                <p>
                    Actualmente me estoy enfocando en el <strong>Back-end</strong>, donde disfruto construyendo la lógica detrás de las aplicaciones, asegurando su funcionalidad y rendimiento. Ultimamente estoy aprendiendo sobre NestJs, MySQL, Patrones de diseño, TypeORM y Typescript.
                </p>

                <p>
                    Tengo experiencia con ReactJs, NodeJs, Express, JavaScript, PostgreSQL, Metodologia Scrum, Docker y Tailwind.
                </p>
            </div>
        </article>
    </section>
)
}

export default AboutMe