import React from 'react'
import { connect } from 'frontity'
import Link from '@frontity/components/link'
import dayjs from 'dayjs'

const HomeBlogCards = ({title, excerpt, link, date}) => {
    let formattedDate = dayjs(date).format('MMM DD, YYYY');
    return(
        <>
            <div className="blog-card">
                <div className="blog-content-title">
                    <h3 style={{marginBottom: 2 + "px"}}><Link link={link}>{title} &#8663;</Link></h3>
                    <p style={{color: "grey", fontSize: 11 + "px", margin: 0 + "px"}}>{formattedDate}</p>
                </div>
                <div className="blog-content-description" dangerouslySetInnerHTML={{ __html: excerpt}}></div>
            </div>
        </>
    )
}

export default connect(HomeBlogCards)