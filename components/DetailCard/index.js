import styles from 'styles/DetailCard.module.css'

const DetailCard = ({ name, height, gender, mass, hairColor, eyeColor, skinColor, birthYear, films }) => {

    const getTimeAgo = (releaseDate, currentDate) => {
        const splitDate = releaseDate.split('-')
        const releaseYear = splitDate[0]
        const result = currentDate - Number(releaseYear)

        return result
    }

    const currentYear = new Date().getFullYear()

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h2>{name}</h2>
                </div>
                <div className={styles.body}>
                    <div className="row row-cols-md-3 row-cols-2 no-gutters">
                        <div className="col p-md-3 p-2 cy-character-height">
                            <strong>Height:</strong> {height}
                        </div>
                        <div className="col p-md-3 p-2">
                            <strong>Gender:</strong> {gender}
                        </div>
                        <div className="col p-md-3 p-2">
                            <strong>Mass:</strong> {mass}
                        </div>
                        <div className="col p-md-3 p-2">
                            <strong>Hair color:</strong> {hairColor}
                        </div>
                        <div className="col p-md-3 p-2">
                            <strong>Eye color:</strong> {eyeColor}
                        </div>
                        <div className="col p-md-3 p-2">
                            <strong>Skin color:</strong> {skinColor}
                        </div>
                        <div className="col p-md-3 p-2">
                            <strong>Birth year:</strong> {birthYear}
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <h3>Films</h3>
                    <ul>
                        {films.map((film, index) => (
                            <li key={index} className='cy-li'>
                                <strong>{film.title}:</strong>
                                <span className='pl-2'>{getTimeAgo(film.release_date, currentYear)} years ago</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailCard