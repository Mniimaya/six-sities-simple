export default function PlaceCard(props) {
    return(
        <article className="cities__card place-card">
        <div className="place-card__mark">
          <span>{props.class}</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="text.html">
            <img className="place-card__image" src={props.src} width="260" height="200" alt="Place imagezfv"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{props.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>

          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${props.rating}`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="text.html">{props.cardName}</a>
          </h2>
          <p className="place-card__type">{props.type}</p>
        </div>
      </article>
    );
}