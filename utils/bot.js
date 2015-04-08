// Connect all the bots to the Slack accounts.

module.exports = function(app, slack, App) {
    App.find({ active: true, server: app.get('server') }, function(err, applications) {
        if (err) {
            console.error(err);
        }

        for (var i in applications) {
            if (applications.hasOwnProperty(i)) {
                var application = applications[i];
                slack.connect(application);
            }
        }
    });
};
