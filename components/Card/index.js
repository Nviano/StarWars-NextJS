import Link from 'next/link'

export default function Card({ name, films, birthYear, id }) {
    return (
        <div className="card border-white text-white mb-3 " >
            <div className="card-header bg-transparent border-white">
                <Link href={`/character/[id]`} as={`/character/${id}`}>
                    <h4>{name}</h4>
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
