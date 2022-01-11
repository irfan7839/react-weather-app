import React from 'react'
import styled from 'styled-components';


const WeatherLogo=styled.img `
width:140px;
height:140px;
margin:40px auto;
`;
const SearchBox=styled.form `
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius:2px;
color:black;
font-size:18px;
font-weight:bold;
margin:20px auto;
& input{
    padding:10px;
    font-size:14px;
    border:none;
    outline:none;
    font-weight:bold
}
& button{
    color:white;
    background-color:black;
    padding:10px;
    font-size:14px;
    border:black solid 1px;
    outline:none;
    font-weight:bold;
    cursor:pointer;
}
`;

const ChooseCityLabel=styled.span `
color:black;
font-size:18px;
font-weight:bold;
margin:10px auto;

`;
function CityComponents(props) {
    const {updateCity,fetchWeather}=props;
  
    return (
        <>
            <WeatherLogo src="/icons/perfect-day.svg"/>
            <ChooseCityLabel>Find Weather of your City</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder='city' onChange={(e)=>updateCity(e.target.value)} />
                <button type="submit">Search</button>
            </SearchBox>
        </>
    )
}

export default CityComponents
