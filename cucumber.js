let common = [
    'features/**/*.feature',                // Specify our feature files'
    '--require build/step-definitions/*.js',   // Load step definitions
  ].join(' ');
  
  module.exports = {
    default: common
  };