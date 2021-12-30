import { ShareSection } from "./share-section";

export const TopFivePlacesSection:React.FC = () => {

    const placesList = [
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image:"#"},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image:"#"},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image:"#"},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image:"#"},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image:"#"},
    ]

    return (
        <section>
            <article>
                <h2></h2>
                <section>
                    {
                        placesList.map(item=>{
                            return (
                                <article>
                                    <img src={item.image} alt={item.title}/>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </article>
                            )
                        })
                    }
                </section>
            </article>
            <ShareSection/>
        </section>
    )
}