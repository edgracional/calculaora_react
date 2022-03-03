import React, { Component } from "react";
import './Calculator.css'

import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {
    render() {
        return (
            <div className="caculator">
                <Display value={100} />
                <button label="AC"/>
                <button label="/"/>
                <button label="7"/>
                <button label="8"/>
                <button label="9"/>
                <button label="*"/>
                <button label="4"/>
                <button label="5"/>
                <button label="6"/>
                <button label="-"/>
                <button label="1"/>
                <button label="2"/>
                <button label="3"/>
                <button label="+"/>
                <button label="0"/>
                <button label="."/>
                <button label="="/>
            </div>    
               
       )
    }
}
