# Coming Attractions

[![Build Status](https://travis-ci.org/18F/coming-attractions.svg?branch=master)](https://travis-ci.org/18F/coming-attractions)

For those moments when you need to redirect traffic to a static site for any
number of reasons that share the same thing in common, _alerting your users in a
quick and easy way during an incident response_. The incident could be scheduled
downtime, the lifetime of your application abruptly ends, or your service is on
fire and you'd like to let your users have more information than a blank page or
application error page.

## Technologies used

- [Node](https://nodejs.org) for development.
- [Cloud.gov](https://cloud.gov) for deployment.
- [scaleover-plugin](https://github.com/krujos/scaleover-plugin) for traffic
  routing _if necessary_.

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

## Deployment

Deploying this application can be done in one of two ways, the recommended
zero-downtime version and the manual no-frills way. The choice between the two
is easily made by answering the following question.

> Is this a scheduled downtime issue?

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
