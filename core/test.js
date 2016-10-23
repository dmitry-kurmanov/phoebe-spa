var tests, source;

tests = require.context('../test', true, /\.jsx?$/);
tests.keys().forEach(
    (path) => {
        if(process.env.TEST_FILE_NAME) {
            if(process.env.TEST_FILE_NAME === path) {
                tests(path);
            }
        } else {
            tests(path);
        }
    }
);

source = require.context('../src', true, /\.jsx?$/);
source.keys().forEach(
    (path) => {
        switch(path) {
            case './client/index.js':
            case './server/index.js':
                return;
        }
        source(path);
    }
);
