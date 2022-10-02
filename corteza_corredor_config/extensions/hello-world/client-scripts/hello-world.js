export default {
    label: "hello-world-client",
    description: "A sample client automation script",

    triggers ({ on }) {
        return on('manual')
            // vv Don't remove the next line vv
            .uiProp('app', 'compose')
    },

    // If you don't need the Compose helper, remove it
    async exec (args, { Compose }) {
        console.log('exec called')
        console.log(args)
        console.log(Compose)
    },
}