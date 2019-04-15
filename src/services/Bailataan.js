import ApolloClient, { gql } from 'apollo-boost'


// :4000/graphql ??? 
const client = new ApolloClient({
    // ei tietenkään toimi
    uri: '/api/graphql'
})
  

const query = gql`
{
    allEvents {
        name,
        id,
        dateActualFrom,
        availability
    }
}
`

const getAllKideApp = async () => {
    const response = await client.query({ query })
    console.log(response)
        return response.data.allEvents
}



export default { getAllKideApp }