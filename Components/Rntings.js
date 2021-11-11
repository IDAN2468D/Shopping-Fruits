import React from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';


function Rntings() {
    return (
        <AirbnbRating
            count={11}
            reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
            defaultRating={11}
            size={20}
        />
    )
}

export default Rntings
