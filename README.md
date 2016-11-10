# Coming Attractions

[![Build Status](https://travis-ci.org/18F/coming-attractions.svg?branch=master)](https://travis-ci.org/18F/coming-attractions)

<pre><code style="text-align:center;">******************************************************************
******************************************************************
***                                                            ***
***                _   _          o        _,                  ***
***               /   / \_/|/|/|  | /|/|  / |                  ***
***               \__/\_/  | | |_/|/ | |_/\/|/                 ***
***          _, _|__|_  ,_   _,   _ _|_ o  (|        ,         ***
***         / |  |  |  /  | / |  /   |  | / \_/|/|  / \_       ***
***         \/|_/|_/|_/   |/\/|_/\__/|_/|/\_/  | |_/ \/        ***
***                                                            ***
******************************************************************
************* A #g-devops & #g-frontend collaboration ************
</code></pre>

For those moments when you need to redirect traffic to a static site for any
number of reasons that share the same thing in common, _alerting your users in a
quick and easy way during an incident response_. The incident could be scheduled
downtime, the lifetime of your application abruptly ends, or your service is on
fire and you'd like to let your users have more information than a blank page or
application error page.

## Technologies used

- [Node](https://nodejs.org) for development.
- [`cf-cli` :cloud:.gov](https://cloud.gov) for deployment.
    - [scaleover-plugin](https://github.com/krujos/scaleover-plugin) for traffic
      routing.

### History

This project was created to facilitate 18F teams to respond to incidents that
affect the uptime for an application hosted on Cloud.gov. It utilizes the
[CloudFoundry Static Buildpack][cf-static-buildpack] in order to serve a
multi-route single page which can handle any route that your application usually
responded via a status `200` with an information page. The documentation found in
this repository comes with some opinions of what your static page should look
like. The recommended for the multi-route single static page to look like your
project with a special section containing a message area. But ultimately such
decisions fall on the shoulders and minds of the team, project, and time
commitments.

[cf-static-buildpack]: https:// "CloudFoundry Static Buildpack"

## Development

In order to work on this project, it's recommended that the source code be
maintained in a separate repository. It does not necessarily need to be a
Github-type of fork. It can be a completely separate project with a name more
appropriate for your needs.

A good example is if you were working on an project called `info-sharing-gov`
you would create a new Github repository with the contents of this repository
called `info-sharing-gov-status-page`. This would allow you to develop the
status page in tandem with the rest of the project should an incident occur.

Since the fork of this project will be cut off from receiving any upstream
changes, this project is considered more of a starting point. Any new features
may be copied manually into the _"forked"_ repository and will be additions
rather than modifications of existing code.

### Recreating your application shell

> TODO documentation on designing an application shell based on your current
> application. #g-frontend help wanted

### Considering page size and dependencies

> TODO Talk about what the critical CSS and JS for the application should be
> so that Coming Attraction pages load quick and fast. #g-frontend help wanted
> Analytics or even Ethnio payloads might be interesting to include here.

## Deployment

Deploying this application can be done in one of two ways, the recommended
scale-over version and the manual straight-forward way. The choice between the
two is easily made by answering the following question.

> Is this a scheduled downtime issue?

The configuration around Coming Attractions is within the `package.json` file
within the `"config": {}` object.

```json
"config": {
    "page_title": "<PAGE_TITLE>",
    "app_name": "<APPLICATION_NAME>",
    "ca_app_name": "<CA_APPLICATION_NAME>",
    "app_routes": [
      "<ROUTE_FOR_APPLICATION_NAME>",
      "<ROUTE_FOR_CA_APPLICATION_NAME>"
    ],
    "install_scaleover": "Boolean to determin whether or not to install cf scaleover, false by default.",
    "sleep": "Boolean to determine whether Coming Attractions deploys in a dormant state, true by default."
},
```

### Manual bespoke deployments

Sometimes downtime isn't scheduled and your team wants a quick and repeatable
way to deploy Coming Attractions. These steps can deploy the contents of the
`./source/content/message.md` and `./source/template/layout.html.mo` to
:cloud:.gov with optional scale-over functionality.

### As a dormant deployment

The best use for Coming Attractions is to deploy it into your production space
in https://cloud.gov as a dormant application. This will allow your team to
leverage the scale-over functionality in a repeatable way with very little steps.

To deploy it in a dormant state ensure that the `"sleep": true` configuration is
set. This will deploy Coming Attractions with the `--no-start` command. You can
then deploy Coming Attractions with the following command.

```shell
npm run deploy
```

### Automating scheduled downtime windows

Assuming that you are using continuous delivery strategies such as Travis-CI or
CircleCI, it's very easy to leverage the scale-over functionality during
deployments which can affect your system's uptime. Such scenarios can vary
between applications but include:

- Database migrations
- Standard `cf push` deployments
- Penetration testing
- OWASP Zap scanning

This deployment strategy runs before a deployment which can cause downtime and
is planned. In future versions, the scale-over functionality will be capable of
monitor the heartbeat of your application.

#### Deploying with scale-over

Ensure that the `cf scaleover` plugin is installed properly before your
deployment begins. You can copy the `install-cf-plugins.sh` file into your
project that is going to begin unscheduled maintenance.

```shell
# After installing cf-cli`
./source/cf/install-cf-plugins.sh
# After authenticating with the API via cf login
cf scaleover <EXPERIENCING_DOWNTIME_APP> <COMING_ATTRACTIONS_APP> 2s
```

This will scale traffic over from all instances between
`<EXPERIENCING_DOWNTIME_APP>` and `<COMMING_ATTRACTIONS_APP>` over the course of
two seconds. Once that's complete, your deployment can continue and users will
be properly routed to Coming Attractions. Once the work is done, the `cf
scaleover` command can be reversed and Coming Attractions will remain dormant on
:cloud:.gov.

## Continuous Integration

This project is tested with Travis-CI. The current versions of node that are
being tested are the `latest`, `6.x`, and `5.x`. Please see the `.travis.yml` at
the root of this repository for more info.

## Dependencies

This project has dependencies outlined in [the `package.json` file](package.json)
at the root of this repository. If you seek more detailed information about,
then please [read the `DEPENDENCIES.md` file](DEPENDENCIES.md) at the root of
this repository.

## Contributing

Please refer to [the `CONTRIBUTING.md` file](CONTRIBUTING.md) at the root of
this repository for detailed information about contributing. Because this
project is more of a boilerplate and contains documentation about process, it's
important to not customize it too much for any particular kind of incident.
Scripts are a useful way to generalize things that you may want to include. When
in doubt of adding a feature, please consider documenting it as an issue or a
pull request in the repository to gather feedback.
