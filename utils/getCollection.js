export const getClient = async ({MongoClient}) => {
    const client = await MongoClient.connect('mongodb+srv://suyash:d17PcYvOi2xMbfGU@cluster0.rgmbh.mongodb.net/products?retryWrites=true&w=majority')
    
    return client
}

