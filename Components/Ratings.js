import React, { Component } from 'react';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';
import { COLORS } from '../StyleGuide';



export default class Ranting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            starCount: 3.5
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <View style={{ paddingHorizontal: 60, }}>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={this.state.starCount}
                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                    fullStarColor={'#FFCC00'}
                    containerStyle={{ backgroundColor: COLORS.gray2, paddingHorizontal: 20, paddingVertical: 30, borderRadius: 15, }}
                />
            </View>
        )
    }
}
