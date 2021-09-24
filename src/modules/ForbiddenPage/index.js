import React from 'react';
import ErrorPage from '../../components/ErrorPage';


export default function ForbiddenPage(){
    return <ErrorPage
        tittle='Error: 403 forbidden'
        message="Sorry, access not granded, connect with tech support"
        number='3' />
};
