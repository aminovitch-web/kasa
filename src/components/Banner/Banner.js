
import "./_banner.scss"
export default function Banner ({image,text}){
    return (



<div className="banner">
<p className="banner__text">{text}</p>
<img className='banner__img'  src={image} alt="Forest Landscape"></img>
</div>

    );
}
