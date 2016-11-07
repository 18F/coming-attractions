---
applications:
  - name: {{app_name}}
    buildpack: https://github.com/cloudfoundry/staticfile-buildpack.git
    memory: 128M
    path: public/
    command: null
    routes:
      {{#app_routes}}
      - route: {{.}}
      {{/app_routes}}
