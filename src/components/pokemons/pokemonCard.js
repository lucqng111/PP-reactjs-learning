import { toast } from 'react-toastify';


const pokemonCard = ({number,name,avatar}) => {

    const handleCard = (name) => {
        window.location.href=`/pokemon/${name}`;
    };

    const capitalizeFirstLetter = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return(
    <article className="content-card" onClick={()=>handleCard(name)}>
        <figure className="fig-card">
            <img src={avatar} alt={name} className="img-card" />
            </figure>
            <div className="inf-card">
                <h2 className="inter-bold name-card">{capitalizeFirstLetter(name)}</h2>
                <h3 className="inter-medium number-card">#{number}</h3>
            </div>
    </article>
    )
}

export default pokemonCard
