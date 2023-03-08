
import "./_banner.scss"
export default function Banner ({image,text}){
    return (



<div className="banner">
<img className='banner__img'  src={image} alt="Forest Landscape"></img>
<div class="banner__background">
<p className="banner__text">{text}</p>
</div>
</div>

    );
}
