# primo-explore-slaask

<!-- ![Build Status](https://api.travis-ci.org/Alliance-PCJWG/primo-explore-clickable-logo.svg?branch=master) -->

## Features
The Slaask widget will appear in primo, enabling communication with patrons via Slack. More information on Slaask is [available here](https://get.slaask.com/).

## Install
1. Make sure you've installed and configured [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).
2. Navigate to your template/central package root directory. For example:
    ```
    cd primo-explore/custom/MY_VIEW_ID
    ```
3. If you do not already have a `package.json` file in this directory, create one:
    ```
    npm init -y
    ```
4. Install this package:
    ```
    npm install primo-explore-slaask --save-dev
    ```

## Usage
Once this package is installed, add `slaask` as a dependency for your custom module definition.

```js
var app = angular.module('viewCustom', ['slaask'])
```

Note: If you're using the `--browserify` build option, you will need to first import the module with:

```javascript
import 'primo-explore-slaask';
```

The widget requires your unique Slaask ID to function, which can be obtained in your Slaask settings. You can configure it as below.

```js
app.constant('slaask_id', '295ddfaketoken356b7da45a415a')
```

<!-- ## Running tests
1. Clone the repo
2. Run `npm install`
3. Run `npm test` -->
