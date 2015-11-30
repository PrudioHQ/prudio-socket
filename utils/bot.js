// Connect all the bots to the Slack accounts.

module.exports = function(app, slack, App) {

    App.findAll({
        where: {
            active: true,
            server: app.get('server')
        }
    }).then(function(applications) {
        for (var i in applications) {
            if (applications.hasOwnProperty(i)) {
                var application = applications[i];
                slack.connect(application);
                console.log('Connected: ' + application.id);
            }
        }
    });
};
