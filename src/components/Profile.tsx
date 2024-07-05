import Image from "next/image";
import styles from "./../app/page.module.css";
import portada from "./../assets/portada.jpeg"
import profile from "./../assets/profile.jpg"
import Interests from "./Interests";


const metrics = [
  {
    value:"12.5K",
    title:"Post"
  },
  {
    value:"300K",
    title:"Followers"
  },
  {
    value:"5K",
    title:"Following"
  }
]

export const Profile = () => {
  return (
    <div className={styles.container}>
              <div className={styles.distribution}>
                <div className={styles.imagesContainer}>
                  <Image
                    src={portada}
                    alt=""
                    fill
                    className={styles.profileCover}
                  />
                  <Image
                    src={profile}
                    alt=""
                    width={128}
                    height={128}
                    className={styles.profileImage}
                  />
                </div>
                <h1 className={styles.userName}>
                  David Cordoba
                </h1>
                <div className={styles.metricsContainer}>
                  {metrics.map( (m,id) => 
                    <div key={id} className={styles.metricsDistribution}>
                      <span>{m.value}</span>
                      <span >{m.title}</span>
                    </div>
                  )}
                  
                </div>

                <Interests/>

              </div>
            </div>
  )
}
