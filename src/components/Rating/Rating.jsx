import React from "react";
import { ReactComponent as Star } from "./Icons/star.svg"
import { ReactComponent as StarFill } from "./Icons/starFill.svg"

export const Rating = ({rate}) => {

    function Rate(rate) {
        const rating = rate.rate
            if (rating === 5) {
            return <><StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    </>
        } else if (rating === 4) {
            return <><StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <Star/>
                    </>
        }
        else if (rating === 3) {
            return <><StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <Star/>
                    </>
        }
        else if (rating === 2) {
            return <><StarFill/>
                    <StarFill/>
                    <Star/>
                    <Star/>
                    <Star/>
                    </>
        }
        else if (rating === 1) {
            return <><StarFill/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    </>
        }
    }
    
    return  <><Rate rate={rate}/>
    </>
}
