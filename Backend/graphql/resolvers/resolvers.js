import  Task  from '../../models/Task'

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
        }
    },
    Mutation: {
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
        }
    }
}