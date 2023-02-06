import React, { Component } from "react";
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';

type Props = {}

type State = {
    NumStar: number;
};

const MAX_STAR = 5;
class Btnrate extends Component<Props, State> {
    state = {
        NumStar: 0,
    };

    handleRate = (star : number) => {
        this.setState(() => ({
            NumStar: star,
        }));
    };
    render() {
        return (
            <div>
                {/* //cACH 1
                {[...Array(this.state.NumStar)].map((item, index) => (
                    <span key={index} onClick={() => this.handleRate(index + 1)}>
                        0</span>
                ))}
                {[...Array(MAX_STAR - this.state.NumStar)].map((item, index) => (
                    <span key={index} onClick={() => this.handleRate(index + this.state.NumStar + 1)}>
                        1</span>
                ))} */}
                 {[...Array(MAX_STAR)].map((item, index) => (
                    <span key={index} onClick={() => this.handleRate(index + 1)}>
                        {index < this.state.NumStar ? <AiFillStar/> : <AiOutlineStar/>}
                        </span>
                ))}
            </div>
        )
    }
}

export default Btnrate;