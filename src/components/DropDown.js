import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";

const options = ["plastic surgery", "two", "three"];

const defaultOption = options[0];

const DropDownContainer = styled.div`
    width: 100% !important;
    height: 100%;
    max-height: 50px;

    > div > div > div,
    > div > div,
    > div {
        width: 100%;
        max-width: 250px;
        max-height: 50px;
        height: 100%;
        overflow: auto !important;
    }
`;

export default class DropDown extends Component {
    constructor(props) {
        super(props);
    }

    // this.top = this.top.bind(this);

    // top() {
    //     window.scrollTo(0, 0);
    // }

    render() {
        return (
            <DropDownContainer>
                <Dropdown
                    options={options}
                    onChange={this._onSelect}
                    value={defaultOption}
                    placeholder="Select an option"
                />
            </DropDownContainer>
        );
    }
}
