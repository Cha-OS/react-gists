import React from 'react';

const Country = (props) => 
{
    // https://stackoverflow.com/questions/45784479/create-a-bunch-of-divs-via-an-array
    let languages = [];
    for (var i = 0; i < props.country.languages.length; i++) {
        languages.push(
            <li>
                {props.country.languages[i].name}
            </li>
        );
    }

    return (

    <div key={props.country.code}>
        <p>
        {props.country.emoji}
            <b>
            {`
                ${
                    props.country.native !== props.country.name
                    ? props.country.native + '(' + props.country.name + ')'
                    : props.country.name
                } 
            `}
            </b>

            with language:
            <ul>{languages}</ul>
        </p>
    </div>
    );
}

export default Country;