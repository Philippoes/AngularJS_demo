demoApp.service("userService", function () {
    var collection = [
        {firstName: "Philip", lastName: "Zudemberg"},
        {firstName: "Thomas", lastName: "Ochman"},
        {firstName: "Amber", lastName: "Wilkie"},
        {firstName: "Raoul", lastName: "Diffouo"}
    ];
    return {
        users: function () {
            return collection;
        },
        add: function (object) {
            collection.push(object)
        }
    }
});