
export default function NewsArticleList({articles}) {
    return(
        <>
         <h1>List of News Articles</h1>

        {
            articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id}: {article.title} | {article.catagory}
                        </h2>
                    </div>
                )
            })
        }
        </>
    )

}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return {
        props: {
            articles: data
        }
    }
}