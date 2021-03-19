import Link from 'next/link'
import DetailCard from 'components/DetailCard'
import ArrowLeft from 'Icons/ArrowLeft'
import styles from 'styles/CharacterDetail.module.css'

const defaultEndpoint = 'http://swapi.dev/api/people'

export async function getServerSideProps({ query }) {
    const { id } = query
    const res = await fetch(`${defaultEndpoint}/${id}`)
    const data = await res.json()

    const result = Promise.all(data.films.map(async (filmURL) => {
        const res = await fetch(filmURL)
        const data = await res.json()

        return {
            title: data.title,
            release_date: data.release_date
        }
    })).then((filmsData) => {
        return {
            props: {
                data,
                filmsData
            }
        }
    })

    return result
}


const CharacterDetails = ({ data, filmsData }) => {
    const { name, height, gender, mass, hair_color, eye_color, skin_color, birth_year } = data

    return (
        <>
            <div className={styles.backContainer}>
                <Link href='/' className='text-decoration-none '>
                    <a className='d-flex align-items-center text-white cy-back-home'>
                        <ArrowLeft width={40} height={40} fill='#fff' className={styles.backIcon} />
                        <h5 className='d-none d-sm-block'>back to main list</h5>
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
                    films={filmsData}
                />
            </section>
        </>
    )
}



export default CharacterDetails;