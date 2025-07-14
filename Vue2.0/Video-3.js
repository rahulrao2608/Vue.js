var myapp = new Vue({
    el: "#my-app",
    data: {
        name: "Online We Learning",
        playlist: "Vuejs"
    },
    methods: {
        run: function (message) {
            return "I am running " + message;
        },
        greet: function (dateTime) {
            return "Good " + dateTime;
        },
        valueAccess: function () {
            return this.name + this.playlist;
        },
    }
})