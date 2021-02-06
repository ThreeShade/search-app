import React from 'react'

const Country = (props) => {
    return (
        <>
            {
                props.countries.map(countries =>
                    <h1>{countries.name}</h1>
                )
            }
        </>
    )
}
export default Country;