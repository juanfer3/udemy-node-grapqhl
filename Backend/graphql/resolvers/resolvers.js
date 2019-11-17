import  Task  from '../../models/Task'
import  Client  from '../../models/Client'

export const resolvers = {
    Query: {
        hello: () => {
            return 'hello world with GraphQL'
        },
        greet(root,  args) {
            console.log(args.name);
            return `Hello ${args.name}`
        },
        async Tasks(){
            return await Task.find()
        },
        async Clients(){
            return await Client.find()
        },
        async getClient( _, _id){
            return await Client.findById(_id)
        }
    },
    Mutation: {
        // Tasks
        async createTask( _, { input } ){
            return await Task.create( input )
            console.log(task);
            return null
        },
        async updateTask(_, {_id, input}) {
            return await Task.findByIdAndUpdate(_id, input, {new: true});
        },
        async deleteTask(_, {_id}) {
            return await Task.findByIdAndDelete(_id);
        },

        //Clients
        async createClient(_, { input }){
            return await Client.create(input)
        }, 
        async updateClient(_, {_id, input }){
            return await Client.findByIdAndUpdate(_id, input, { new: true })
        }, 
        async deleteClient( {_, input} ){
            return await Client.findByIdAndDelete(_id)
        }
    }
}