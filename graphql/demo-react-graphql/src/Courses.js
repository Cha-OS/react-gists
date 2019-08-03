import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Course from './Course';

const Courses = () => ( 
    <Query
        // Course provide a query to the GraphQL server
        query={gql`
            {
                # get **'allCourses'** data
                allCourses {
                    # with following parameters
                    id
                    title
                    author
                    description
                    topic
                    url
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
            return data.allCourses.map((currentCourse) => (
                <Course course={currentCourse} />
            ));

            /* return data.allCourses.map(
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

export default Courses;