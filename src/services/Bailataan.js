import ApolloClient, { gql } from 'apollo-boost'


const client = new ApolloClient({
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