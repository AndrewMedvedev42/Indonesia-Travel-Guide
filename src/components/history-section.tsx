export const HistorySection:React.FC = () => {
    const historyCardsData = [
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    ]
    return (
        <section className="page-section">
            <article>
                <h2>History</h2>
                <section>
                    {
                        historyCardsData.map(item=>{
                           return (<article>
                                        <h3>{item.date}</h3>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </article>)
                        })
                    }
                </section>
            </article>
        </section>
    )
}