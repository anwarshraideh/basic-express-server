'use strict';

require('dotenv').config();

require('./src/sever').start(process.env.PORT);