import React from 'react'
import { connect } from 'frontity'

import HomeBlogContainer from '../styles/HomeBlogContainer.style'
import BlogCards from './BlogCards'
import HomeBlogCards from './HomeBlogCards'

const HomeBlog = ({ state, actions }) =>{
    const data = state.source.get(state.router.link)
    const homeArray = data.items.filter((item, key) => key <= 2);
    return(
        <HomeBlogContainer>
            <section className="blog">
                <div className="section-header">
                    <div className="svg">
                        <div className="svg1"></div>
                        <div className="svg2"></div>
                    </div>
                    <h2>
                        Blog
                    </h2>
                </div>
                <div className="blog-section-contents">
                    <div className="blog-section-caption">
                        <p>I do usually write and share my 30+ knowlege with kids</p>
                    </div>
                    <div className="blog-contents-container">
                        <div className="blog-contents">
                        {
                            homeArray.map((blog) => {
                                const items = state.source.post[blog.id]
                                return(
                                    <HomeBlogCards key={items.id} link={blog.link} title={items.title.rendered} excerpt={items.excerpt.rendered} date={items.date} />
                                )
                            })
                        }
                            {/* <div className="blog-card">
                                <div className="blog-content-title">
                                    <h3><a href="#">Now, My Watch Has Ended &#8663;</a></h3>
                                </div>
                                <div className="blog-content-description">
                                    Over the past one year as the Developer Student Club Lead, I have worked with amazing individuals who have helped me in my path...
                                </div>
                            </div>
                            <div className="blog-card">
                                <div className="blog-content-title">
                                    <h3><a href="#">Now, My Watch Has Ended &#8663;</a></h3>
                                </div>
                                <div className="blog-content-description">
                                    Over the past one year as the Developer Student Club Lead, I have worked with amazing individuals who have helped me in my path...
                                </div>
                            </div>
                            <div className="blog-card">
                                <div className="blog-content-title">
                                    <h3><a href="#">Now, My Watch Has Ended &#8663;</a></h3>
                                </div>
                                <div className="blog-content-description">
                                    Over the past one year as the Developer Student Club Lead, I have worked with amazing individuals who have helped me in my path...
                                </div>
                            </div> */}
                        </div>
                        <div className="blog-btn-container">
                            <button className="blog-btn" onClick={actions.theme.toggleBlog}>Go to blog page</button>
                        </div>
                    </div>
                </div>
            </section>
        </HomeBlogContainer>
    )
}

export default connect(HomeBlog)