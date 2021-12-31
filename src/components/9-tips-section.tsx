export const NineTipsSection:React.FC = () => {

    const tipsList = [
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
    ]

    return (
        <section className="page-section">
            <article>
                <h2>Title</h2>
                <section>
                    {
                        tipsList.map(item=>{
                            return (
                                <article>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            )
                        })
                    }
                </section>
            </article>
        </section>
    )
}