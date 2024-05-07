const path = require('path');

module.exports = {
  apps: [
    {
      name: 'opdv-api',
      script: path.resolve(__dirname, 'dist', 'index.js'),
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '8',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};