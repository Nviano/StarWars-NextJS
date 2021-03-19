import Link from 'next/link'

export default function Card({ name, films, birthYear, id }) {
    return (
        <div className="card border-white text-white mb-3 ">
            <div className="card-header bg-transparent border-white">
                <Link href={`/character/[id]`} as={`/character/${id}`} >
                    <a className='text-decoration-none'>
                        <h4 className='text-warning font-weight-bolder cy-character'>{name}</h4>
                    </a>
                </Link>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-4 col-6">{films.length} Films</div>
                    <div className="col-sm-8 col-6 d-flex justify-content-end">Birth year: {birthYear}</div>
                </div>
            </div>
        </div>
    )
}
