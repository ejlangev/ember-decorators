const getChannelURL = require('ember-source-channel-url');

module.exports = function() {
  return Promise.all([
    getChannelURL('release'),
    getChannelURL('beta'),
    getChannelURL('canary'),
  ]).then((urls) => {
    return {
      scenarios: [
        {
          name: 'ember-1.11',
          bower: {
            dependencies: {
              'ember': '~1.11.0',
              'ember-cli-shims': '0.0.6',
              'ember-data': '~1.13.0'
            },
            resolutions: {
              'ember': '~1.11.0',
              'ember-cli-shims': '0.0.6',
              'ember-data': '~1.13.0'
            }
          },
          npm: {
            devDependencies: {
              'ember-cli-shims': null,
              'ember-data': '~1.13.0',
              'ember-source': null,
              'ember-cli-addon-docs': null
            }
          }
        },
        {
          name: 'ember-1.13',
          bower: {
            dependencies: {
              'ember': '~1.13.0',
              'ember-cli-shims': '0.0.6',
              'ember-data': '~1.13.0'
            },
            resolutions: {
              'ember': '~1.13.0',
              'ember-cli-shims': '0.0.6',
              'ember-data': '~1.13.0'
            }
          },
          npm: {
            devDependencies: {
              'ember-cli-shims': null,
              'ember-data': '~1.13.0',
              'ember-source': null,
              'ember-cli-addon-docs': null
            }
          }
        },
        {
          name: 'ember-lts-2.4',
          bower: {
            dependencies: {
              'ember': 'components/ember#lts-2-4',
              'ember-cli-shims': '0.1.0'
            },
            resolutions: {
              'ember': 'lts-2-4',
              'ember-cli-shims': '0.1.0'
            }
          },
          npm: {
            devDependencies: {
              'ember-source': null,
              'ember-data': '~2.4.0',
              'ember-cli-shims': null,
              'ember-cli-addon-docs': null
            }
          }
        },
        {
          name: 'ember-lts-2.8',
          bower: {
            dependencies: {
              'ember': 'components/ember#lts-2-8'
            },
            resolutions: {
              'ember': 'lts-2-8'
            }
          },
          npm: {
            devDependencies: {
              'ember-source': null,
              'ember-data': '~2.8.0'
            }
          }
        },
        {
          name: 'ember-lts-2.12',
          npm: {
            devDependencies: {
              'ember-source': '~2.12.0',
              'ember-data': '~2.12.0'
            }
          }
        },
        {
          name: 'ember-lts-2.16',
          npm: {
            devDependencies: {
              'ember-source': '~2.16.0',
              'ember-data': '~2.16.0'
            }
          }
        },
        {
          name: 'ember-lts-2.18',
          npm: {
            devDependencies: {
              'ember-source': '~2.18.0',
              'ember-data': '~2.18.0'
            }
          }
        },
        {
          name: 'ember-release',
          npm: {
            devDependencies: {
              'ember-source': urls[0],
              'ember-data': 'emberjs/data#release'
            }
          }
        },
        {
          name: 'ember-beta',
          npm: {
            devDependencies: {
              'ember-source': urls[1],
              'ember-data': 'emberjs/data#beta'
            }
          }
        },
        {
          name: 'ember-canary',
          npm: {
            devDependencies: {
              'ember-source': urls[2],
              'ember-data': 'emberjs/data#master'
            }
          }
        },
        {
          name: 'ember-default',
          npm: {
            devDependencies: {}
          }
        }
      ]
    };
  });
};
