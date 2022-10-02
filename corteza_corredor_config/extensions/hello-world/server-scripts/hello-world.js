export default {
    label: "hello-world-server",
    description: "A sample server automation script",

    // Use the ones you need, delete the rest
    triggers({on}) {
        return on('manual').for('system');

    },


// remove async if you aren't doing any async operations
    // use object destructuring for args and ctx
    exec(args, ctx) {
        const {values} = args.rawRecord
        console.log(values)
        let accName = values['AccountName'];
        const parts = accName.split(':')
        if (parts.length > 1) {
            accName = parts[0]
            const num = Number(parts[1])
            accName=accName+':'+(num+1)
        }
        else{
            accName = accName+':1'
        }
        values['AccountName'] = accName;

        const valuesArray = Object.keys(values).map(key => {
            return {name: key, value: values[key]}
        }).filter(item => item.value !== null).filter(item => !Array.isArray(item.value))

        ctx.ComposeAPI.recordUpdate({
                namespaceID: args.rawNamespace.namespaceID,
                moduleID: args.rawModule.moduleID,
                recordID: args.rawRecord.ID,
                values: valuesArray,
                records: [],
                labels: []
            }
        ).catch((err) => {
                console.log("error",err)
            return false
            }
        ).then(
            (res) => {
                console.log("success",res)
            }
        )


        return {
            result: "You look wonderful today!"
        }
    }
}