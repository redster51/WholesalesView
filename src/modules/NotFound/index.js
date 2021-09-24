import React from 'react';
import ErrorPage from '../../components/ErrorPage';


export default function NotFoundPage(){
    return <ErrorPage
        tittle='Error: 404 page not found'
        message="Sorry, the page you're looking for can't be accessed"
        number='4' />
};
