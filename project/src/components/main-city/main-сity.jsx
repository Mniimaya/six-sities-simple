import TabsCity from "../tabs-city/tabs-city"; 
import Cities from "../cities/cities";
 
 export default function MainCity() {
    return (
        <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <TabsCity/>
            <Cities />
        </main>
    );
}