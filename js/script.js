
const { createApp } = Vue

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const app = createApp({

    data: () => ({
        listEmail: []
    }),
    // push 10 email nell'array listEmail
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get(endpoint).then(res => {
                this.listEmail.push(res.data.response)
            })
        }
    }

});

app.mount('#root')