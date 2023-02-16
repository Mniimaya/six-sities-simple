import PlaceCard from "../cities/place-card/place-card";

const DATA_PLACES_ITEMS = [
    {   key: "1",
        price: "120",
        cardName: "Beautiful &amp; luxurious apartment at great location",
        type: "Apartment",
        src: "img/apartment-01.jpg",
        class: "Premium",
        rating: "80%"
    },

    {   key: "2",
        price: "80",
        cardName: "Wood and stone place",
        type: "Private room",
        src: "img/room.jpg",
        class: "",
        rating: "80%"
    },
    {   key: "3",
        price: "132",
        cardName: "Canal View Prinsengracht",
        type: "Apartment",
        src: "img/apartment-02.jpg",
        class: "",
        rating: "100%"
    },
    {   key: "4",
        price: "180",
        cardName: "Nice, cozy, warm big bed apartment",
        type: "Apartment",
        src: "img/apartment-03.jpg",
        class: "Premium",
        rating: "80%"
    },
    {   key: "5",
        price: "80",
        cardName: "Wood and stone place",
        type: "Private room",
        src: "img/room.jpg",
        class: "",
        rating: "80%"
    },
];

export default function PlacesList() {
        let itemArray = DATA_PLACES_ITEMS.map((item) => <PlaceCard key={item.key} price={item.price} cardName={item.cardName} type={item.type} class={item.class} src={item.src}/>)

    return(
        <div className="cities__places-list places__list tabs__content">
            {itemArray}
      </div>
    );
}