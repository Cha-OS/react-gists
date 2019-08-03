
import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Country from './Country';

const Countries = () => ( 
    <Query
        // Country provide a query to the GraphQL server
        query={gql`
        {
            # get **'countries'** data
            countries {
                # with parameters
                name
                native
                emoji
                currency
                languages {
                    code
                    name
                }
            }
        }
        `} 
    >
    {
        // event handlers for loading data
        ({ loading, error, data }) => {
            // still loading
            if (loading) return <p>Loading...</p>;
            // error occured
            if (error) return <p>Error :( {JSON.stringify(error)}</p>;
            // else
            return data.countries.map((currentCountry) => (
                <Country country={currentCountry} />
            ));

            /* return data.countries.map(
                // map each data entry into JSX
                ({ id, title, author, description, topic, url }) => (
                    <div key={id}>
                    <p>{`${title} by ${author}`}</p>
                    </div> )
                ); 
            */
        }
    }
    </Query>
);

export default Countries;