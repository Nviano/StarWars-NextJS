import Link from 'next/link'
import DetailCard from 'components/DetailCard'
import ArrowLeft from 'Icons/ArrowLeft'
import styles from 'styles/CharacterDetail.module.css'

const defaultEndpoint = 'http://swapi.dev/api/people'

export async function getServerSideProps({ query }) {
    const { id } = query
    const res = await fetch(`${defaultEndpoint}/${id}`)
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}
const CharacterDetails = ({ data }) => {

    const { name, height, gender, mass, hair_color, eye_color, skin_color, birth_year, films } = data

    return (
        <>
            <div className={styles.backContainer}>
                <Link href='/' className='text-decoration-none '>
                    <a className='d-flex align-items-center text-white'>
                        <ArrowLeft width={40} height={40} fill='#fff' className={styles.backIcon} />
                        <h5>back to main list</h5>
                    </a>
                </Link>
            </div>
            <section>
                <DetailCard
                    name={name}
                    height={height}
                    gender={gender}
                    mass={mass}
                    hairColor={hair_color}
                    eyeColor={eye_color}
                    skinColor={skin_color}
                    birthYear={birth_year}
                    films={films}
                />
            </section>
        </>
    )
}



export default CharacterDetails;