export default {
    label: "hello-world-client",
    description: "A sample client automation script",

    triggers ({ on }) {
        return on('manual')
            .for('compose:record')
            .uiProp('app', 'compose')
    },

    // If you don't need the Compose helper, remove it
    async exec (args, { Compose }) {
        alert(`The current account name is: ${args.$record.values.AccountName}`)
    },
}