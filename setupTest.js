var jest = require('jest');

jest.mock('react-native',  () => require('react-native-mock-render'), {virtual: true});