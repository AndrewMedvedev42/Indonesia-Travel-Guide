export const HistorySection:React.FC = () => {
    const historyCardsData = [
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot history-slot-even"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot history-slot-even"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot history-slot-even"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot history-slot-even"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot history-slot-even"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot history-slot-even"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot history-slot-even"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot history-slot-even"},
        {date:"--/--/--", title:"Title", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", className:"history-slot"},
    ]
    return (
        <section className="page-section">
            <article className="">
                <h2>History</h2>
                <section className="history-list">
                    {
                        historyCardsData.map(item=>{
                           return (<article className={`${item.className}`}>
                                        <div className="slot">
                                            <h3 className="highlight-title">{item.date}</h3>
                                            <h4 className="slot-title">{item.title}</h4>
                                            <p className="slot-text">{item.text}</p>
                                            
                                        </div>
                                    </article>)
                        })
                    }
                </section>
            </article>
        </section>
    )
}