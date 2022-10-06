import React from 'react'
import PlaceList from '../components/PlaceList'

const dummy_places = [
    {
        id: 'p1',
        title: 'taj mahal',
        description: 'this is at agra',
        imageurl: 'https://www.unciatrails.com/wp-content/uploads/2020/07/Taj2.jpg',
        address: 'agra west',
        location: {
            lat: 67.333,
            lng: -70.334
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'taj mahal',
        description: 'this is at agra',
        imageurl: 'https://www.unciatrails.com/wp-content/uploads/2020/07/Taj2.jpg',
        address: 'agra west',
        location: {
            lat: 67.333,
            lng: -70.334
        },
        creator: 'u1'
    }
]

const UserPlaces = () => {
    return <PlaceList items={dummy_places} />
}

export default UserPlaces