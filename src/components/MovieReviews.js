// Code MovieReviews Here

import React from 'react'

export default function MovieReviews(props) {

    return ( 
        <div className="review-list">
            {props.reviews.map(review => { return (
                <React.Fragment>
                    <h1>{review.display_title}</h1>
                    <p>{review.summary_short}</p>
                </React.Fragment> )
                })
            }
        </div>
    )
    
}