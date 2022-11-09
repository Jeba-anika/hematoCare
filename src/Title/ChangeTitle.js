import { Helmet } from "react-helmet-async"

export const TitleChange = (page)=>{
    return  <Helmet>
        <title>HematoCare- {page}</title>
    </Helmet>
}